var tabcros = document.querySelectorAll(".fa-times")
var tabheart = document.querySelectorAll(".fa-heart")
var tabplus = document.querySelectorAll(".fa-plus-circle")
var tabmoin= document.querySelectorAll(".fa-minus-circle") 
var somme = document.querySelector(".total")


Array.from(tabcros).map(el => {
    el.addEventListener("click", () => {
      let qte=parseInt(el.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.childNodes[3].innerHTML)
        if(el.nextElementSibling.className==='fas fa-heart fa-2x red-heart' || qte>0)
            window.alert("impossible de supprimer l'article")  
        else  
             el.parentNode.parentNode.remove()
    })
})

Array.from(tabheart).map(el => {
    el.addEventListener("click", () => {
        el.classList.toggle("red-heart")
    })
})
Array.from(tabplus).map(el => {
    el.addEventListener("click", () => {
        let nbr = parseInt(el.nextElementSibling.innerHTML) + 1
        el.nextElementSibling.innerHTML = nbr
        let prix = parseInt(el.parentNode.nextElementSibling.innerHTML)
        somme.innerHTML = parseInt(somme.innerHTML) + prix + " dt"
    })
})

Array.from(tabmoin).map(el => {
    el.addEventListener("click", () => {
        let nbr = parseInt(el.previousElementSibling.innerHTML) 
        if (!nbr==0)
        { 
            nbr--
            el.previousElementSibling.innerHTML = nbr
            let prix = parseInt(el.parentNode.nextElementSibling.innerHTML)
            somme.innerHTML = parseInt(somme.innerHTML) - prix + " dt"
        }
    })
})





