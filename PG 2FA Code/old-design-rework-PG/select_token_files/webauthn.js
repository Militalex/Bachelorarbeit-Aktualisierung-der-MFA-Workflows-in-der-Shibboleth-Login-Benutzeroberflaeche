$(document).ready(function () {
    let verifyFidoButton = $('.verify_fido_submit');

    verifyFidoButton.on('click', async function () {
        let errorDiv = $(this).closest(".option-content").find(".option-content-error");
        errorDiv.removeClass("option-content-error-active");

        await verifyCredential().then(r => {
            console.log(r);
            if (r[0]) {
                verifyFidoButton.attr('data-state', "success");
                errorDiv.text(" ");
                errorDiv.removeClass("option-content-error-active");
                setTimeout(function () {
                    window.location.assign("./login_success.html");
                }, 300);
            } else {
                verifyFidoButton.attr('data-state', "error");
                if (r[2] === "NotAllowedError")
                    errorDiv.text("Authentifizierung abgebrochen");
                else
                    errorDiv.text("Authentifizierung fehlgeschlagen");
                errorDiv.addClass("option-content-error-active");

            }
        });

        setTimeout(function () {
            verifyFidoButton.attr('data-state', "");
        }, 700);
    });
});