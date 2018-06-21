/* Basic navigation clicks */
$(document).on('click','#homeId', function () {
    alert("You clicked Home");
});
$(document).on('click','#resumeId', function () {
    alert("You clicked Resume");
});
$(document).on('click','#projectsId', function () {
    alert("You clicked Projects");
});
$(document).on('click','#blogId', function () {
    alert("You clicked Blog");
});
$(document).on('mouseover click','#contactMeId', function () {
    $("#contactMeListdiv").load("../../html/contactMeHoverMenu.html");
});
$(document).on('mouseover click','#dropLineId', function () {
    $("#dropLineListdiv").load("../../html/dropLineHoverMenu.html");
});
/* ******************************************** */