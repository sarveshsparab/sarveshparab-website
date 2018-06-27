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
        gridLayoutResizer();
        $('.tileReadMore').on('click',function(){
            var id=this.id;
            $('.modal-body').load('../../php/content/getReadMoreContent.php?type=prj&id='+id,function(){
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
/* *********************************************************** */

/* Sub-Level Navigation Menus */
$(document).on('click','#experienceId', function () {
    $("#experienceSectionDiv").html('<div id="jqueryLoaderId" class="jqueryLoader"><i class="fa fa-spin fa-spinner"></i></div>');
    $(".activeSection").toggleClass("activeSection inactiveSection");
    $("#experienceSectionDiv").load("../../php/content/fetchExperience.php", function() {
        $('.cd-timeline__read-more').on('click',function(){
            var id=this.id;
            $.ajax({
                url: '../../php/content/getReadMoreContent.php?type=exp&id=' + id,
                success: function (result) {
                    var parsedResult = JSON.parse(result);
                    $(".modal-body").html('<div id="jqueryLoaderId" class="jqueryLoader" style="line-height: unset"><i class="fa fa-spin fa-spinner"></i></div>');
                    if (parsedResult.status == 'ERROR') {
                        console.error("Error : No data returned from the db | Result : " + result);
                    } else {
                        $(".modal-title").html(parsedResult.designation);
                        $(".modal-body").html(parsedResult.long_desc);
                        $('#readMoreModal').modal({show: true});
                    }
                },
                error: function () {
                    console.error("Error : In AJAX call for fetching read more data | id : " + id);
                }
            });
        });
        verticalTimeLineAnim();
    });
    $("#experienceSectionDiv").removeClass("inactiveSection");
    $("#experienceSectionDiv").addClass("activeSection");
});
$(document).on('click','#educationId', function () {
    $("#educationSectionDiv").html('<div id="jqueryLoaderId" class="jqueryLoader"><i class="fa fa-spin fa-spinner"></i></div>');
    $(".activeSection").toggleClass("activeSection inactiveSection");
    $("#educationSectionDiv").load("../../php/content/fetchEducation.php", function() {
        $('.cd-timeline__read-more').on('click', function () {
            var id = this.id;
            $.ajax({
                url: '../../php/content/getReadMoreContent.php?type=edu&id=' + id,
                success: function (result) {
                    var parsedResult = JSON.parse(result);
                    $(".modal-body").html('<div id="jqueryLoaderId" class="jqueryLoader" style="line-height: unset"><i class="fa fa-spin fa-spinner"></i></div>');
                    if (parsedResult.status == 'ERROR') {
                        console.error("Error : No data returned from the db | Result : " + result);
                    } else {
                        $(".modal-title").html(parsedResult.degree);
                        $(".modal-body").html(parsedResult.long_desc);
                        $('#readMoreModal').modal({show: true});
                    }
                },
                error: function () {
                    console.error("Error : In AJAX call for fetching read more data | id : " + id);
                }
            });
        });
        verticalTimeLineAnim();
    });
    $("#educationSectionDiv").removeClass("inactiveSection");
    $("#educationSectionDiv").addClass("activeSection");
});
/* *********************************************************** */

/* Skill Sections */
$(document).on('click','#webSkillId', function () {
    $("#skillsSectionDiv").html('<div id="jqueryLoaderId" class="jqueryLoader"><i class="fa fa-spin fa-spinner"></i></div>');
    $(".activeSection").toggleClass("activeSection inactiveSection");
    $("#skillsSectionDiv").load("../../php/content/fetchSkills.php?skillType=web", function () {
        jQuery('.skillbar').each(skillBarAnim);
    });
    $("#skillsSectionDiv").removeClass("inactiveSection");
    $("#skillsSectionDiv").addClass("activeSection");
});
$(document).on('click','#languagesSkillId', function () {
    $("#skillsSectionDiv").html('<div id="jqueryLoaderId" class="jqueryLoader"><i class="fa fa-spin fa-spinner"></i></div>');
    $(".activeSection").toggleClass("activeSection inactiveSection");
    $("#skillsSectionDiv").load("../../php/content/fetchSkills.php?skillType=languages", function () {
        jQuery('.skillbar').each(skillBarAnim);
    });
    $("#skillsSectionDiv").removeClass("inactiveSection");
    $("#skillsSectionDiv").addClass("activeSection");
});
$(document).on('click','#domainsSkillId', function () {
    $("#skillsSectionDiv").html('<div id="jqueryLoaderId" class="jqueryLoader"><i class="fa fa-spin fa-spinner"></i></div>');
    $(".activeSection").toggleClass("activeSection inactiveSection");
    $("#skillsSectionDiv").load("../../php/content/fetchSkills.php?skillType=domains", function () {
        jQuery('.skillbar').each(skillBarAnim);
    });
    $("#skillsSectionDiv").removeClass("inactiveSection");
    $("#skillsSectionDiv").addClass("activeSection");
});
$(document).on('click','#databasesSkillId', function () {
    $("#skillsSectionDiv").html('<div id="jqueryLoaderId" class="jqueryLoader"><i class="fa fa-spin fa-spinner"></i></div>');
    $(".activeSection").toggleClass("activeSection inactiveSection");
    $("#skillsSectionDiv").load("../../php/content/fetchSkills.php?skillType=databases", function () {
        jQuery('.skillbar').each(skillBarAnim);
    });
    $("#skillsSectionDiv").removeClass("inactiveSection");
    $("#skillsSectionDiv").addClass("activeSection");
});
$(document).on('click','#frameworksSkillId', function () {
    $("#skillsSectionDiv").html('<div id="jqueryLoaderId" class="jqueryLoader"><i class="fa fa-spin fa-spinner"></i></div>');
    $(".activeSection").toggleClass("activeSection inactiveSection");
    $("#skillsSectionDiv").load("../../php/content/fetchSkills.php?skillType=frameworks", function () {
        jQuery('.skillbar').each(skillBarAnim);
    });
    $("#skillsSectionDiv").removeClass("inactiveSection");
    $("#skillsSectionDiv").addClass("activeSection");
});
$(document).on('click','#platformsSkillId', function () {
    $("#skillsSectionDiv").html('<div id="jqueryLoaderId" class="jqueryLoader"><i class="fa fa-spin fa-spinner"></i></div>');
    $(".activeSection").toggleClass("activeSection inactiveSection");
    $("#skillsSectionDiv").load("../../php/content/fetchSkills.php?skillType=platforms", function () {
        jQuery('.skillbar').each(skillBarAnim);
    });
    $("#skillsSectionDiv").removeClass("inactiveSection");
    $("#skillsSectionDiv").addClass("activeSection");
});
$(document).on('click','#toolsSkillId', function () {
    $("#skillsSectionDiv").html('<div id="jqueryLoaderId" class="jqueryLoader"><i class="fa fa-spin fa-spinner"></i></div>');
    $(".activeSection").toggleClass("activeSection inactiveSection");
    $("#skillsSectionDiv").load("../../php/content/fetchSkills.php?skillType=tools", function () {
        jQuery('.skillbar').each(skillBarAnim);
    });
    $("#skillsSectionDiv").removeClass("inactiveSection");
    $("#skillsSectionDiv").addClass("activeSection");
});
/* *********************************************************** */

/* Support Functions */
function skillBarAnim(){
    jQuery(this).find('.skillbar-bar').animate({
        width:jQuery(this).attr('data-percent')
    },6000);
}
function verticalTimeLineAnim(){
    function VerticalTimeline( element ) {
        this.element = element;
        this.blocks = this.element.getElementsByClassName("js-cd-block");
        this.images = this.element.getElementsByClassName("js-cd-img");
        this.contents = this.element.getElementsByClassName("js-cd-content");
        this.offset = 0.8;
        this.hideBlocks();
    };
    VerticalTimeline.prototype.hideBlocks = function() {
        if ( !"classList" in document.documentElement ) {
            return;
        }
        var self = this;
        for( var i = 0; i < this.blocks.length; i++) {
            (function(i){
                if( self.blocks[i].getBoundingClientRect().top > window.innerHeight*self.offset ) {
                    self.images[i].classList.add("cd-is-hidden");
                    self.contents[i].classList.add("cd-is-hidden");
                }
            })(i);
        }
    };
    VerticalTimeline.prototype.showBlocks = function() {
        if ( ! "classList" in document.documentElement ) {
            return;
        }
        var self = this;
        for( var i = 0; i < this.blocks.length; i++) {
            (function(i){
                if( self.contents[i].classList.contains("cd-is-hidden") && self.blocks[i].getBoundingClientRect().top <= window.innerHeight*self.offset ) {
                    // add bounce-in animation
                    self.images[i].classList.add("cd-timeline__img--bounce-in");
                    self.contents[i].classList.add("cd-timeline__content--bounce-in");
                    self.images[i].classList.remove("cd-is-hidden");
                    self.contents[i].classList.remove("cd-is-hidden");
                }
            })(i);
        }
    };
    var verticalTimelines = document.getElementsByClassName("js-cd-timeline"),
        verticalTimelinesArray = [],
        scrolling = false;
    if( verticalTimelines.length > 0 ) {
        for( var i = 0; i < verticalTimelines.length; i++) {
            (function(i){
                verticalTimelinesArray.push(new VerticalTimeline(verticalTimelines[i]));
            })(i);
        }
        window.addEventListener("scroll", function(event) {
            if( !scrolling ) {
                scrolling = true;
                (!window.requestAnimationFrame) ? setTimeout(checkTimelineScroll, 250) : window.requestAnimationFrame(checkTimelineScroll);
            }
        });
    }
    function checkTimelineScroll() {
        verticalTimelinesArray.forEach(function(timeline){
            timeline.showBlocks();
        });
        scrolling = false;
    };
};
function gridLayoutResizer(){
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
}
/* *********************************************************** */