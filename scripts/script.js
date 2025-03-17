// Verifica o tamanho da tela
if (window.innerWidth <= 1024) {
  // Remove a classe do elemento
  document.querySelector('.input_button').classList.remove('input_button');
} else {
    document.querySelector('.input_button').classList.add('input_button');
}

// Adiciona um listener para o evento resize
window.addEventListener('resize', function() {
  if (window.innerWidth <= 1024) {
    document.querySelector('.input_button').classList.remove('input_button');
  } else {
    document.querySelector('.input_button').classList.add('input_button');
  }
});


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const addButton = document.querySelector(".button_submit")
const trash = document.querySelector(".trash")
const alert_del = document.querySelector(".alert_del")
const add_input = document.querySelector("#add_input")
const list = document.querySelector(".shopping-list")


// Adiciona um listener para o evento click do botão
addButton.addEventListener("click", (event) => {
  event.preventDefault();

  addItem()
})


addItem = () => {
  let newItem = add_input.value

  if (newItem === "") {
    alert("Por favor, insira um item na lista.")
    return
  }
  
  const item = document.createElement("li")
  const input = document.createElement("input")
  const label = document.createElement("label")
  const trashIcon = document.createElement("i")
  
  input.setAttribute("type", "checkbox")
  input.setAttribute("id", newItem)
  label.setAttribute("for", newItem)
  
  item.classList.add("shopping-item")
  input.classList.add("item-checkbox")
  trashIcon.classList.add("fa-solid", "fa-trash-can", "trash")

  label.textContent = newItem

  trashIcon.onclick = () => {
    item.remove()
    
    alert_del.classList.remove("hide")
    setTimeout(() => {
      alert_del.classList.add("hide")
    }, 2000)
    
  }

  list.appendChild(item)
  item.appendChild(input)
  item.appendChild(label)
  item.appendChild(trashIcon)
}

