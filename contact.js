class Contact{
    constructor(id, name, avatar, phone, email) {
        this.id = id;
        this.name = name;
        this.avatar = avatar;
        this.phone = phone;
        this.email = email
    }
}
const contacts = [
    new Contact(1, "Dũng", "https://images.unsplash.com/photo-1544723795-3fb6469f5b39", '0914123123', 'tringuyen123@gmail.com'),
    new Contact(2, "Cường", "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c", '0914123456', 'codegym123@gmail.com'),
    new Contact(3, "Trí", "https://plus.unsplash.com/premium_photo-1674777843203-da3ebb9fbca0", '0923123123', 'tri123@gmail.com'),
    new Contact(4, "Quang", "https://images.unsplash.com/photo-1599566150163-29194dcaad36", '0976123123', 'quang123@gmail.com'),
    new Contact(5, "Hiếu", "https://images.unsplash.com/photo-1500648767791-00dcc994a43e", '0915123123', 'hieu123@gmail.com'),
]
function renderContact() {
    let htmls = contacts.map(function (contact) {
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
                    <i class="fa fa-pencil"></i>
                    <i class="fa fa-trash"></i>
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
}
function changeAvatar(){
    document.querySelector('.avatar-lg').src = document.querySelector('#avatar').value || '/image/noavatar.jpg'
}
renderContact()