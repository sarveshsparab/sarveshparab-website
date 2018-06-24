/* To Begin rendering the canvas */
window.onload = function() {
    try {
        TagCanvas.Start('mySkillsCloudCanvas');
    } catch(e) {
        // something went wrong, hide the canvas container
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