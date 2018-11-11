const note = document.getElementById("note-pad");
const title = document.getElementById("title");
const ul = document.querySelector('ul');

window.onload = function() {
    for (let i = 0; i < this.localStorage.length; i++){
        listOfSavedNotesMaker
        (localStorage.key(i));
    }
}

document.getElementById('add-new').addEventListener('click', function(){
    title.value = "";
    note.value = "";
    note.disabled = true;
});

note.oninput = function(){
    if (isTitleAlreadyInLocalStorage(title.value)){
        localStorage.setItem(title.value, note.value);
    }
};

document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();
    if(!isTitleAlreadyInLocalStorage(title.value)){
        localStorage.setItem(title.value, note.value);
        listOfSavedNotesMaker
        (title.value);
    } else {
        localStorage.setItem(title.value, note.value);
    }
    note.disabled = false;
});

function listOfSavedNotesMaker(text) {
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.textContent = text;
    listItem.appendChild(button);
    let delButton = document.createElement('button');
    delButton.textContent = "delete";
    delButton.className = 'delButton';
    listItem.appendChild(delButton);
    ul.appendChild(listItem);
    addEventListenerToButton(button);
    addEventListenerToDeleteButton(delButton, text);
}

function isTitleAlreadyInLocalStorage(text) {
    for (let i = 0; i < localStorage.length; i++) {
        if(localStorage.key(i) == text) {
            return true;
        }
    }
    return false;
}

function addEventListenerToButton(button) {
    button.addEventListener('click', function(){
        title.value = button.textContent;
        for(let i = 0; i < localStorage.length; i++) {
            if (localStorage.key(i) == title.value) {
                note.value = localStorage.getItem(localStorage.key(i));
                note.disabled = false;
            }
        }
    });
}

function addEventListenerToDeleteButton(delButton, title) {
    delButton.addEventListener('click', function(){
        localStorage.removeItem(title);
        location.reload();
    });
}