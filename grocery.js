
let itemInput = document.getElementById('input-item')
let itemList = document.getElementById('list-item')

let items = [];
const addItem = () => {
    let itemName = itemInput.value.trim();
    if (itemName) {
        items.push({ name: itemName })
        renderList();
        itemInput.value = "";
    }
}
const removeItem = (index) => {
    items.splice(index, 1)
    renderList();
}
function editHandler(index) {
    const li = itemList.children[index]
    const input = li.querySelector(`input[data-index='${index}']`)
    const button = li.querySelector('.edit-btn');

    if (button.textContent === "Edit") {
        input.disabled = false;
        input.focus();
        button.textContent = "Save"

    } else {
        const updateItem = input.value.trim()
        if (updateItem !== "") {
            items[index].name = updateItem;

        }
        input.disabled = true;
        button.textContent = "Edit"
        renderList()
    }

}


const renderList = () => {

    itemList.innerHTML = "";
    items.forEach((item, i) => {
        const li = document.createElement('li')
        li.innerHTML = ` <input  type="text" value="${item.name}" disabled  data-index="${i}" /> <button style="background-color: blue; color: white;" onClick="removeItem(${i})">Remove</button>
        <button class="edit-btn" style="background-color: red; color: white;" onClick="editHandler(${i})">Edit</button>  `;
        itemList.appendChild(li)

    });
}
