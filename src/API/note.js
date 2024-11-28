// const  baseUrl ="http://localhost:8000/api/v1";
const baseUrl = "https://notemanager-1kfi.onrender.com/api/v1"
const header = {
    "content-type": "application/json",
    authorization:`bearer ${localStorage.getItem("acessToken")}`
};