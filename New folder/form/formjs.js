function validate() {
    let fullname = document.getElementById("namezone");
    let email = document.getElementById("emailzone");
    let number = document.getElementById("numberzone");
    let state = document.getElementById("statezone");
    let city = document.getElementById("cityzone");
    // let file = document.getElementById("filezone");
    if (fullname.value.trim() == "" || email.value.trim() == "" || number.value.trim() == "" || state.value.trim() == "" || city.value.trim() == "") {
      alert("no blank values are allowed")
      return false;
  
    }
    else {
      alert("your responce has been recorded");
      true;
    }
  }
  