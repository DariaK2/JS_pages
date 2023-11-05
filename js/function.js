const node_for_click = document.getElementById("for_click")

function find_edit(){
    const secondName  = document.getElementsByTagName('span')[1]
    console.log(secondName.innerText)
    secondName.innerText = 'Kovalenko'

    const firstName  = document.getElementsByTagName('span')[2]
    console.log(firstName.innerText)
    firstName.innerText = 'Daria'

}

node_for_click.addEventListener("click",find_edit)
