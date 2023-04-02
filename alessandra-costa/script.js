const forAca = document.querySelectorAll(".forAca");
const closeButton = document.querySelectorAll(".close");
const doc1 = document.getElementById("doc1");
var d1 = 0;

forAca.forEach((forAca) =>
	forAca.addEventListener("click", () => {
		// alert("Click detectado");

		if (d1 == 0) {
			doc1.classList.remove("closed");
			d1 = 1;
			forAca.innerHTML = "Saber Menos";
		} else if (d1 == 1) {
			doc1.classList.add("closed");
			d1 = 0;
			forAca.innerHTML = "Saber Mais";
		}
	})
);

closeButton.forEach((closeButton) =>
	closeButton.addEventListener("click", () => {
		// alert("Click Detectado");

		forAca.forEach((forAca) => (forAca.innerHTML = "Saber Mais"));
		doc1.classList.add("closed");
		d1 = 0;
	})
);
