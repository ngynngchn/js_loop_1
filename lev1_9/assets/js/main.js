let words = [
	"hallo",
	"Auto",
	"Waschmaschine",
	"Schrank",
	"Katze",
	"Beispiel",
	"Eltern",
	"Fenster",
	"Geburtstag",
	"Himmel",
	"schwimmen",
	"Zeitung",
];

let input = document.querySelector("#number");
let btn = document.querySelector("input[type='submit']");
let output = document.querySelector("section");

btn.addEventListener("click", showWord);

function showWord() {
	for (let i = 0; i < words.length; i++) {
		if (words[i].length == input.value) {
			output.innerHTML = `${words[i]} <br>`;
		}
	}
}
