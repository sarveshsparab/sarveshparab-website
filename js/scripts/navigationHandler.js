/* Basic navigation clicks */
$(document).on('click','#homeId', function () {
    $(".activeSection").toggleClass("activeSection inactiveSection");
    $("#homeSectionDiv").removeClass("inactiveSection");
    $("#homeSectionDiv").addClass("activeSection");
});
$(document).on('click','#resumeId', function () {

});
$(document).on('click','#projectsId', function () {
    $("#projectsSectionDiv").html('<div id="jqueryLoaderId" class="jqueryLoader"><i class="fa fa-spin fa-spinner"></i></div>');
    $(".activeSection").toggleClass("activeSection inactiveSection");
    $("#projectsSectionDiv").load("../../html/projectsSection.html");
    $("#projectsSectionDiv").removeClass("inactiveSection");
    $("#projectsSectionDiv").addClass("activeSection");
});
$(document).on('click','#blogId', function () {
    $("#blogSectionDiv").html('<div id="jqueryLoaderId" class="jqueryLoader"><i class="fa fa-spin fa-spinner"></i></div>');
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
    $("#experienceSectionDiv").html('<div id="jqueryLoaderId" class="jqueryLoader"><i class="fa fa-spin fa-spinner"></i></div>');
    $(".activeSection").toggleClass("activeSection inactiveSection")
    $("#experienceSectionDiv").load("../../html/experienceSection.html");
    $("#experienceSectionDiv").removeClass("inactiveSection");
    $("#experienceSectionDiv").addClass("activeSection");
});
$(document).on('click','#educationId', function () {
    $("#educationSectionDiv").html('<div id="jqueryLoaderId" class="jqueryLoader"><i class="fa fa-spin fa-spinner"></i></div>');
    $(".activeSection").toggleClass("activeSection inactiveSection");
    $("#educationSectionDiv").load("../../html/educationSection.html");
    $("#educationSectionDiv").removeClass("inactiveSection");
    $("#educationSectionDiv").addClass("activeSection");
});
$(document).on('click','#webSkillId', function () {
    $("#skillsSectionDiv").html('<div id="jqueryLoaderId" class="jqueryLoader"><i class="fa fa-spin fa-spinner"></i></div>');
    $(".activeSection").toggleClass("activeSection inactiveSection");
    $("#skillsSectionDiv").load("../../php/skillsSection.php?skillType=web");
    $("#skillsSectionDiv").removeClass("inactiveSection");
    $("#skillsSectionDiv").addClass("activeSection");
});
$(document).on('click','#languagesSkillId', function () {
    $("#skillsSectionDiv").html('<div id="jqueryLoaderId" class="jqueryLoader"><i class="fa fa-spin fa-spinner"></i></div>');
    $(".activeSection").toggleClass("activeSection inactiveSection");
    $("#skillsSectionDiv").load("../../php/skillsSection.php?skillType=languages");
    $("#skillsSectionDiv").removeClass("inactiveSection");
    $("#skillsSectionDiv").addClass("activeSection");
});
$(document).on('click','#domainsSkillId', function () {
    $("#skillsSectionDiv").html('<div id="jqueryLoaderId" class="jqueryLoader"><i class="fa fa-spin fa-spinner"></i></div>');
    $(".activeSection").toggleClass("activeSection inactiveSection");
    $("#skillsSectionDiv").load("../../php/skillsSection.php?skillType=domains");
    $("#skillsSectionDiv").removeClass("inactiveSection");
    $("#skillsSectionDiv").addClass("activeSection");
});
$(document).on('click','#databasesSkillId', function () {
    $("#skillsSectionDiv").html('<div id="jqueryLoaderId" class="jqueryLoader"><i class="fa fa-spin fa-spinner"></i></div>');
    $(".activeSection").toggleClass("activeSection inactiveSection");
    $("#skillsSectionDiv").load("../../php/skillsSection.php?skillType=databases");
    $("#skillsSectionDiv").removeClass("inactiveSection");
    $("#skillsSectionDiv").addClass("activeSection");
});
$(document).on('click','#frameworksSkillId', function () {
    $("#skillsSectionDiv").html('<div id="jqueryLoaderId" class="jqueryLoader"><i class="fa fa-spin fa-spinner"></i></div>');
    $(".activeSection").toggleClass("activeSection inactiveSection");
    $("#skillsSectionDiv").load("../../php/skillsSection.php?skillType=frameworks");
    $("#skillsSectionDiv").removeClass("inactiveSection");
    $("#skillsSectionDiv").addClass("activeSection");
});
$(document).on('click','#platformsSkillId', function () {
    $("#skillsSectionDiv").html('<div id="jqueryLoaderId" class="jqueryLoader"><i class="fa fa-spin fa-spinner"></i></div>');
    $(".activeSection").toggleClass("activeSection inactiveSection");
    $("#skillsSectionDiv").load("../../php/skillsSection.php?skillType=platforms");
    $("#skillsSectionDiv").removeClass("inactiveSection");
    $("#skillsSectionDiv").addClass("activeSection");
});
$(document).on('click','#toolsSkillId', function () {
    $("#skillsSectionDiv").html('<div id="jqueryLoaderId" class="jqueryLoader"><i class="fa fa-spin fa-spinner"></i></div>');
    $(".activeSection").toggleClass("activeSection inactiveSection");
    $("#skillsSectionDiv").load("../../php/skillsSection.php?skillType=tools");
    $("#skillsSectionDiv").removeClass("inactiveSection");
    $("#skillsSectionDiv").addClass("activeSection");
});
/* ******************************************** */