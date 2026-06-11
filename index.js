const submit_information=()=>{
    let username = document.getElementById("inputText").value;
    let second_username = document.getElementById("inputText1").value;
    let phone=document .getElementById("inputphone").value;

    // username-message 
    let username_msg = document.getElementById("u-msg");
    let second_username_msg = document.getElementById("u-msg1")
    let phone_msg = document.getElementById("p-msg");
//    reset
username_msg.innerHTML = "";
second_username_msg.innerHTML = "";
phone_msg.innerHTML = ""; 
// color change 
    username_msg.style.color = "red"; 
    phone_msg.style.color = "red";
    second_username_msg.style.color = "red";

    let isvalid=true;
    // regex 
    //  username regex
    let username_regex = /^.{3,14}$/;
    // let second_username_regex = /^.{3,14}$/;
//  phone regex 
    let phone_regex = /^[0-9]{10}$/; 


    if(!username_regex.test(username)){
        username_msg.innerHTML = "invalid username ( 3-14 characters)";
        isvalid = false;
    }
    
    if(!username_regex.test(second_username)){
        second_username_msg.innerHTML = "invalid second username ( 3-14 characters)";
        isvalid = false;
    }
    if(!phone_regex.test(phone)){
    phone_msg.innerHTML = "invalid phone (enter proper number )";
       isvalid = false;
    }
     
    if(isvalid){
 
    // setItem() method means what it will be write in from local stroage store it 
        localStorage.setItem("firstname", username);
        localStorage.setItem("secondname",second_username);
        localStorage.setItem("phone", phone);
        alert("Data Stored Successfully");
    }
}