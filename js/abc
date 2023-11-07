function verify () {
    console.log('a, d')
    let a = parseInt(elementA.innerText);
    let d = parseInt(elementD.innerText);
    console.log(a, d)

    let low, high

    let dd = a * Math.sqrt(2);

    if (d >= dd){
    result = 'Можно'
    document.getElementById('result').innerText = result;

    }
    else {
    result = 'Нельзя'
    document.getElementById('result').innerText = result;

    }

}

const elementA = document.getElementById('a');
const elementD = document.getElementById('d');

const elementVerify = document.getElementById('verify');
elementVerify.addEventListener('click', verify)
