const input = document.querySelector('.input');
const addBtn = document.querySelector('#addBtn');

addBtn.addEventListener('click', inpNull)



// Input sozlamalari
function inpNull() {
    let db = input.value


    let current = localStorage.length

    // Inputni tekshirvotti
    if (input.value === "" || input.value === null) {
        return false
    } else {
        // Malumot ketvotti
        localStorage.setItem(`${current}`, `${db}`)
    }

    input.value = ""
    location.reload()

}

// Ma'lumotlarni ekranga chiqarish
function sendDb() {

    let current = localStorage.length

    // alert('ishlavotti')
    for (let i = 0; i < current; i++) {

        const product = localStorage.getItem(`${i}`)
        const li = document.createElement('li')
        const span = document.createElement('span')
        span.classList.add('product')

        span.innerHTML = product
        document.querySelector('ol').appendChild(li);
        li.appendChild(span)

        const remove = document.createElement(`span`)
        remove.classList.add('remove')
        remove.innerHTML = `<i class="fa-solid fa-trash"></i>`
        li.appendChild(remove)

        const pr = document.querySelectorAll('ol li .product');

        pr[i].addEventListener('click', () => {
            pr[i].classList.toggle('completedItem')
        })

    }
}
sendDb()


// Itemlarni o'chirish 

const li = document.querySelectorAll('ol li ');
const product = document.querySelectorAll('ol li .product');
const removeBtn = document.querySelectorAll('ol li .remove');

for (let i = 0; i < li.length; i++) {
    removeBtn[i].addEventListener('click', () => {
        localStorage.removeItem(`${[[i]]}`)
        li[i].style.display = 'none'
    })
}   


// Hamma  ma'lumotlarni o'chirish clear

const clearBtn = document.querySelector('#clearBtn');

clearBtn.addEventListener('click', () => {
    localStorage.clear()
    location.reload()
})