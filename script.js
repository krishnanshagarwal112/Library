const display_box = document.getElementById("display-box")
const content = document.getElementById("content")
const add_btn = document.getElementById("add-btn");
const sumbit_btn = document.getElementById("sumbit-btn");
const display_btn = document.getElementById("display-btn");
const form = document.getElementById("main-form")

let count = 1;

const bn = document.getElementById("book_name")
const ba = document.getElementById("book_author")
const br = document.getElementById("book_status")

content.style.display = "none"
form.style.display = "none"
sumbit_btn.style.display = "none";

add_btn.addEventListener("click",()=>{
    form.style.display = "inline";
    sumbit_btn.style.display= "inline";
    display_box.innerHTML = ""
    count = 1
    
})

class Book{
    constructor(name,author,status,inLibrary){
        this.name = name;
        this.author = author;
        this.status = status;
        this.inLibrary = inLibrary
    }
}



let book1 = new Book("Naruto","Masashi Kishimoto","Read",true);
let book2 = new Book("One Piece","Eiichiro Oda","Reading",true);
let book3 = new Book("Bleach","Tite Kubo","toRead",true);


library = []
library.push(book1)
library.push(book2)
library.push(book3)


display_btn.addEventListener("click",()=>{
    if(count % 2 == 1){
        content.style.display = "inline"
        for(let i = 0; i  < library.length ; i++){
        let card = document.createElement('div')
        let html = `
                    <div class="col">
                    <span id="bn">${library[i].name}</span>
                    <span id="ba">${library[i].author}</span>
                    <span id="br">${library[i].status}</span>
                    </div>
                    <button id="remove-btn">Remove</button>`
        card.innerHTML = html
        card.classList.add('card')
        display_box.appendChild(card)
    }
    }
    else if(count % 2 == 0){
        display_box.innerHTML = ""
    }
    count++;
    

    
})


sumbit_btn.addEventListener("click",()=>{
    let book = new Book(bn.value, ba.value,br.value, true)
    library.push(book)
    form.style.display = "none"
})