/* <![CDATA[ */
maxchars = 1000;
captcha = 1;
var emailabel = 'Email';
var senderlabel = 'Name';
var messagelabel = 'Message';
window.addEvent('load', function () {
    el = $('ac-submit');
    $("ja_quicks_contact").reset();
    el.onclick = function () {
        var email = $('contact_email').value;
        var ck = true;
        var errors = $$('.error');
        if (!errors || errors.length > 0) {
            errors.removeClass('error');
        }
        regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
        if (!regex.test(email)) {
            if ((email == '') || (email == emailabel)) {
                $('error_email').innerHTML = 'Please input your email!';
            }
            else {
                $('error_email').innerHTML = "Your email is invalid!";
            }
            $('row_email').addClass('error');
            ck = false;
        }
        else {
            $('error_email').innerHTML = '';
        }
        var name = $('contact_name').value;
        if ((name == '') || (name == senderlabel)) {
            $('error_name').innerHTML = 'Please fill in your name!';
            $('row_name').addClass('error');
            ck = false;
        }
        else {
            $('error_name').innerHTML = '';
        }
        var subject = $('contact_subject').value;
        if (subject == '') {
            $('error_subject').innerHTML = "Subject can not be null";
            $('row_subject').addClass('error');
            ck = false;
        }
        else {
            $('error_subject').innerHTML = '';
        }
        var message = $('contact_text').value;
        if ((message.length > maxchars) || (message.length < 1) || (message == messagelabel)) {

            $('error_text').innerHTML = 'Number of characters cannot be less than 5 or greater than1000';
            $('row_text').addClass('error');
            ck = false;
        }
        else {
            $('error_text').innerHTML = '';
        }
        if (captcha) {
            if ($('captcha_code')) {
                var captcha_code = $('captcha_code').value;
                if ((captcha_code == '') || (captcha_code == 'Type the code shown')) {
                    $('error_captcha_code').innerHTML = "Input your captcha";
                    ck = false;
                }
                else $('error_captcha_code').innerHTML = "";
            }
            else if ($('recaptcha_response_field')) {
                var captcha_code = $('recaptcha_response_field').value;
                if ((captcha_code == '') || (captcha_code == 'Type the code shown')) {
                    $('error_captcha_code').innerHTML = "Input your captcha";
                    ck = false;
                }
                else $('error_captcha_code').innerHTML = "";
            }
            else if ($('mathguard_answer')) {
                var captcha_code = $('mathguard_answer').value;
                if ((captcha_code == '') || (captcha_code == 'Type the code shown')) {
                    $('error_captcha_code').innerHTML = "Input your captcha";
                    ck = false;
                }
                else $('error_captcha_code').innerHTML = "";
            }
        }
        if (ck) {
            $("ja_quicks_contact").submit();
        }
        return ck;
    };
});
/* ]]> */