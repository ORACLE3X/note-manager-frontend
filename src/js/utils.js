const signup = document.getElementById("signup");
signup.addEventListener('click', (e)=>{
    try {
        
    
    e.preventDefault();

   let password = document.getElementById("password").value;
   let email = document.getElementById("email").value;
   let gender = document.getElementById("gender").value;
   let track = document.getElementById("track").value;
//    console.log({password, email});
if(!password || password ==null)throw new Error("password is required")
if(gender.toLowerCase() !== "male" && gender.toLowerCase()!=="female") throw new Error("Invalid gender")
if(track ==="select")throw new Error("select a track")
    const user = {
 password,
 gender,
 track,
 email
    }
    console.log(user)
} catch (error) {
       alert(error.message)
}
})