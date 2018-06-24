/* To Begin rendering the canvas */
window.onload = function() {
    try {
        TagCanvas.Start('mySkillsCloudCanvas','',{
            outlineMethod: 'none',
            noSelect: true,
            shuffleTags: true,
            reverse: true,
            depth: 0.8,
            maxSpeed: 0.05,
            textFont: null,
            textColour: null,
            weight: true,
        });
    } catch(e) {
        document.getElementById('mySkillsCloud').style.display = 'none';
    }
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