$(function () {
    $("#dropLineForm").validate({
        rules:
            {
                name:
                    {
                        required: true
                    },
                email:
                    {
                        required: true,
                        email: true
                    },
                subject:
                    {
                        required: true,
                        minlength: 3
                    },
                message:
                    {
                        required: true,
                        minlength: 3
                    },
                captcha:
                    {
                        required: true,
                        remote: '../../resources/captcha/process.php'
                    }
            },
        messages:
            {
                name:
                    {
                        required: 'Please enter your name'
                    },
                email:
                    {
                        required: 'Please enter your email address',
                        email: 'Please enter a valid email address'
                    },
                subject:
                    {
                        required: 'Please enter a subject',
                        minlength: 'Please enter a more detailed subject'
                    },
                message:
                    {
                        required: 'Please enter a subject',
                        minlength: 'Please enter a more detailed subject'
                    },
                captcha:
                    {
                        required: 'Please enter characters',
                        remote: 'Correct captcha is required'
                    }
            },
        errorPlacement: function (error, element) {
            error.insertAfter(element.parent());
        }
    });
});