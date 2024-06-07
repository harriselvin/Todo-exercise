const listItems = document.querySelector('ul')
const sortBtn = document.querySelector('.sort')
const addBtn = document.querySelector('.add')
const input = document.querySelector('.input')

let list = []

function ListItem(id, name, createdDate, completed) {
    this.id =id
    this.name = name
    this.createdDate = createdDate
    this.completed = completed
}

function addItems() {

    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    let currentDate = new Date().getDate()
    let currentMonth = month[new Date().getMonth()]
    let year = new Date().getFullYear()

    let date = (`${currentDate} ${currentMonth} ${year}`)

    let item = new ListItem(list.length + 1, input.value, date, false)

    if (input.value.trim() !== '') {
        list.push(item)
        renderList()
        clearInput()
    }
}

function renderList() {
    listItems.innerHTML = ''; // Clear current list
    list.forEach(item => {
        let array = [item.name]
        for (let arr of array) {
            listItems.innerHTML += `
                        <li data-id="${item.id}">
                            <input class="chkbox" type="checkbox" ${item.completed ? 'checked' : ''}>
                            <span class="list-text ${item.completed ? 'completed' : ''}">${arr}</span>
                            <button class="delete">X</button>
                        </li> 
                    `
        }
    })

    // Event Listener to delete buttons
    const deleteItems = document.querySelectorAll('.delete')
    let checkBox = document.querySelectorAll('.chkbox')

    deleteItems.forEach(btn => {
        btn.addEventListener('click', deleteItem)
    })

    checkBox.forEach(chk => {
        chk.addEventListener('change', completed)
    })
}

function deleteItem(e) {
    const id = parseInt(e.target.parentElement.getAttribute('data-id'))
    list = list.filter(item => item.id !== id)
    renderList()
}

function completed(e) {
    const id = parseInt(e.target.parentElement.getAttribute('data-id'))
    const item = list.find(item => item.id === id)
    item.completed = e.target.checked
    renderList()
    
}

function sortItems() {
    list.sort((a, b) => {
        let nameA = a.name.toUpperCase()
        let nameB = b.name.toUpperCase()

        if (nameA < nameB) {
            return -1
        }
        if (nameA > nameB) {
            return 1
        }

        return 0
    })

    renderList()
}

function submit() {
    addItems()
}

function clearInput() {
    input.value = ''
}

        
addBtn.addEventListener('click', submit)
sortBtn.addEventListener('click', sortItems)
