import Image from './cafe.png';

function loadPage() {
    
    const homeContainer = document.createElement("div");

    const pageTitle = document.createElement("h1");
    pageTitle.textContent = "A GREAT DAY STARTS WITH GREAT COFFEE.";

    const otherMenuBtn = document.createElement("button");
    otherMenuBtn.textContent = "Take a look at our menu";
    otherMenuBtn.classList.add("otherMenuBtn");

        
    homeContainer.appendChild(pageTitle);
    homeContainer.appendChild(otherMenuBtn);

    const cafeImage = document.createElement('img');
    cafeImage.src = Image;
    cafeImage.classList.add("cafeImage");

    homeContainer.appendChild(cafeImage);
    document.getElementById('content').appendChild(homeContainer);
}

export default loadPage;