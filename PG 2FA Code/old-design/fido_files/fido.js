$(document).ready(function() {
   let validateTokenButton = $("#get_web_authn_assertion");

   validateTokenButton.click(function() {
      verifyCredential().then(res =>
      {
         if(!res)
            validateTokenButton.text("NotAllowedError - Fehler in der Validierung des WebAuthn-Token, bitte erneut versuchen.");
         else
            window.location.replace("./login_success.html");
      });
   });

   validateTokenButton.click();
});