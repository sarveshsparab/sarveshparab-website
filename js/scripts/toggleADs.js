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
}