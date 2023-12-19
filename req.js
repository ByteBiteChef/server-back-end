document.querySelector("form").addEventListener("submit", handdlePostRequest);
document.querySelector("form").addEventListener("edit", handdleUpDateRequest);

fetch("http://localhost:4000/users")
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		console.log(data);
	})
	.catch((error) => console.log(error));

async function handdlePostRequest(event) {
	event.preventDefault();

	const firstName = document.getElementById("firstName").value;
	const lastName = document.getElementById("lastName").value;
	const age = document.getElementById("age").value;

	fetch("http://localhost:4000/users", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			firstName,
			lastName,
			age,
		}),
	})
		.then((response) => response)
		.then((data) => console.log(data))
		.catch((error) => console.log(error));
}

async function handdleUpDateRequest(event) {
	event.preventDefault();

	const firstName = document.getElementById("firstName").value;
	const lastName = document.getElementById("lastName").value;
	const age = document.getElementById("age").value;
	const id = document.getElementById("userId").value;

	fetch(`http://localhost:4000/users/${id}`, {
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			firstName,
			lastName,
			age,
		}),
	})
		.then((response) => response)
		.then((data) => console.log(data))
		.catch((error) => console.log(error));
}
