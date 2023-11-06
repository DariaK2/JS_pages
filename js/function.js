const node_for_click = document.getElementById("for_click")

function find_edit(){
    const lastName  = document.getElementsByTagName('span')[1]
    console.log(lastName.innerText)
    lastName.innerText = 'Kovalenko'

    const firstName  = document.getElementsByTagName('span')[2]
    console.log(firstName.innerText)
    firstName.innerText = 'Daria'

    const middleName  = document.getElementsByTagName('span')[3]
    console.log(middleName.innerText)
    middleName.innerText = 'Dmitrievna'

}

node_for_click.addEventListener("click",find_edit)
