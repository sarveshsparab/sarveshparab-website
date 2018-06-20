$(document).ready(function() {
    /* Google ADs toggle logic*/
    $("#adsToggleID").change(function() {
        if($(this).is(":checked")) {
            showGratitude();
            $("#mainContentDivId").removeClass("mainContentWithoutADs");
            $("#adsContentDivId").removeClass("googleAdsDisabled");
            $("#mainContentDivId").addClass("mainContentWithADs");
            $("#adsContentDivId").addClass("googleAdsEnabled");
        } else {
            showWarning();
            $("#mainContentDivId").removeClass("mainContentWithADs");
            $("#adsContentDivId").removeClass("googleAdsEnabled");
            $("#mainContentDivId").addClass("mainContentWithoutADs");
            $("#adsContentDivId").addClass("googleAdsDisabled");
        }
    });
});
function showGratitude() {
    alert("Thank you for supporting ADs on this page");
}
function showWarning() {
    alert("ADs help run this website, PLEASE keep them on");
    /*if( !$('#sp-form-modal-overlay').length ) {
        $('body').append('<div id="sp-form-modal-overlay" class="sp-form-modal-overlay"></div>');
    }

    $('#sp-form-modal-overlay').on('click', function() {
        $('#sp-form-modal-overlay').fadeOut();
        $('.sp-form-modal').fadeOut();
    });

    form = $($(this).attr('href'));
    $('#sp-form-modal-overlay').fadeIn();
    form.css('top', '50%').css('left', '50%').css('margin-top', -form.outerHeight()/2).css('margin-left', -form.outerWidth()/2).fadeIn();
    return false;

    $('.modal-closer').on('click', function() {
        $('#sp-form-modal-overlay').fadeOut();
        $('.sp-form-modal').fadeOut();
        return false;
    });*/
}