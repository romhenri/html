const forAca = document.getElementById("forAca");
const doc1 = document.getElementById("doc1");
var d1 = 0;

forAca.addEventListener("click", () => {
	// alert("Click detectado");

	if (d1 == 0) {
		doc1.classList.remove("closed");
		d1 = 1;
	} else if (d1 == 1) {
		doc1.classList.add("closed");
		d1 = 0;
	}
});
