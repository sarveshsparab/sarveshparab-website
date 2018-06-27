/* To Begin rendering the canvas */
window.onload = function() {
    try {
        popWords();
        TagCanvas.Start('mySkillsCloudCanvas','',{
            outlineMethod: 'none',
            noSelect: true,
            shuffleTags: true,
            reverse: true,
            depth: 0.8,
            maxSpeed: 0.05,
            textFont: '"Quicksand", sans-serif',
            textColour: null,
            weight: true,
            zoomMax: 4.0,
            zoomMin: 1.0,
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

/* Cloud words/tags population */
function popWords() {
    $("#mySkillsCloudCanvas").html('<a>Google</a><a>Fish</a><a>Chips</a><a>Salt</a><a>Vinegar</a><a>Sugar</a><a>Pepper</a><a>Choco</a><a>Ginger</a><a>Garlic</a><a>Peanuts</a><a>Cashew</a><a>Almonds</a>');
}