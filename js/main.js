// creating main
const newMain = document.createElement('main');
document.body.append(newMain);
const main = document.querySelector('main');
// making imput field
const newInput = document.createElement('input');
newInput.type = 'text';
newInput.id = 'elementRemover'
newInput.placeholder = 'name an element to remove';
document.body.insertBefore(newInput, main);
const elementRemoverInput = document.querySelector('#elementRemover');
// creating remove button
const newButton = document.createElement('button');
newButton.id = 'removeButton'
document.body.insertBefore(newButton, main);
const removeButton = document.querySelector('#removeButton');
removeButton.append("remove");
// creating add new element input
const newInputAdd = document.createElement('input');
newInputAdd.type = 'text';
newInputAdd.id = 'elementAdder';
newInputAdd.placeholder = 'name an element to add';
document.body.insertBefore(newInputAdd, main);
const elementAdderInput = document.querySelector('#elementAdder');
// creating button for adding element
const newButtonAdd = document.createElement('button');
newButtonAdd.id = 'addButton'
document.body.insertBefore(newButtonAdd, main);
const addButton = document.querySelector('#addButton');
addButton.append("Add");

// creating img
const newImage = document.createElement('img')
main.append(newImage);
const image = document.querySelector('img');
// adding src att to img 
const imagesource = document.createAttribute('src');
imagesource.value = 'img/weird.png';
image.setAttributeNode(imagesource);
// adding a link
const newlink = document.createElement('a')
main.append(newlink)
const link = document.querySelector('a');
// adding href att to link
const linkHref = document.createAttribute('href');
linkHref.value = 'google.com';
link.setAttributeNode(linkHref);
link.append('Google link');

// function to remove input element
function removElement() {
    let value = elementRemoverInput.value;
    document.querySelector(value).remove();
}
function addElement(){
    let value = elementAdderInput.value;
    document.body.append(value);
}

removeButton.addEventListener('click', removElement);
addButton.addEventListener('click', addElement);




