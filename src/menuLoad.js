function loadMenu() {
    
    const menuContainer = document.createElement("div");

    const pageTitle = document.createElement("h1");
    pageTitle.textContent = "Menu";

    const pageDescr = document.createElement("p");
    pageDescr.textContent = "Coming soon";
    
    menuContainer.appendChild(pageTitle);
    menuContainer.appendChild(pageDescr);

    document.getElementById('content').appendChild(menuContainer);
}

export default loadMenu;