$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                subject: {
                    required: true,
                    minlength: 4
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 10
                }
            },
            messages: {
                name: {
                    required: "come on, you have a name, don't you?",
                    minlength: "your name must consist of at least 2 characters"
                },
                subject: {
                    required: "come on, you gotta tell me what you wanna talk about?",
                    minlength: "your address must consist of at least 4 characters"
                },
                email: {
                    required: "no email, no reply. Sorry! :D"
                },
                message: {
                    required: "um...yea, you have to write something to send a message.",
                    minlength: "thats all? really?"
                }
            },
            submitHandler: function(form) {
                // $(form).ajaxSubmit({
                //     type:"POST",
                //     data: $(form).serialize(),
                //     success: function() {
                //         $('#contactForm :input').attr('disabled', 'disabled');
                //         $('#contactForm').fadeTo( "slow", 0.15, function() {
                //             $(this).find(':input').attr('disabled', 'disabled');
                //             $(this).find('label').css('cursor','default');
                //             $('#success').fadeIn()
                //         })
                //     },
                //     error: function() {
                //         $('#contactForm').fadeTo( "slow", 0.15, function() {
                //             $('#error').fadeIn()
                //         })
                //     }
                // })
                e.preventDefault();
            
                $.post($form.attr("action"), $form.serialize()).then(function() {
                    $('#contactForm :input').attr('disabled', 'disabled');
                    $('#contactForm').fadeTo( "slow", 0.15, function() {
                        $(this).find(':input').attr('disabled', 'disabled');
                        $(this).find('label').css('cursor','default');
                        $('#success').fadeIn()
                    })
                });
            }
        })
    })
        
 })(jQuery)
})