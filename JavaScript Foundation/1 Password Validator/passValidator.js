function matchpw() {  
    var pwd1 = document.getElementById("pw1");  
    var pwd2 = document.getElementById("pw2");  
    if(pwd1.value != pwd2.value)  
    {   
      alert("Passwords did not match");
    } else {  
      alert("Password created successfully"); 
    }  
  }  

  