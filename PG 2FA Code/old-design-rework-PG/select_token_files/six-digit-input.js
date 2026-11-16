const paper_tans = ['971978', '422698', '565783', '388309']; //hardcoded "paper" TANs

function handleCodeSubmit(context) {
    // TODO: Download jquery and bootstrap dependencies for offline use
    // TODO: hilfe text für jede option
    const codeInput = $(".digit_field").map(function () {
        return $(this).val();
    }).get().join("");
    let errorDiv = $(context).closest('.option').find(".option-content-error");

    const codeTotp = generateTOTPCode(shared_secret);
    if (codeInput === codeTotp || paper_tans.includes(codeInput)) {
        $("#submitted").prop("checked", true);
        setTimeout(function () {
            window.location.assign("./login_success.html");
        }, 800);
    } else {
        $("#error_code_checkbox").prop("checked", true);
        $('.digit_field').val("");
        $("#submit_button").prop("disabled", true);
        setTimeout(function () {
            $("#error_code_checkbox").prop("checked", false);
            errorDiv.text("Ungültiger Code");
            errorDiv.addClass("option-content-error-active");
        }, 1000);
    }
}

$(document).ready(function () {
    const optionTooltips = $(".option-tooltip");
    const optionsDiv = $(".option");
    const submitButton = $("#submit_button");
    const digitFields = $(".digit_field");
    let allFieldsFilled = false; // Declare as global variable

    optionsDiv.addClass("fade-in");
    submitButton.prop("disabled", true);

    optionsDiv.click(function (event) {
        optionsDiv.removeClass("selected");
        $(this).addClass("selected");
        if ($(this).data("option") === 1 && !$(".digit_field").is(":focus"))
            $("#n1").focus();
    });

    digitFields.on("input", function () {
        allFieldsFilled = digitFields.get().every(function (el) {
            return $(el).val().trim() !== "";
        });

        submitButton.prop("disabled", !allFieldsFilled);

        if ($(this).attr("id") === "n6") {
            if (allFieldsFilled)
                submitButton.focus();
        } else
            $(this).next("input").focus();
    });

    digitFields.on("keydown", function (event) {
        const key = event.key;
        const keyIsValid = /^[0-9]$/i.test(key);
        let errorDiv = $(this).closest(".option-content").find(".option-content-error");

        if (keyIsValid) {
            $(this).val("");
            errorDiv.removeClass("option-content-error-active");
        } else {
            switch (event.keyCode) {
                case 8: // Key: Backspace
                    $(this).val("");
                    submitButton.prop("disabled", true);
                    $(this).prev("input").focus();
                    event.preventDefault();
                    break;
                case 37: // Key: Left Arrow
                    if ($(this).attr("id") === "n1")
                        submitButton.focus();
                    else
                        $(this).prev("input").focus();
                    event.preventDefault();
                    break;
                case 39: // Key: Right Arrow
                case 9: // Key: Tab
                    if ($(this).attr("id") !== "n6")
                        $(this).next("input").focus();
                    else if (submitButton.prop("disabled") === false)
                        submitButton.focus();
                    event.preventDefault();
                    break;
                case 13: // Key: Enter
                    if (!submitButton.prop("disabled"))
                        submitButton.click();
                    break;
                default:
                    let currentInputField = $(this);
                    currentInputField.addClass("error_character_input");
                    //find closest option-content-error div
                    errorDiv.text("Bitte nur Zahlen eingeben!");
                    errorDiv.addClass("option-content-error-active");
                    setTimeout(function () {
                        currentInputField.removeClass("error_character_input");
                    }, 640);
                    event.preventDefault();
                    return;
            }
        }
    });

    submitButton.keydown(function (event) {
        if (event.keyCode === 37 || event.keyCode === 8) {
            // Key: Left Arrow or Backspace
            if (!submitButton.prop("disabled"))
                digitFields.last().focus();
            event.preventDefault();
        }
        if (event.keyCode === 9)
            event.preventDefault();
    });

    $('.option-tooltip').on('click', function (event) {
        let optionDiv = $(this).closest('.option');
        let optionContent = optionDiv.attr('data-helpContent');
        let optionTitle = optionDiv.attr('data-helpTitle');

        $('#helpModalTitle').text(optionTitle);
        $('#helpModalBody').html(optionContent);

        $(this).find('.question-mark').tooltip('hide'); //hide tooltip so it doesn't overlap with modal
        $('#option-help-modal').modal('show'); //show modal
        return false;
    });
});