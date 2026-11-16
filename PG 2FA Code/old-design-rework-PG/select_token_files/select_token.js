$("#_eventId_proceed").click(function() {
    let selected_token_element = document.querySelector('input[name="fudis_selected_token_ids_input"]:checked');
    if(selected_token_element === null)
        return;
    let selected_token = selected_token_element.getAttribute('id');
    localStorage.setItem("selected_token", selected_token);
    let url = selected_token_element.getAttribute('data-href');
    window.location.replace(url);
});