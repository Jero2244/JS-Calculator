let num;
let percentage;
let result

function getVal(){
    const number = document.querySelector('input').value;
    num = Number(number)
}

function sum(){
    const people = Number(document.querySelector('.people').value)
    result = num*percentage
    result = result/people
    console.log(result)
}

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
        let percent = target.textContent
        switch(percent){
            case('5%'):
                percentage = 0.05
                break;
            case('10%'):
                percentage = 0.1;
                break;
            case('15%'):
                percentage = 0.15;
                break
            case('25%'):
                percentage = 0.25;
                break;
            case('50%'):
                percentage = 0.5;
                break
        
        }
    }
}

function show(btn){
    var btns = document.querySelectorAll('button');
    btns.forEach(function(btn){
      btn.classList.remove('active');
    });
    // btn.classList.add('active');
}


