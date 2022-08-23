import "./menu.css";
function populateMenu(){

    document.querySelector('.menu').classList.add('active');
    const content = document.querySelector('#content');
    
    const bgmenu = document.createElement('div');
    bgmenu.classList.add('bgMenu');

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menuContainer');

    const img1 = document.createElement('div');
    img1.classList.add('topRight');
    menuContainer.appendChild(img1);
    
    const img2 = document.createElement('div');
    img2.classList.add('bottomLeft');
    menuContainer.appendChild(img2);

    for(let i = 0; i<6; i++){
        const item = document.createElement('div');
        item.classList.add('item');

        const itemImg = document.createElement('div');
        itemImg.classList.add('menuItemImg');
        item.appendChild(itemImg);

        const itemTitle = document.createElement('h3');
        itemTitle.classList.add('itemTitle');
        itemTitle.innerText = "random words";
        item.appendChild(itemTitle);

        const itemDesc = document.createElement('p');
        itemDesc.classList.add('itemDesc');
        itemDesc.innerText = "lots of words because i can seem to get lorem through javascript and i can't be stuffed turning to an online lorem generateor ahhh why is it so annoying to think of new stuff";
        item.appendChild(itemDesc);

        menuContainer.appendChild(item);
    }
    bgmenu.appendChild(menuContainer);
    content.appendChild(bgmenu);
}

export default populateMenu;