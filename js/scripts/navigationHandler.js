/* Basic navigation clicks */
$(document).on('click','#homeId', function () {
    alert("You clicked Home");
    $(".activeSection").toggleClass("activeSection inactiveSection");
    $("#homeSectionDiv").load("../../html/homeSection.html");
    $("#homeSectionDiv").toggleClass("inactiveSection activeSection");
});
$(document).on('click','#resumeId', function () {
    alert("You clicked Resume");
});
$(document).on('click','#projectsId', function () {
    alert("You clicked Projects");
});
$(document).on('click','#blogId', function () {
    $(".activeSection").toggleClass("activeSection inactiveSection");
    $("#blogSectionDiv").load("../../html/blogSection.html");
    $("#blogSectionDiv").toggleClass("inactiveSection activeSection");
});


$(document).on('mouseover click','#contactMeId', function () {
    $("#contactMeListdiv").load("../../html/contactMeHoverMenu.html");
});
/* ******************************************** */