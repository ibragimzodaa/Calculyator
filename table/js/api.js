import { renderData } from "./dom.js";

const url = "https://66e8219eb17821a9d9db8120.mockapi.io/table";
 async function getUsers() {
    try {
        const {data} = await axios.get(url)
        renderData(data)
    } catch (error) {
        console.error(error);
    }
}
export {getUsers}


// Delete users

export async function deleteUserrr(id) { 
    try {
        await axios.delete(`${url}/${id}`)  
        getUsers()
    } catch (error) {
        console.error(error);
    }
}

// Add Users

let but1 = document.querySelector(".but1")
let addUser = document.querySelector(".addUser")
let addUserForm = document.querySelector(".addUserForm")

but1.onclick = () => {
    addUser.showModal();
}
async function adUsers(user) { 
    try {
     await axios.post(url,user)
        getUsers()
    } catch (error) {
        console.log(error);
    }
  }
  addUserForm.onsubmit = async(event) => {
    event.preventDefault()
    let user = {
        name: addUserForm["inpName"].value,
        image: addUserForm["inpImage"].value,
        country: addUserForm["inpCountry"].value,
        phoneNumber: addUserForm["inpPhone"].value,
        status: addUserForm["selectStatus"].value === "Active"? true : false
    }
    adUsers(user)
    addUser.close()
    addUserForm.reset()
}

// edit Users

export let editUserModal = document.querySelector(".editUserModal")
