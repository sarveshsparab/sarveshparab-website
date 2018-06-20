/* Google ADs toggle logic*/
$(document).on('change','#adsToggleID', function () {
    let $mainContentDivIdSelector = $("#mainContentDivId");
    let $adsContentDivIdSelector = $("#adsContentDivId");
    if($(this).is(":checked")) {
        alert("Thank you for supporting ADs on this page");
        $mainContentDivIdSelector.removeClass("mainContentWithoutADs");
        $adsContentDivIdSelector.removeClass("googleAdsDisabled");
        $mainContentDivIdSelector.addClass("mainContentWithADs");
        $adsContentDivIdSelector.addClass("googleAdsEnabled");
    } else {
        alert("ADs help run this website, PLEASE keep them on");
        $mainContentDivIdSelector.removeClass("mainContentWithADs");
        $adsContentDivIdSelector.removeClass("googleAdsEnabled");
        $mainContentDivIdSelector.addClass("mainContentWithoutADs");
        $adsContentDivIdSelector.addClass("googleAdsDisabled");
    }
});
/* ******************************************** */