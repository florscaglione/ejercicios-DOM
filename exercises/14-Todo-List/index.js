// Your code here
// addTask => pillar value del input, crear nuevo li, agregar input al li, agregar li al ul
    //let li = document.createElement("li");
    let ul = document.querySelector("ul");
    let input = document.querySelector("#addToDo");
    let erase = document.querySelectorAll("li")
    
    input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
        let newLi = `<li><span><i class="fa fa-trash"></i></span> ${input.value}</li>`;
            //ul.appendChild();
            ul.innerHTML += newLi
            eraseOnClick(newLi);
        }
    })  
    for (let index = 0; index < erase.length; index++) {
        let item = erase[index];
        eraseOnClick(item);
    }
    function eraseOnClick(element) {
        element.addEventListener("click", (event) => {
            console.log(event)
            element.parentNode.removeChild(element)
        })
    }

    //falta acabar, revisar la explicacion de victor (clase 11 agosto)