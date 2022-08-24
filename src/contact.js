import "./contact.css";
function populateContact(){
    document.querySelector('.contact').classList.add('active');
    const content = document.querySelector('#content');
   
    const bgContact = document.createElement('div');
    bgContact.classList.add('bgContact');

    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contactContainer');
    bgContact.appendChild(contactContainer);

    content.appendChild(bgContact);
    

}

export default populateContact;