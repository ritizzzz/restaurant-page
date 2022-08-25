import "./contact.css";
import phone from "./phone.svg";
import email from "./email.svg";
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
    
    const managerDiv = document.createElement('div');
    managerDiv.classList.add('managerDiv');

    const managerImage = document.createElement('div');
    managerImage.classList.add('managerImage');
    managerDiv.appendChild(managerImage);

    const managerTitle = document.createElement('h3');
    managerTitle.classList.add('managerTitle');
    managerTitle.innerText = 'Manager';
    managerDiv.appendChild(managerTitle);

    const managerContactDiv = document.createElement('div');

    const phoneDiv = document.createElement('div');
    phoneDiv.classList.add('phoneDiv');

    const phoneIcon = document.createElement('img');
    phoneIcon.classList.add('phoneIcon');
    phoneIcon.setAttribute('src', phone);
    phoneDiv.appendChild(phoneIcon);

    const phoneNum = document.createElement('p');
    phoneNum.classList.add('phoneNum');
    phoneNum.innerText = '999-999-999';
    phoneDiv.appendChild(phoneNum);

    const emailDiv = document.createElement('div');
    emailDiv.classList.add('emailDiv');

    const emailIcon = document.createElement('img');
    emailIcon.classList.add('emailIcon');
    emailIcon.setAttribute('src', email);
    emailDiv.appendChild(emailIcon);

    const managerEmail = document.createElement('p');
    managerEmail.classList.add('email');
    managerEmail.innerText = 'managershiba@somedomain.com';
    emailDiv.appendChild(managerEmail);

    managerContactDiv.appendChild(phoneDiv);
    managerContactDiv.appendChild(emailDiv);
 
    managerDiv.appendChild(managerContactDiv);
    
    contactContainer.appendChild(locationDiv);
    contactContainer.appendChild(managerDiv);
    content.appendChild(bgContact);
}

export default populateContact;