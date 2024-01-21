class Contact{
    constructor(id, name, avatar, phone, email) {
        this.id = id;
        this.name = name;
        this.avatar = avatar;
        this.phone = phone;
        this.email = email
    }
}
const contact_key = "data-contact"
var contacts = []
function init(){
    if(localStorage.getItem(contact_key) == null){
        contacts = [
            new Contact(1, "Dũng", "https://images.unsplash.com/photo-1544723795-3fb6469f5b39", '0914123123', 'tringuyen123@gmail.com'),
            new Contact(2, "Cường", "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c", '0914123456', 'codegym123@gmail.com'),
            new Contact(3, "Trí", "https://plus.unsplash.com/premium_photo-1674777843203-da3ebb9fbca0", '0923123123', 'tri123@gmail.com'),
            new Contact(4, "Quang", "https://images.unsplash.com/photo-1599566150163-29194dcaad36", '0976123123', 'quang123@gmail.com'),
            new Contact(5, "Hiếu", "https://images.unsplash.com/photo-1500648767791-00dcc994a43e", '0915123123', 'hieu123@gmail.com')
        ]
        localStorage.setItem(contact_key, JSON.stringify(contacts));
    }
    else {
        contacts = JSON.parse(localStorage.getItem(contact_key));
    }
}
function renderContact() {
    let htmls = contacts.map(function (contact, index) {
        return `
            <tr>
                <td class="text-center">
                    <input type="checkbox">
                </td>
                <td  class="text-center">${contact.name}</td>
                <td class="text-center">
                    <img class='avatar-sm' src="${contact.avatar}" alt="">
                </td>
                <td class="text-center"
                >${contact.email}</td>
                <td class="text-center">${contact.phone}</td>
                <td class="text-center">
                    <i class="fa fa-pencil" onclick="getContact(${contact.id})"></i>
                    <i class="fa fa-trash" onclick="removeContact(${contact.id})"></i>
                </td>
            </tr>
        `
    })
    document.querySelector(`.table>tbody`).innerHTML = htmls.join("");
}
function openModal(){
    document.querySelector('.modal-container').classList.toggle('show')
}
function closeModal(){
    document.querySelector('.modal-container').classList.remove('show')
    resetModal()
}
function changeAvatar(){
    document.querySelector('.avatar-lg').src = document.querySelector('#avatar').value || './image/noavatar.jpg'
}
function addContact() {
    let name = document.querySelector("#name").value
    let avatar = document.querySelector("#avatar").value
    let mobile = document.querySelector("#mobile").value
    let email = document.querySelector("#email").value
    let id = findMaxID() +1
    let contact = new Contact (id, name, avatar, mobile, email);
    contacts.push(contact);
    localStorage.setItem(contact_key, JSON.stringify(contacts));
    closeModal()
    renderContact()
}
function resetModal(){
    document.querySelector("#contactID").value = "0"
    document.querySelector("#name").value = ''
    document.querySelector("#avatar").value = ''
    document.querySelector("#mobile").value = ''
    document.querySelector("#email").value = ''
    document.querySelector('.avatar-lg').src = "./image/noavatar.jpg"
    ocument.querySelector('#btnUpdate').classList.add('d-none')
    document.querySelector('#btnAdd').classList.remove('d-none')

}
function findMaxID(){
    let max = 0;
    for(let contact of contacts){
        if(contact.id > max){
            max = contact.id
        }
    }
    return max
}
function removeContact(id){
    let confirm = window.confirm('are you sure about that?')
    if(confirm){
        let idIndex = -1;
        for(let i = 0;i< contacts.length ;i++){
            if(contacts[i].id == id){
                idIndex = i;
                break;
            }
        }
        if(idIndex != -1){
            contacts.splice(idIndex,1);
            localStorage.setItem(contact_key, JSON.stringify(contacts));
            renderContact()
        }else{
            alert("ID khong khop le")
        }

    }

}
function getContact(contactID){
    let contact = contacts.find(function (ct)         {
            return ct.id === contactID
    })
    document.querySelector("#contactID").value = contact.id
    document.querySelector("#name").value = contact.name
    document.querySelector("#avatar").value = contact.avatar
    document.querySelector("#mobile").value = contact.phone
    document.querySelector("#email").value = contact.email
    document.querySelector('.avatar-lg').src = contact.avatar

    document.querySelector('#btnUpdate').classList.remove('d-none')
    document.querySelector('#btnAdd').classList.add('d-none')

    document.querySelector('.modal-title').innerText = "Add Contact"

    openModal()
}
function updateContact() {
let id = document.querySelector("#contactID").value

    let contact = contacts.find(function (ct)         {
        return ct.id == id
    })
    contact.name = document.querySelector("#name").value
    contact.avatar = document.querySelector("#avatar").value
    contact.phone = document.querySelector("#mobile").value
    contact.email = document.querySelector("#email").value
    localStorage.setItem(contact_key, JSON.stringify(contacts));
    closeModal()
    renderContact()
}
function main() {
    init()
    renderContact()
}
main()