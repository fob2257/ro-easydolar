(function () {
    $('#contacto-form').validate({
        lang: 'es',
        messages: {},
        errorElement: 'p',
        errorPlacement: function (error, element) {
            error.appendTo(element.next('.mensaje-form'));
            /**error.appendTo(element.parents('.form-group').children('.error-block'));*/
        },
        highlight: function (element) {
            $(element).parent().addClass('has-error').removeClass('has-success');
        },
        unhighlight: function (element) {
            $(element).parent().addClass('has-success').removeClass('has-error');
        },
        submitHandler: function (form) {
            $('.send-btn').html("");
            $('.send-btn').prop('disabled', true);
            $(form).ajaxSubmit({
                url: '../send_mail.php',
                type: 'post',
                dataType: 'json',
                success: function (data) {
                    /** Server response */
                    if (data.status == '0') {
                        $('.send-btn').prop('disabled', false);
                        $('.send-btn').html("Enviar");
                        $('.alert-danger').show();

                    }
                    if (data.status == '1') {
                        $('.send-btn').prop('disabled', false);
                        $('.send-btn').html("Enviar");
                        $('#contacto-form')[0].reset();
                        $('.input-group').removeClass('has-success').removeClass('has-error');
                        $('.form-group').removeClass('has-success').removeClass('has-error');
                        $('.alert-success').show();
                    }
                },
                error: function (data) {
                    $('.send-btn').prop('disabled', false);
                    $('.send-btn').html("Enviar");
                    $('.alert-danger').show();
                }
            });
            return false; /** Evitar el submit normal */
        }
    });
} ());