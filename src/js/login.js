const signin = document.getElementById("signin");
signin.addEventListener('click', async(e)=>{
  try {
    
    e.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if(!email) throw new Error("Email is required")
    if(!password || password ==null)throw new Error("password is required");
    const user = {
        email,
      password,
    };
    const url = `${baseUrl}${routes.login}`;
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
  } catch (error) {
    alert(error.message)
  }
})
