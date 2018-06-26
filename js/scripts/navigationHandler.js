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
    $("#projectsSectionDiv").load("../../html/projectsSection.html", function() {
        function resizeGridItem(item) {
            grid = document.getElementsByClassName("grid")[0];
            rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
            rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
            rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
            item.style.gridRowEnd = "span " + rowSpan;
        }
        function resizeAllGridItems() {
            allItems = document.getElementsByClassName("item");
            for (x = 0; x < allItems.length; x++) {
                resizeGridItem(allItems[x]);
            }
        }
        function resizeInstance(instance) {
            item = instance.elements[0];
            resizeGridItem(item);
        }
        window.onload = resizeAllGridItems();
        window.addEventListener("resize", resizeAllGridItems);
        allItems = document.getElementsByClassName("item");
        for (x = 0; x < allItems.length; x++) {
            imagesLoaded(allItems[x], resizeInstance);
        }
        $('.tileReadMore').on('click',function(){
            var id=this.id;
            $('.modal-body').load('../../php/getReadMoreContent.php?type=prj&id='+id,function(){
                $('#readMoreModal').modal({show:true});
            });
        });
    });
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
    $(".activeSection").toggleClass("activeSection inactiveSection");
    $("#experienceSectionDiv").load("../../html/experienceSection.html", function() {
        $('.cd-timeline__read-more').on('click',function(){
            var id=this.id;
            $('.modal-body').load('../../php/getReadMoreContent.php?type=exp&id='+id,function(){
                $('#readMoreModal').modal({show:true});
            });
        });
    });
    $("#experienceSectionDiv").removeClass("inactiveSection");
    $("#experienceSectionDiv").addClass("activeSection");
});
$(document).on('click','#educationId', function () {
    $("#educationSectionDiv").html('<div id="jqueryLoaderId" class="jqueryLoader"><i class="fa fa-spin fa-spinner"></i></div>');
    $(".activeSection").toggleClass("activeSection inactiveSection");
    $("#educationSectionDiv").load("../../html/educationSection.html", function() {
        $('.cd-timeline__read-more').on('click',function(){
            var id=this.id;
            $('.modal-body').load('../../php/getReadMoreContent.php?type=edu&id='+id,function(){
                $('#readMoreModal').modal({show:true});
            });
        });
    });
    $("#educationSectionDiv").removeClass("inactiveSection");
    $("#educationSectionDiv").addClass("activeSection");
});
$(document).on('click','#webSkillId', function () {
    $("#skillsSectionDiv").html('<div id="jqueryLoaderId" class="jqueryLoader"><i class="fa fa-spin fa-spinner"></i></div>');
    $(".activeSection").toggleClass("activeSection inactiveSection");
    $("#skillsSectionDiv").load("../../php/skillsSection.php?skillType=web", function () {
        jQuery(document).ready(function(){
            jQuery('.skillbar').each(function(){
                jQuery(this).find('.skillbar-bar').animate({
                    width:jQuery(this).attr('data-percent')
                },6000);
            });
        });
    });
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