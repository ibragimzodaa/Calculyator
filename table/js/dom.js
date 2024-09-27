import { deleteUserrr, editUserModal } from "./api.js";


let tbody = document.querySelector(".tbody");
export function renderData(data) {
    tbody.innerHTML = "";
    data.forEach((e, i) => {
        let row = document.createElement("tr");
        
        let tdImage = document.createElement("img");
        tdImage.src = e.image;
        tdImage.style.width = "50px";
        tdImage.style.height = "50px";
        tdImage.style.borderRadius = "50%";
        
        let tdId = document.createElement("td");
        tdId.innerHTML = e.id ;
        
        let tdName = document.createElement("td");
        tdName.innerHTML = e.name;
        tdName.style.borderBottom = "none"
        
        let tdCountry = document.createElement("td");
        tdCountry.innerHTML = e.country;
        
        let tdStatus = document.createElement("td");
        tdStatus.innerHTML = e.status? "Active" : "Inactive";
        tdStatus.style.color = e.status? "green" : "red";
        
        let tdPhoneNumber = document.createElement("td");
        tdPhoneNumber.innerHTML = e.phoneNumber;
        
        let btnEdit = document.createElement("button");
        btnEdit.innerText = "Edit";
        btnEdit.onclick = () => {
            editUserModal.showModal()
        }
        
        let btnDelete = document.createElement("button");
        btnDelete.innerText = "Delete";
        btnDelete.onclick = () => {
            deleteUserrr(e.id)
        }
        
        let btnProfile = document.createElement("button");
        btnProfile.innerText = "Profile";
        
        let divs = document.createElement("div");
        divs.append(btnEdit, btnDelete, btnProfile);
        divs.classList.add("divs")
        
        let div = document.createElement("div");
        div.append(tdImage, tdName)
        div.classList.add("div")
        
        row.append(div, tdCountry, tdStatus, tdPhoneNumber,divs);
        tbody.append(row);
    });
}
