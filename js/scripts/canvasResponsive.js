/* To Begin rendering the canvas */
window.onload = function() {
    $.ajax({
        url: '../../php/content/fetchTags.php',
        success: function (result) {
            $("#mySkillsCloudCanvas").html('<div id="jqueryLoaderId" class="jqueryLoader" style="line-height: unset"><i class="fa fa-spin fa-spinner"></i></div>');
            if (result == 'ERROR') {
                console.error("Error : No data returned from the db | Result : " + result);
            } else {
                $("#mySkillsCloudCanvas").html(result);
                try {
                    TagCanvas.Start('mySkillsCloudCanvas','',{
                        outlineMethod: 'none',
                        noSelect: true,
                        shuffleTags: true,
                        reverse: true,
                        depth: 0.8,
                        initial: [-0.310, 0.200],
                        maxSpeed: 0.02,
                        textFont: '"Quicksand", sans-serif',
                        textColour: null,
                        weight: true,
                        zoomMax: 4.0,
                        zoomMin: 1.0,
                        centreImage: '../../resources/faviconAndLogo/logo_transparent_small.png',
                    });
                } catch(e) {
                    document.getElementById('mySkillsCloud').style.display = 'none';
                }
            }
        },
        error: function () {
            console.error("Error : In AJAX call for fetching Tags for cloud");
        }
    });
};

/* To make the canvas behave responsively */
function resize() {
    $("#mySkillsCloudCanvas").attr('width', $("#mySkillsCloud").width()); //max width
    $("#mySkillsCloudCanvas").attr('height', $("#mySkillsCloud").height()); //max height
}
$(document).ready(function () {
    resize();
    $(window).on("resize", function () {
        resize();
    });
});
