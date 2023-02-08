const createButton = document.querySelector('#create')
const showButton = document.querySelector('#show')
const addDisplay = document.querySelector('.add')
const showDisplay = document.querySelector('.show')
const addClose = document.querySelector('#addclose')
const showClose = document.querySelector('#showclose')
const navBtn = document.querySelector('.nav_btn')
const value = document.querySelector('#addtodo')
const saveButton = document.querySelector('#save')
const rows = document.querySelector('.rows')


let todos = []

const fetchTodos = () => {
    todos = []
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)
        let value = localStorage.getItem(key)
        todos.push({key:key,value:value})
    }
    
}

fetchTodos()
const listTodos = ()=>{
    rows.innerHTML = ''
    todos.map((item) => {
        return rows.innerHTML = rows.innerHTML + `<div  class="row">
            <div class="txt">
                <p>&#x2022; ${item.value}</p>
            </div>
            <div class="dicon">
                <i id = ${item.key} class="ri-delete-bin-3-line"></i>
            </div>
        </div>`
    })
    
}


navBtn.addEventListener('click', () => {
    listTodos()
    showDisplay.style.display = 'flex'
})

createButton.addEventListener('click', () => {
    addDisplay.style.display = 'flex'
})

showButton.addEventListener('click', () => {
    listTodos()
    showDisplay.style.display = 'flex'
})

addClose.addEventListener('click', () => {
    addDisplay.style.display = 'none'
})

showClose.addEventListener('click', () => {
    showDisplay.style.display = 'none'
})

saveButton.addEventListener('click', () => {
    localStorage.setItem(new Date().getTime().toString(), value.value)
    value.value = ''
    fetchTodos()
})

rows.addEventListener('click',(e)=>{
    const getId = e.target.id
    localStorage.removeItem(getId)
    fetchTodos()
    listTodos()
})