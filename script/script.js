const year = new Date().getFullYear();
const yearText = document.querySelector('.year');
yearText.innerHTML = year;

let names2
fetch('https://jsonplaceholder.typicode.com/users/')
					.then(res => res.json())
					.then(data => {
						console.log(data)
						names2 = data;
						names2.forEach(function(item) {
							displayName(item);
						});
					});
console.log(names2)


const displayName = (item) => {
	let li = document.createElement("li");
	let text = document.createTextNode(`${item.name} works at ${item.company.name} and live in ${item.address.city}`);
	li.appendChild(text);
	document.getElementById("nameList").appendChild(li);
}
