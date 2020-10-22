const newMain = document.createElement('main');
document.body.append(newMain);
const newButton = document.createElement('button');
const main = document.querySelector('main');
document.body.insertBefore(newButton, main);
const removeButton = document.querySelector('button');
removeButton.append("remove");
const newImage = document.createElement('img')
main.append(newImage);
const image = document.querySelector('img');
const imagesource = document.createAttribute('src');
imagesource.value = 'img/weird.png';
image.setAttributeNode(imagesource);
const newlink = document.createElement('a')
main.append(newlink)
const link = document.querySelector('a');
const linkHref = document.createAttribute('href');
linkHref.value = 'google.com';
link.setAttributeNode(linkHref);
link.append('Google link');

function removeMain() {
    main.remove(self);
}

removeButton.addEventListener('click', removeMain);


// add text imput to remove any imput element
// add a New text imput and button to append the page with text from user imput