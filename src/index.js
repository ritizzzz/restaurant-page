import "./main-styles.css";
import populateMenu from "./menu";




function clearDom(){
    document.querySelector('#content').innerHTML = '';
}

function setAllLinkUnactive(){
    document.querySelectorAll('.link').forEach(link => {
        link.classList.remove('active');
    })
}

function eventListeners(){
    document.querySelector('.about').addEventListener('click', ()=>{
        clearDom();
        setAllLinkUnactive();
        populateAbout();
    })

    document.querySelector('.menu').addEventListener('click', ()=>{
        clearDom();
        setAllLinkUnactive();
        populateMenu();
    })

    document.querySelector('.contact').addEventListener('click', ()=>{
        clearDom();
        setAllLinkUnactive();
        populateContact();
    })

}

function populateAbout(){
    document.querySelector('.about').classList.add('active');
    const div = document.createElement('div');
    div.classList.add('aboutContainer');

    const copy = document.createElement('div');
    copy.classList.add('copy');
    copy.innerText = "This is a shiba inu restaurant. Shibas are considered as heckin good bois all over the world. An eating in a restaurant dedicated to these heckin good bois is a great experience. So sit down, relax, scroll through the menu and get ready for a divine experience.";
    
    div.appendChild(copy);
    document.querySelector('#content').appendChild(div);


}
eventListeners();
populateAbout();