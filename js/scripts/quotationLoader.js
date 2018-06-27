$(function () {
    $.ajax({
        url: "../../php/fetchQuotation.php",
        success: function (result) {
            $("#topQuoteHomeDiv").html(result);
        },
        error: function () {
            console.log("Error : In fetching quotation from DB");
            $("#topQuoteHomeDiv").html('<blockquote><p>Look up at the stars and not down at your feet. Try to make sense of what you see, and wonder about what makes the universe exist. Be curious. ”</p><footer>- Stephen Hawking</footer></blockquote>');
        }
    });
});