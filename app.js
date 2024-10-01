const users = [];

function toggleForm(){
    const register = document.querySelector(".register")
    const login = document.querySelector(".login")
    
    if(register.style.display ==="none"){
        register.style.display ="block";
        login.style.display ="none"
    }else{
        register.style.display ="none";
        login.style.display="block";
    }
}


function register(){
    const username = document.querySelector("#username").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    if(!username){
        alert("usename required")
    }
    else if(!password){
        alert("password is required")
    }
    else if(!email){
        alert("email is required")
    }else{
        users.push({username , email , password});
        console.log(users)
        alert("register successful");
        toggleForm();
    }

     
};

function login(){
    const username = document.querySelector("#username").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    const loginEmail = document.querySelector("#loginEmail").value;
    const loginPassword = document.querySelector("#loginPassword").value;
     
    
    const user = users.find(user=>user.email === loginEmail && user.password === loginPassword);
    if(user){
        document.querySelector(".login").style.display = "none";
        document.querySelector(".home").style.display = "block";

        document.getElementById("hello").innerText = `Hello @${username}`
    }else{
        alert("invalid email or password")
    }
}