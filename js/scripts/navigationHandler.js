/* Basic navigation clicks */
$(document).on('click','#homeId', function () {
    $(".activeSection").toggleClass("activeSection inactiveSection");
    $("#homeSectionDiv").removeClass("inactiveSection");
    $("#homeSectionDiv").addClass("activeSection");
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
    $("#blogSectionDiv").removeClass("inactiveSection");
    $("#blogSectionDiv").addClass("activeSection");
});


$(document).on('mouseover click','#contactMeId', function () {
    $("#contactMeListdiv").load("../../html/contactMeHoverMenu.html");
});
/* ******************************************** */