import "./contact.css";
function populateContact(){
    document.querySelector('.contact').classList.add('active');
    const content = document.querySelector('#content');
   
    const bgContact = document.createElement('div');
    bgContact.classList.add('bgContact');

    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contactContainer');
    bgContact.appendChild(contactContainer);

    const contactHeader = document.createElement('h1');
    contactHeader.innerText = "CONTACT US";
    contactHeader.classList.add('contactHeader');
    contactContainer.appendChild(contactHeader);

    const locationDiv = document.createElement('div');
    locationDiv.classList.add('locationDiv');
    
    const image = document.createElement('div');
    image.classList.add('locationImage');
    locationDiv.appendChild(image);

    const locationTitle = document.createElement('h3');
    locationTitle.classList.add('locationTitle');
    locationTitle.innerText = "Location";
    locationDiv.appendChild(locationTitle);

    const locationAddress = document.createElement('h3');
    locationAddress.classList.add('locationAddress');
    locationAddress.innerText = "333 forest road, Japan";
    locationDiv.appendChild(locationAddress);
    
    const locationText = document.createElement('h3');
    locationText.classList.add('locationText');
    locationText.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt";
    locationDiv.appendChild(locationText);
    
    contactContainer.appendChild(locationDiv);
    content.appendChild(bgContact);
}

export default populateContact;