const localStorageKey = 'minha-lista'

function validateIfExistsNewTask(){
    let values     = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let inputValue = document.getElementById('new-task').value
    let exists     = values.find(x => x.name == inputValue)
    return !exists ? false : true
}

function NewTask() {
    let input = document.getElementById('new-task');

    if(!input.value){
        input.style.border = '1px solid red'
        alert('Digite algo para adicionar a missão na lista');
    }

    else if (validateIfExistsNewTask()){
        alert('Já existe uma task com essa descrição')
    }

    else {
        let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
        values.push({
            name:input.value
        })
        localStorage.setItem(localStorageKey, JSON.stringify(values))
        showValues()
    }

    input.value = ''
}

function showValues(){
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let list = document.getElementById('minha-lista')
    list.innerHTML = ''
    for (let i = 0; i<values.length; i++){
        list.innerHTML += `<li>${values[i]['name']}<button id='btn-ok' onclick='removeItem("${values[i]['name']}")'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send-fill" viewBox="0 0 16 16">
        <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"/>
      </svg></button></li>`;
    }
}

function removeItem(data){
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let index = values.findIndex(x => x.name == data)
    values.splice(index, 1);
    localStorage.setItem(localStorageKey,JSON.stringify(values))
    showValues()
}
showValues();