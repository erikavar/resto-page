import loadPage from './pageLoad.js';
import loadMenu from './menuLoad.js';
import loadContact from './contactLoad.js';
import './style.css';
import loadHeader from './loadHeader';

loadHeader();

loadPage();

function menuViaOtherBtn() {
    document.querySelector(".otherMenuBtn").addEventListener("click", function() {
        document.getElementById('content').textContent = "";
        loadMenu();
    });
}

document.querySelector(".homeBtn").addEventListener("click", function() {
    document.getElementById('content').textContent = "";
    loadPage();
    menuViaOtherBtn()
});

document.querySelector(".restoName").addEventListener("click", function() {
    document.getElementById('content').textContent = "";
    loadPage();
    menuViaOtherBtn()
});

document.querySelector(".menuBtn").addEventListener("click", function() {
    document.getElementById('content').textContent = "";
    loadMenu();
});

document.querySelector(".contactBtn").addEventListener("click", function() {
    document.getElementById('content').textContent = "";
    loadContact();
});




