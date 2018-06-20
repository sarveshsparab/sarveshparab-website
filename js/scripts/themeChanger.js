$(document).ready(function() {
    /* Theme changing logic*/
    $("#blackThemeId").click(function() {
        $("#themeCSSID").attr("href","css/colorThemes/blackTheme.css");
    });
    $("#blueThemeId").click(function() {
        $("#themeCSSID").attr("href","css/colorThemes/blueTheme.css");
    });
    $("#defaultThemeId").click(function() {
        $("#themeCSSID").attr("href","css/colorThemes/defaultTheme.css");
    });
    $("#greenThemeId").click(function() {
        $("#themeCSSID").attr("href","css/colorThemes/greenTheme.css");
    });
    $("#orangeThemeId").click(function() {
        $("#themeCSSID").attr("href","css/colorThemes/orangeTheme.css");
    });
    $("#pinkThemeId").click(function() {
        $("#themeCSSID").attr("href","css/colorThemes/pinkTheme.css");
    });
    $("#purpleThemeId").click(function() {
        $("#themeCSSID").attr("href","css/colorThemes/purpleTheme.css");
    });
    $("#redThemeId").click(function() {
        $("#themeCSSID").attr("href","css/colorThemes/redTheme.css");
    });
    $("#yellowThemeId").click(function() {
        $("#themeCSSID").attr("href","css/colorThemes/yellowTheme.css");
    });

    /* Bg Image activation logic*/
    $("#bgToggleID").change(function() {
        if($(this).is(":checked")) {
            $("#spBodyId").removeClass("sp-bg-color");
            $("#spBodyId").addClass("sp-bg-img");
        } else {
            $("#spBodyId").removeClass("sp-bg-img");
            $("#spBodyId").addClass("sp-bg-color");
        }
    });
});