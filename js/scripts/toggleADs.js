$(document).ready(function() {
    /* Google ADs toggle logic*/
    $("#adsToggleID").change(function() {
        if($(this).is(":checked")) {
            alert("Thank you for supporting ADs on this page");
            $("#mainContentDivId").removeClass("mainContentWithoutADs");
            $("#adsContentDivId").removeClass("googleAdsDisabled");
            $("#mainContentDivId").addClass("mainContentWithADs");
            $("#adsContentDivId").addClass("googleAdsEnabled");
        } else {
            alert("ADs help run this website, PLEASE keep them on");
            $("#mainContentDivId").removeClass("mainContentWithADs");
            $("#adsContentDivId").removeClass("googleAdsEnabled");
            $("#mainContentDivId").addClass("mainContentWithoutADs");
            $("#adsContentDivId").addClass("googleAdsDisabled");
        }
    });
});