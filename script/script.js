const year = new Date().getFullYear();
const yearText = document.querySelector('.year');
yearText.innerHTML = year;
      
let names = [
	{firstName: "Sophia", lastName: "Liam"},
	{firstName: "Riley", lastName: "Imoh"},
	{firstName: "Olive", lastName: "Uzoma"},
	{firstName: "Emma", lastName: "Aiden"},
	{firstName: "Kiara", lastName: "Nova"},
	{firstName: "Zara", lastName: " Athena"},
]

names.forEach(function(item) {
  var li = document.createElement("li");
  var text = document.createTextNode(`${item.firstName} ${item.lastName}`);
  li.appendChild(text);
  document.getElementById("nameList").appendChild(li);
});
