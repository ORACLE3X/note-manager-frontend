const  baseUrl ="http://localhost:8000/api/v1";
// const baseUrl = "https://notemanager-1kfi.onrender.com/api/v1"
const getUserAuth = ()=>{
    const auth = JSON.parse(localStorage.getItem("auth"));
    return auth;
};
getUserInfo = () => {
    return JSON.parse(localStorage.getItem("userInfo"));
}
const header = {
    "content-type": "application/json",
    authorization:`bearer ${getUserAuth().accessToken}`
};