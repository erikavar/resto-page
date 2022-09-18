function loadContact() {
    
    const contactContainer = document.createElement("div");

    const pageTitle = document.createElement("h1");
    pageTitle.textContent = "Contact";
    const pageDescr = document.createElement("p");
    pageDescr.textContent = "Coming soon";
    
    contactContainer.appendChild(pageTitle);
    contactContainer.appendChild(pageDescr);

    document.getElementById('content').appendChild(contactContainer);
}

export default loadContact;