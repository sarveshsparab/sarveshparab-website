/* Basic navigation clicks */
$(document).on('click','#homeId', function () {
    $(".activeSection").toggleClass("activeSection inactiveSection");
    $("#homeSectionDiv").removeClass("inactiveSection");
    $("#homeSectionDiv").addClass("activeSection");
});
$(document).on('click','#resumeId', function () {

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

/* Sub-Level Navigation Menus */
$(document).on('click','#experienceId', function () {
    alert("You clicked experience");
});
$(document).on('click','#educationId', function () {
    alert("You clicked education");
});
$(document).on('click','#webSkillId', function () {
    alert("You clicked webSkill");
});
$(document).on('click','#languagesSkillId', function () {
    alert("You clicked languagesSkill");
});
$(document).on('click','#domainsSkillId', function () {
    alert("You clicked domainsSkill");
});
$(document).on('click','#databasesSkillId', function () {
    alert("You clicked databasesSkill");
});
$(document).on('click','#frameworksSkillId', function () {
    alert("You clicked frameworksSkill");
});
$(document).on('click','#platformsSkillId', function () {
    alert("You clicked platformsSkill");
});
$(document).on('click','#toolsSkillId', function () {
    alert("You clicked toolsSkill");
});
/* ******************************************** */