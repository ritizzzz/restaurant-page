import "./menu.css";
function populateMenu(){
    document.querySelector('.menu').classList.add('active');
    const content = document.querySelector('#content');


    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menuContainer');

    const img1 = document.createElement('div');
    img1.classList.add('topRight');
    menuContainer.appendChild(img1);
    
    const img2 = document.createElement('div');
    img2.classList.add('bottomLeft');
    menuContainer.appendChild(img2);
    
    content.appendChild(menuContainer);

}

export default populateMenu;