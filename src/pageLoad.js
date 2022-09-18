import Image from './cafe.png';

function loadPage() {
    
    const homeContainer = document.createElement("div");

    const pageTitle = document.createElement("h1");
    pageTitle.textContent = "A GREAT DAY STARTS WITH GREAT COFFEE.";

    const menuBtn = document.createElement("button");
    menuBtn.textContent = "Take a look at our menu";

        
    homeContainer.appendChild(pageTitle);
    homeContainer.appendChild(menuBtn);

    const cafeImage = document.createElement('img');
    cafeImage.src = Image;
    cafeImage.classList.add("cafeImage");

    homeContainer.appendChild(cafeImage);
    document.getElementById('content').appendChild(homeContainer);
}

export default loadPage;