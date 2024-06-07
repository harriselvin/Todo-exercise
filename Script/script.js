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

    let item = new ListItem(1, input.value, date, true)

    if (input.value.trim() !== '') {
        let array = [item.name]
        for (let arr of array) {
            listItems.innerHTML += `
                        <li>
                            <input class="chkbox" type="checkbox">
                                <span class="list-text">${arr}</span>
                                <button class="delete">X</button>
                        </li> 
                    `
        }
    }
    const deleteItems = document.querySelectorAll('.delete')
    let checkBox = document.querySelector('.chkbox')

    console.log(deleteItems);
    console.log(checkBox);

    deleteItems.forEach(btn => {
        btn.addEventListener('click', () => {
            list.splice(0, 1)

            console.log(list);
        })
    })   
}

function submit() {
    addItems()
    clearInput()
}

function clearInput() {
    input.value = ''
}


        
addBtn.addEventListener('click', submit)
