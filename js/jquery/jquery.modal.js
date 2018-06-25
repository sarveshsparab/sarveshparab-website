$(function () {
    $('.modal-opener').on('click', function () {
        if (!$('#sp-form-modal-overlay').length) {
            $('body').append('<div id="sp-form-modal-overlay" class="sp-form-modal-overlay"></div>');
        }

        $('#sp-form-modal-overlay').on('click', function () {
            $('#sp-form-modal-overlay').fadeOut();
            $('.sp-form-modal').fadeOut();
        });

        form = $($(this).attr('href'));
        $('#sp-form-modal-overlay').fadeIn();
        form.css('top', '50%').css('left', '50%').css('margin-top', -form.outerHeight() / 2).css('margin-left', -form.outerWidth() / 2).fadeIn();

        return false;
    });

    $('.modal-closer').on('click', function () {
        $('#sp-form-modal-overlay').fadeOut();
        $('.sp-form-modal').fadeOut();

        return false;
    });
});