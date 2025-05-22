let b = document.querySelector('button#calc');
b.addEventListener('click', foo);

function foo(){
document.querySelector('input[name="left"]');
let i=document.querySelector('input[name="left"]');
let n =Number(i.value);
console.log(n);
    document.querySelector('input[name="right"]');
    let j=document.querySelector('input[name="right"]');
    let m =Number(j.value);
console.log(m);
console.log(n+m);
document.querySelector('span#answer').textContent=n+m;
}


