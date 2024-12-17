const loggedInUser = document.getElementById("username");
loggedInUser.textContent= getUserInfo().name;

const newNote = document.getElementById("addNote")
const addNoteX = document.getElementById("Cancel")

const dataTable = document.getElementById("datatable")

newNote.addEventListener('click', ()=>{
    try {
        const modal= document.getElementById("addNoteModal")
        modal.classList.add("show")
    } catch (error) {
        alert(error.message)
    }
})
addNoteX.addEventListener('click',()=>{
    try {
        const modal = document.getElementById("addNoteModal");
        modal.classList.remove("show");
        
    } catch (error) {
        alert(error.message);
    }
})
const submit = document.getElementById("Submit")
submit.addEventListener('click', ()=>{
    try {
        localStorage.setItem("userInfo", JSON.stringify(userInfo))
    } catch (error) {
        alert(error.message);
    }
})
const deleteNote = (e)=>{
    try {
        const button = e.currentTarget;
        if(button.name === "delete"){
            //send delete request
        }
    } catch (error) {
        console.log(error.message);
        alert(error.message);
    }
}
const loadData = async()=>{
    try {
        const url = `${baseUrl}${routes.getNote}`;
        const res = await fetch(url, {
            method: "GET",
            headers: {
                'content-type': "application/json"
            },
        });
        const result = await res.json();
        if (!res.ok) {
            throw new Error(result.error);
        }

        const {account} = result;
        //populate the table with data
        account.forEach((cur) => {
             const tableRow = ` <tr class="trow">
                                            <td>${cur.title}</td>
                                            <td>${cur.text} </td>
                                            <td>${new Date(cur.createdAt).toLocaleDateString()}</td>
                                            <td><button class="btn" id= ${cur.id} name="delete" onclick="deleteNote(event)"> Delete</button></td>
                                        </tr>`
                                        dataTable.insertAdjacentHTML("beforeend", tableRow);
        });
    } catch (error) {
        console.log(error.message)
        alert(error.message)
    }
}
loadData();