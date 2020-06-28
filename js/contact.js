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
                    minlength: "your name must be longer than 2 character, right? ;)"
                },
                subject: {
                    required: "come on, you gotta tell me what you wanna talk about?",
                    minlength: "You sure that is a real subject?"
                },
                email: {
                    required: "no email, no cookie. Sorry! :D"
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


/* Formspree AJAX email plugin */
window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above

    var form = document.getElementById("contactForm");
    var button = document.getElementById("send-message-button");
    var status = document.getElementById("contact-form-status");

    var success_message = "Thanks for reaching out! I'll get back soon!!! :-)"
    var failure_message = "Oops! There was a problem. Try again? :-("

    // Success and Error functions for after the form is submitted

    function success() {
      form.reset();
      button.style = "display: none ";
      status.innerHTML = success_message;
    }

    function error() {
      status.innerHTML = failure_message;
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });

  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
}