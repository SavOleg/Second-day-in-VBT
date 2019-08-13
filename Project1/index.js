//console.log(typeof(document.all[8]));
// console.log(document.all[8].);
function addFunction() {
	const text = document.getElementById("textInput").value;
	if(text && text.length) {
		const a = document.createElement('div');

		a.setAttribute('id', 'test');

		a.innerHTML = text;
		document.body.appendChild(a);
		const b = document.createElement('button');
		b.innerHTML = "&#10006";
		a.appendChild(b);

		b.addEventListener("click", () => {
			//console.log(a.getAttribute('id'));
			a.parentElement.removeChild(a);
		});
	}
	//console.log(document.all[8]);
	// console.log(document.getElementById("text"));
	// console.log(document.getElementById("text").childNodes[0]);
	// document.getElementById("text").lastChild.addEventListener("click", deleteNode);
}
