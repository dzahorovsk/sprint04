let obj = {
	'menu': {
		'salads' : {
			'greek salad' : 5.99,
			'caesar salad' : 7.99
		},
		'main dishes' : {
			'margkerite pizza' : 12.50,
			'tomato soup' : 6.99,
			'surger' : 10.00
		},
		'desserts' : {
			'cheesscake' : 4.99,
			'chocolate ise-cream' : 2.50,
			'fruit saled' : 3.99
		},
		'drinks' : {
			'lemonade' : 3.20,
			'green tea' : 1.50,
			'coffee' : 1.99
		}
	}
}
let menu = new Map();
let main = document.querySelector('.board');
let inner = '';
const varRegex = /(^|\s|-)\S/g;

for (let key in obj.menu) {
    let subMenu = new Map();
    for (let index in obj.menu[key]) {
        subMenu.set(index, obj.menu[key][index]);
    }
    menu.set(key, subMenu);
}

console.log(menu);

for (let name of menu.keys()) {
	inner += `<div class="title">${cap(name)}</div>`;
	for (let item of menu.get(name).entries()) {
		inner += `<div class="dish"><div class="name">${cap(item[0])}</div><div class="price">$ ${item[1].toFixed(2)}</div></div>`;
	}
	function cap(n) { 
		let nName = n.replace(varRegex, function(a) {return a.toUpperCase()});
		return nName;
	}
}
main.innerHTML = inner;