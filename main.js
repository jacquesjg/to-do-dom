//query select button
let addToDoButton = document.querySelector('#addToDo');
let toDoContainer = document.querySelector('#toDoContainer');
let inputField = document.querySelector('#inputField');

addToDoButton.addEventListener('click', function () {
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling')
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = '';
    paragraph.addEventListener('click', function () {
        paragraph.style.textDecoration = "line-through"
    });
});

// new buttons need to setup up
let removeCompletedButton = document.querySelector('#removeCompleted');
let removeAllButton = document.querySelector('#removeAll');

// remove completed tasks function

removeCompletedButton.addEventListener('click', function () {
    for (const item of toDoContainer.children) {
        if (item.style.textDecoration === "line-through") {
            toDoContainer.removeChild(item);
        }
    }
})


// remove all button
removeAllButton.addEventListener('click', function () {
    for (const item of toDoContainer.children) {
        toDoContainer.removeChild(item);
    }

})
