// let num;
// let percentage;

// function getVal(){
//     const number = document.querySelector('input').value;
//     console.log(number)
//     num = Number(number)
// }

// function sum(){
//     let result = num + num
//     console.log(result)
// }
// function percentages(){
//     const btn = document.querySelector('.button-1')
//     const btncontent = btn.textContent;
//     percentage = Number(btncontent)
//     console.log(percentage)

// }

// const btn = document.querySelectorAll('button');
// btn.onClick = () => console.log('Clicked')


if (document.body.addEventListener){
    document.body.addEventListener('click',yourHandler,false);
}
else{
    document.body.attachEvent('onclick',yourHandler);//for IE
}

function yourHandler(e){
    e = e || window.event;
    const target = e.target || e.srcElement;
    if (target.className.match('button'))
    {
        show(target)
        target.classList.add('active');
        
    }
}

function show(btn){
    var btns = document.querySelectorAll('button');
    btns.forEach(function(btn){
      btn.classList.remove('active');
    });
    // btn.classList.add('active');
}