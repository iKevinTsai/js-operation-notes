$(document).ready(function() {
  $('#password').keyup(function() {
    var password = $(this).val();
    var strength = checkPasswordStrength(password);
    var text = '';
    
    switch(strength) {
      case 1:
        text = '弱';
        break;
      case 2:
        text = '中';
        break;
      case 3:
        text = '強';
        break;
      default:
        text = '';
    }
    
    $('#password-strength').text(text);
  });
});

function checkPasswordStrength(password) {
  var strength = 0;
  
  if (password.length < 6) {
    return 1;
  }
  
  if (password.length >= 6 && password.length <= 10) {
    strength += 1;
  }
  
  if (password.match(/[a-z]/)) {
    strength += 1;
  }
  
  if (password.match(/[A-Z]/)) {
    strength += 1;
  }
  
  if (password.match(/[0-9]/)) {
    strength += 1;
  }
  
  if (password.match(/[$@#&!]/)) {
    strength += 1;
  }
  
  return strength;
}