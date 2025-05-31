//////////////// ここは書き換えてはいけない！ 

let campus = {
	address: "八王子市館町",
	buildingD: ["D101", "D102", "D103", "D201", "D202", "D203", "D204", "D205"],
	lon: 35.624869704425,
	lat: 139.28201056633
};

let gakka = [
	{name: "機械システム工学科", ename: "Department of Mechanical Systems Engineering"},
	{name: "電子システム工学科", ename: "Department of Electronics and Computer Systems"},
	{name: "情報工学科", ename: "Department of Computer Science"},
	{name: "デザイン学科", ename: "Department of Design"}
];

//////////////// ここから下にプログラムを書きたそう!
let b =document.querySelector('button#show');
b.addEventListener('click' , changeDom);
let i =0;

function changeDom(){
	if(i !== 0){
		p.remove();
	}
let p = document.createElement('a');
p.textContent = campus.address;
let c=document.querySelector('h2#addr');
c.insertAdjacentElement('afterend', p);

if(i !== 0){
	u.remove();
	l.remove();
}

b =document.querySelector('h2#dept');
let a =document.createElement('ul');
b.insertAdjacentElement('afterend' , a);
for(let i of gakka){
	let d =document.createElement('li');
    d.textContent =i.name;
    a.insertAdjacentElement('beforeend' ,d);
}
i++;
}
