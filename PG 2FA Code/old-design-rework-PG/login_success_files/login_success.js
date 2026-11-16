$(document).ready(function() {
    //only set the end time if it hasn't been set yet
    reloadVariables();
    if(end_time === null || parseInt(end_time) === 0)
        localStorage.setItem("end_time", new Date().getTime() + '');
    reloadVariables();
    updateOverlay();
});