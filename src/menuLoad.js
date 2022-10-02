import coffeeImage from './black-coffee.jpg';
import teaImage from './tea.jpg';
import hotChocoImage from './hot-chocolate.jpg';
import icedCoffeeImage from './iced-coffee.jpg';
import croissantImage from './croissant.jpg';
import cinnamonBunImage from './cinnamon-bun.jpg';
import brownieImage from './brownie.jpg';
import muffinImage from './muffin.jpg';

function loadMenu() {
    
    const menuContainer = document.createElement("div");

    const pageTitle = document.createElement("h1");
    pageTitle.textContent = "Menu";

    const menuGrid = document.createElement("div");
    menuGrid.classList.add("menuGrid");

    // Populating drinks section of menu
    
    const drinksSection = document.createElement("div");
    drinksSection.classList.add("menuCategory");
    
    const drinksHeader = document.createElement("div");
    drinksHeader.textContent = "BEVERAGES";
    drinksHeader.classList.add("categoryHeader")
    drinksSection.appendChild(drinksHeader);

    let drinks = ["Coffee", "Tea", "Hot chocolate", "Iced coffee"];
    let drinksImages = [coffeeImage, teaImage, hotChocoImage, icedCoffeeImage];
    let drinksList = drinks.map(function(x, i) {
        return {"name": x, "imageSrc": drinksImages[i]}
    }.bind(this));
    
    drinksList.forEach((item, index) => {
        const drinkItem = document.createElement("div");
        drinkItem.textContent = item.name;
        let newItemImg = document.createElement('img');
        newItemImg.src = item.imageSrc;
        newItemImg.classList.add("menuImg");
        drinkItem.appendChild(newItemImg);
        drinkItem.classList.add("menuItem");
        drinksSection.appendChild(drinkItem);        
    });

    // Populating snacks section of menu

    const snacksSection = document.createElement("div");
    snacksSection.classList.add("menuCategory");
    
    const snacksHeader = document.createElement("div");
    snacksHeader.textContent = "SNACKS";
    snacksHeader.classList.add("categoryHeader")
    snacksSection.appendChild(snacksHeader);

    let snacks = ["Croissant", "Cinnamon bun", "Brownie", "Muffin"];
    let snacksImages = [croissantImage, cinnamonBunImage, brownieImage, muffinImage];

    let snacksList = snacks.map(function(x, i) {
        return {"name": x, "imageSrc": snacksImages[i]}
    }.bind(this));
    
    snacksList.forEach((item, index) => {
        const snackItem = document.createElement("div");
        snackItem.textContent = item.name;
        let newItemImg = document.createElement('img');
        newItemImg.src = item.imageSrc;
        newItemImg.classList.add("menuImg");
        snackItem.appendChild(newItemImg);
        snackItem.classList.add("menuItem");
        snacksSection.appendChild(snackItem);        
    });

    // Adding both sections to the menu

    menuGrid.appendChild(drinksSection);
    menuGrid.appendChild(snacksSection);
    
    menuContainer.appendChild(pageTitle);
    menuContainer.appendChild(menuGrid);

    document.getElementById('content').appendChild(menuContainer);
}

export default loadMenu;