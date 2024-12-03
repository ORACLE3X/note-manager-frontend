const signup = document.getElementById("signup");
signup.addEventListener('click', async(e)=>{
    try {
        
    
    e.preventDefault();

   let password = document.getElementById("password").value;
   let email = document.getElementById("email").value;
   let gender = document.getElementById("gender").value;
   let track = document.getElementById("track").value;
   let name = document.getElementById("name").value;
//    console.log({password, email});
if(!password || password ==null)throw new Error("password is required")
if(!name )throw new Error("Name is required")
if(gender.toLowerCase() !== "male" && gender.toLowerCase()!=="female") throw new Error("Invalid gender")
if(track ==="select")throw new Error("select a track")
    const user = {
 password,
 gender: gender.toLowerCase(),
 track,
 email,
 name
    }
    // console.log(user)
    //register user
    const url = `${baseUrl}${routes.register}`;
  const res = await fetch(url, {
    method:"POST",
    headers: {
      'content-type':"application/json"
    },
    body: JSON.stringify(user)
  });
  const result = await res.json()
  // console.log(result);
  if(!res.ok){
    throw new Error(result.error)
  }
  alert(result.message);
  //redirect user to login page
window.location = "../pages/login.html";
} catch (error) {
       alert(error.message)
}
})


const apiStatus = async()=>{
    try {
        const url = `${baseUrl}${routes.status}`;
          const res = await fetch(url, {
            method: "GET",
            headers: {
                "content-Type":"application/json",
            },
          });
          const result = await res.json();
          if(!res.ok){
            throw new Error(result.error)
          }
    } catch (error) {
        alert(error.message);
        console.log(error)
    }
}
apiStatus();