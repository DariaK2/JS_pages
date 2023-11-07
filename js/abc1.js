function verify () {
    console.log('a, d')
    let a = parseInt(elementA.value);
    let d = parseInt(elementD.value);
    console.log(a, d)

    let dd = a * Math.sqrt(2);

    if (d >= dd){
    result = 'Можно'
    document.getElementById('result').innerText = messageText + result;
    document.getElementsByName('result')[0].value = result;
    check = true
    }
    else {
    result = 'Нельзя'
    document.getElementById('result').innerText = messageText + result;
    document.getElementsByName('result')[0].value = result;
    check = true
    }

}

const elementA = document.getElementById('a');
const elementD = document.getElementById('d');

const elementVerify = document.getElementById('verify');
elementVerify.addEventListener('click', verify)



function send() {
    if (check) {
        let textCondition = document.getElementsByTagName('p')[0].innerText
        document.getElementsByName('formulation')[0].value = textCondition;
        document.getElementsByName('result')[0].value = result;
        document.getElementById("UserEnter").submit();
    } else {
        alert("Есть недостатки. Повторите ввод")
    }
}

function verify_send() {
    verify();
    send();
}

let messageText = document.getElementById("result").innerText
console.log(messageText)
let result;
let check = false;


//const elementA = document.getElementById("a");
//elementA.addEventListener('input', verify);
//
//const elementB = document.getElementById("d");
//elementB.addEventListener('input', verify);
//
//const elementVerify = document.getElementById("verify");
//elementVerify.addEventListener('click', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send)
