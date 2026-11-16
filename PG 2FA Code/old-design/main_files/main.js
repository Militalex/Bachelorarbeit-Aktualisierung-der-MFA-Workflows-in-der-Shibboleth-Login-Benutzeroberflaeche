let shared_secret = null;
let start_time = 0;
let end_time = 0;
let pages_visited = 0;
let started = false;
let publicKeyCredential = null;
let selected_token = null;
let countTokenRestart = null;

function arrayBufferToBase64(buffer) {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
}
function base64ToArrayBuffer(base64) {
    const binary = atob(base64);
    const len = binary.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        bytes[i] = binary.charCodeAt(i);
    }
    return bytes.buffer;
}



async function registerCredential() {
    const publicKey = {
        challenge: new Uint8Array(32),
        rp: {
            name: 'Projektgruppe 2FA',
            id: 'localhost' // Update with the correct rpId
        },
        user: {
            id: new Uint8Array(16),
            name: 'Benutzer',
            displayName: 'password'
        },
        pubKeyCredParams: [
            {
                type: 'public-key',
                alg: -7 // ES256 algorithm
            }
        ]
    };

    let res = false;

    await navigator.credentials.create({publicKey})
        .then((newCredential) => {
            const rawIdArray = new Uint8Array(newCredential.rawId);
            console.log('RawId:', rawIdArray);
            const rawIdString = arrayBufferToBase64(newCredential.rawId);
            let publicKeyCredential = {
                rawId: rawIdString,
                type: newCredential.type
            };
            localStorage.setItem('publicKeyCredential', JSON.stringify(publicKeyCredential));
            reloadVariables();
            updateOverlay();
            res = true;
        })
        .catch((error) => {
            console.error('WebAuthn registration error:', error);
            displayOverlayError('WebAuthn registration error:' + error)
            res = false;
        });
    return res;
}



async function verifyCredential() {
    if (!publicKeyCredential) {
        console.log('No stored credential found.');
        return;
    }
    console.log('Using stored credential:', publicKeyCredential);
    const rawIdArrayBuffer = base64ToArrayBuffer(publicKeyCredential.rawId);
    const publicKeyVerification = {
        publicKey: {
            challenge: new Uint8Array(32),
            rpId: 'localhost', // Update with the correct rpId
            allowCredentials: [
                {
                    id: new Uint8Array(rawIdArrayBuffer),
                    type: publicKeyCredential.type
                }
            ],
            authenticatorSelection: {
                requireResidentKey: true,
                userVerification: 'required',
            },
            timeout: 60000,
            extensions: {}
        },
        allowCredentials: [
            {
                id: new Uint8Array(rawIdArrayBuffer),
                type: publicKeyCredential.type
            }
        ],
        challenge: new Uint8Array(32),
    };

    let res = false;

    await navigator.credentials.get({publicKey: publicKeyVerification})
        .then((assertion) => {
            console.log('WebAuthn credential verified:', assertion);
            res = true;
        })
        .catch((error) => {
            console.error('WebAuthn verification error:', error);
            displayOverlayError('WebAuthn verification error:' + error)
            res = false;
        });
    return res;
}







function reloadVariables()
{
    shared_secret = localStorage.getItem("shared_secret");
    start_time = parseInt(localStorage.getItem("start_time"));
    end_time = parseInt(localStorage.getItem("end_time"));
    pages_visited = localStorage.getItem("pages_visited");
    started = localStorage.getItem("started");
    publicKeyCredential = JSON.parse(localStorage.getItem("publicKeyCredential"));
    selected_token = localStorage.getItem("selected_token");
    countTokenRestart = parseInt(localStorage.getItem("countTokenRestart"));
}



function resetEnvironment()
{
    localStorage.removeItem("start_time");
    localStorage.removeItem("end_time");
    localStorage.removeItem("pages_visited");
    localStorage.removeItem("started");
    localStorage.removeItem("selected_token");
    localStorage.removeItem("countTokenRestart");
    reloadVariables();
}

function updateOverlay()
{
    let qrCodeElement = $("#qrCode");
    qrCodeElement.empty();
    if(shared_secret !== null)
        qrCodeElement.append(generateQRCode('Shibboleth Studie', 'localhost', shared_secret));

    let statisticsContentElement = $("#statisticsContent");
    statisticsContentElement.empty();

    if(started === null)
        return; //environment not started yet, so no statistics to display

    let statisticsContent = "";
    //add the global statistic variables to the statisticsContent string
    statisticsContent += "<p class='statisticsName'>Time: " + (end_time !== 0 ? Number((end_time - start_time) / 1000).toFixed(2) + 's' : '(study in progress)') + "</p>"; //good code lmao
    statisticsContent += "<p class='statisticsName'>FIDO2: " + ((publicKeyCredential === null) ? 'Not registered' : 'Registered') + "</p>";
    statisticsContent += "<p class='statisticsName'>TOTP: " + ((shared_secret === null) ? 'Not registered' : 'Registered') + "</p>";
    statisticsContent += "<p class='statisticsName'>Pages visited: " + pages_visited + "</p>";
    statisticsContent += "<p class='statisticsName'>Token restarts: " + countTokenRestart + "</p>";
    statisticsContentElement.append(statisticsContent);


}

function generateSharedSecret() {
    const base32Chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
    let secret = '';
    for (let i = 0; i < 16; i++)
        secret += base32Chars[Math.floor(Math.random() * base32Chars.length)];
    return secret;
}

function displayOverlayError(message)
{
    $("#overlayError").text(message);
}

function generateTOTPCode(sharedSecret) {
    return new OTPAuth.TOTP({ secret: sharedSecret }).generate();
}

function start_environment()
{
    localStorage.setItem("start_time", new Date().getTime() + '');
    localStorage.setItem("started", true + '');
    localStorage.setItem("pages_visited", '0');
    localStorage.setItem("end_time", '0');
    localStorage.setItem("countTokenRestart", '0');
    reloadVariables();
    updateOverlay();
}

function generateQRCode(issuer, accountName, sharedSecret) {
    const dataURI = `otpauth://totp/${encodeURIComponent(issuer)}:${encodeURIComponent(accountName)}?secret=${encodeURIComponent(sharedSecret)}&issuer=${encodeURIComponent(issuer)}`;
    const qrCode = new QRious({
        value: dataURI,
        size: 128,
    });
    qrCode.get();
    return qrCode.image;
}

$(document).ready(function() {

    reloadVariables();
    updateOverlay();

    if(started !== null)
    {
        pages_visited = parseInt(pages_visited) + 1;
        localStorage.setItem("pages_visited", pages_visited + '');
        reloadVariables();
        updateOverlay();
    }

    $("#validateToken").click(function() {
        if(!verifyCredential())
            displayOverlayError('Error while verifying token');
    });

    $(document).keyup(function(e) {
        if (e.key === "F9") {
            e.preventDefault();
            $("#overlay").fadeOut();
        }
    });

    $("#resetEnvironment").click(function() {
        resetEnvironment();
        reloadVariables();
        updateOverlay();
    });

    $("#startEnvironment").click(function() {
        start_environment();
    });

    $("#registerToken").click(function () {
        if(!registerCredential())
            displayOverlayError('Error while registering token');
    });

    $("#generateQRCode").click(function() {
        localStorage.setItem("shared_secret", generateSharedSecret());
        reloadVariables();
        updateOverlay();
    });

    $("#login_button").click(function() {
        localStorage.setItem("start_time", new Date().getTime() + '');
    });
});


$(document).keydown(function(event) {
    if (event.which === 119) //F8
        $("#overlay").fadeIn();
});