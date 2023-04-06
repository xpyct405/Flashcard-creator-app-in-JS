let addBtn = document.querySelector('.add-btn');
let deleteBtn = document.querySelector('.delete-btn');
let createBtn = document.querySelector('.create-btn');
let closeBtn = document.querySelector('.close-btn');
let hidedText = document.querySelector('.hided-text');
let shownText = document.querySelector('.shown-text');

let question = document.querySelector('#question'); 
let answer = document.querySelector('#answer'); 

addBtn.addEventListener ('click', () => {
    document.querySelector('.add-flashcard').style.display = "block";
})

closeBtn.addEventListener('click', () => {
    document.querySelector('.add-flashcard').style.display = "none"
})

deleteBtn.addEventListener('click', () => {
    document.querySelector('.flashcards').innerHTML = ''
})

createBtn.addEventListener('click', () => {

    let item = document.createElement('div');
    let title = document.createElement('h2');
    let hidedText = document.createElement('p');
    let shownText = document.createElement('p');

    item.className = 'flashcard';
    title.className = 'flashcard-title';
    hidedText.className = 'hided-text';
    shownText.className = 'shown-text';
    
    console.log(question.value);
    if (question.value === '') {
        alert('Введите корректный вопрос или проверьте графу вопроса');
        return; 
    } else {
        title.textContent = question.value;
    }

    if (answer.value === '') {
        alert('Введите корректный вопрос или проверьте графу вопроса');
        return; 
    } else {
        hidedText.textContent = answer.value;
    }

   

    shownText.textContent = "Show answer"

    shownText.addEventListener('click', () => {
        hidedText.style.display = 'block';
        hidedText.style.color = '#fff';
        shownText.style.display = 'none'
    })
    
    hidedText.addEventListener('click', () => {
        hidedText.style.display = 'none'
        shownText.style.display = 'block'
    })

    document.querySelector('.flashcards').appendChild(item);
    item.append(title, hidedText, shownText)

    question.value = '';
    answer.value = ''
})

