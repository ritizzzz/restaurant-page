import "./main-styles.css";
import populateMenu from "./menu";
import populateContact from "./contact";




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
    copy.innerText = "This is a shiba inu petting place. Shibas are considered as heckin good bois all over the world. Petting a shiba inu is a one of the things everyone should experience. So sit down, relax and look through the available shiba inus.";
    
    div.appendChild(copy);
    document.querySelector('#content').appendChild(div);


}
eventListeners();
populateAbout();