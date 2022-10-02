function loadContact() {
    
    const contactContainer = document.createElement("div");

    const pageTitle = document.createElement("h1");
    pageTitle.textContent = "Contact";

    const boxAround = document.createElement("div");
    boxAround.classList.add("contactBox");
    const mail = document.createElement("h2");
    mail.textContent = "✉ erikas.cafe@notarealemail.com";
    const phone = document.createElement("h2");
    phone.textContent = "✆ 111-222-3333";

    boxAround.appendChild(mail);
    boxAround.appendChild(phone);
    
    contactContainer.appendChild(pageTitle);
    contactContainer.appendChild(boxAround);


    document.getElementById('content').appendChild(contactContainer);
}

export default loadContact;