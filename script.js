let num;
let percentage;

function getVal(){
    const number = document.querySelector('input').value;
    console.log(number)
    num = Number(number)
}

function sum(){
    let result = num + num
    console.log(result)
}
function percentages(){
    const btn = document.querySelector('.button-1')
    const btncontent = btn.textContent;
    percentage = Number(btncontent)
    console.log(percentage)

}

const btn = document.querySelectorAll('button');
btn.onClick = () => console.log('Clicked')

