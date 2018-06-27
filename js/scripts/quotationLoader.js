$(function () {
    $.ajax({
        url: "../../php/content/fetchQuotation.php",
        success: function (result) {
            $("#topQuoteHomeDiv").html('<div id="jqueryLoaderId" class="jqueryLoader" style="line-height: unset"><i class="fa fa-spin fa-spinner"></i></div>');
            if(result == 'ERROR'){
                console.error("Error : No rows returned from the quotations table | Result : "+result);
                $("#topQuoteHomeDiv").html('<blockquote><p>Look up at the stars and not down at your feet. Try to make sense of what you see, and wonder about what makes the universe exist. Be curious. ”</p><footer>- Stephen Hawking</footer></blockquote>');
            }else {
                $("#topQuoteHomeDiv").html(result);
            }
        },
        error: function () {
            console.error("Error : In AJAX call for fetching quotation");
            $("#topQuoteHomeDiv").html('<blockquote><p>Look up at the stars and not down at your feet. Try to make sense of what you see, and wonder about what makes the universe exist. Be curious. ”</p><footer>- Stephen Hawking</footer></blockquote>');
        }
    });
});