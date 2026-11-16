let errors = ["Verifizierung ungültig", "Ungültige Eingabe"];
let codeInputField = $("#fudis_otp_input");
let paper_tan = "971981";

function displayError(error_code)
{
    $("#error_msg").html(errors[error_code]);
}

$(document).ready(function() {
    let tokenDisplayElement = $("#token_hint");
    if(selected_token === "TOTP")
        tokenDisplayElement.html("totp (TOTP0000CCB7)");
    else if(selected_token === "PAPER")
        tokenDisplayElement.html("indexed_tan (PPR00015570)    Hinweis: &nbsp;2");

    $("#button_check").click(function() {

        let code_input = codeInputField.val();
        if(code_input.length !== 6)
        {
            displayError(1);
            return;
        }

        let code_correct = selected_token === "TOTP" ? generateTOTPCode(shared_secret) : paper_tan;
        if(code_input === code_correct)
            window.location.replace("./login_success.html");
        else
            displayError(0);
    });
});

codeInputField.keypress(function(e) {
    if(e.which === 13) // Enter
    {
        e.preventDefault();
        $("#button_check").click();
    }
});

$("#_eventId_FudisCrRestart").click(function() {
    localStorage.setItem("countTokenRestart", parseInt(countTokenRestart) + 1 + '');
    reloadVariables();
    updateOverlay();
    window.location.replace("./select_token.html");
});