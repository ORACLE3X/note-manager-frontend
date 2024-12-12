const logout = document.getElementById("logout");
logout.addEventListener('click', async () => {
    try {
        // const url = `${baseUrl}${routes.logout}`;
        // const res = await fetch(url, {
        //     method: "POST",
        //     // credentials: 'include',
        //     headers: {
        //         'constent-type': "application/json",
        //         authorization: header.authorization,
        //     }
        // })
        // const result = await res.json();
        // if (!res.ok) {
        //     if(res.status === 401){
        //         const newToken = await generateRefreshToken();
        //         console.log(newToken);
        //     }else throw new Error(result.error)
        // }
        // window.location = "../pages/login.html"
        await logoutUser();
    } catch (error) {
        console.log(error)
        alert(error.message)
    }
});

const generateRefreshToken = async () => {
    try {
        console.log(getUserAuth());
            //access token expired
            //process to generate new AcessToken and RefreshToken
            const url = `${baseUrl}${routes.refreshToken}`;
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    'content-type': "application/json",
                    authorization: header.authorization,
                },
                body: JSON.stringify(getUserAuth())
            })
            const result = await res.json();
            if(!res.ok){
                if(res.status === 401){
                    localStorage.clear("auth");
                    window.location = "../pages/login.html"
                }else throw new Error(result.error)
        }
        //Update LocalStorage
        localStorage.setItem("auth", JSON.stringify({accessToken: result.accessToken, refreshToken: result.refreshToken}));
    }catch (error) {
    alert(error.message)
    }
}
const logoutUser = async() => {
   try {
    const url = `${baseUrl}${routes.logout}`;
    const res = await fetch(url, {
        method: "POST",
        // credentials: 'include',
        headers: {
            'constent-type': "application/json",
            authorization: header.authorization,
        }
    })
    const result = await res.json();
    if (!res.ok) {
        if(res.status === 401){
            const newToken = await generateRefreshToken();
            console.log(newToken)
            if(!newToken?.error) await logoutUser();
        }else throw new Error(result.error)
    }
    localStorage.clear("auth")
    window.location = "../pages/login.html"
   } catch (error) {
    console.log(error);
    alert(error.message)
   }
}