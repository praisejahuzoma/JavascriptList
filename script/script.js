const year = new Date().getFullYear();
const yearText = document.querySelector('.year');
yearText.innerHTML = year;
      
let names = [
	{firstName: "Sophia", lastName: "Liam"},
	{firstName: "Benjamin", lastName: "Riley"},
	{firstName: "Olive", lastName: "Uzoma"},
	{firstName: "Emma", lastName: "Aiden"},
	{firstName: "Kiara", lastName: "Nova"},
	{firstName: "Zara", lastName: " Athena"},
]

let names2

fetch('https://jsonplaceholder.typicode.com/users/')
					.then(res => res.json())
					.then(data => {
						console.log(data)
						names2 = data;
						names2.forEach(function(item) {
							var li = document.createElement("li");
							var text = document.createTextNode(`${item.name} works at ${item.company.name} and live in ${item.address.city}`);
							li.appendChild(text);
							document.getElementById("nameList").appendChild(li);
						  });
					})
console.log(names2)


