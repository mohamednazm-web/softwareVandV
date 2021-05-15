function validform() {
  var a = document.forms["my-form"]["full-name"].value;
  var b = document.forms["my-form"]["email-address"].value;
  var c = document.forms["my-form"]["username"].value;
  var d = document.forms["my-form"]["permanent-address"].value;
  var e = document.forms["my-form"]["age"].value;
  var f = document.forms["my-form"]["password"].value;

  if (a == null || a == "") {
    alert("Please Enter Your Full Name");
    return false;
  } else if (b == null || b == "") {
    alert("Please Enter Your Email Address");
    return false;
  } else if (c == null || c == "") {
    alert("Please Enter Your Username");
    return false;
  } else if (f == null || f == "") {
    alert("Please Enter Your Password");
  } else if (f.length < 6 || f.length > 12) {
    alert("Please Enter Your Password between range 6 to 13");
  } else if (d == null || d == "") {
    alert("Please Enter Your Permanent Address");
    return false;
  } else if (e == null || e == "") {
    alert("Please Enter Your Age");
    return false;
  } else if (e < 18 || e > 40) {
    alert("Please Enter Your Age between range 18 to 40");
    return false;
  } else {
    alert("Successfull");
  }
}
