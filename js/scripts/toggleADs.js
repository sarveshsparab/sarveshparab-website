$(document).ready(function() {
    /* Google ADs toggle logic*/
    $("#adsToggleID").change(function() {
        if($(this).is(":checked")) {
            $("#mainContentDivId").removeClass("mainContentWithoutADs");
            $("#adsContentDivId").removeClass("googleAdsDisabled");
            $("#mainContentDivId").addClass("mainContentWithADs");
            $("#adsContentDivId").addClass("googleAdsEnabled");
        } else {
            $("#mainContentDivId").removeClass("mainContentWithADs");
            $("#adsContentDivId").removeClass("googleAdsEnabled");
            $("#mainContentDivId").addClass("mainContentWithoutADs");
            $("#adsContentDivId").addClass("googleAdsDisabled");
        }
    });
});