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

async function handdleUpDateRequest() {
	const firstName = document.getElementById("firstName").value;
	console.log("First Name: ", firstName);
	const lastName = document.getElementById("lastName").value;
	console.log("Last Name: ", lastName);
	const age = document.getElementById("age").value;
	console.log("Age: ", age);
	const editId = document.getElementById("userId").value;
	console.log("User ID: ", editId);

	console.log("About to fetch data...");
	fetch(`http://localhost:4000/users/${editId}`, {
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			firstName,
			lastName,
			age,
		}),
	})
		.then((response) => {
			console.log("Response: ", response);
			return response;
		})
		.then((data) => {
			console.log("Data: ", data);
			return console.log(data);
		})
		.catch((error) => {
			console.log("Error: ", error);
			return console.log(error);
		});
	console.log("Fetch completed");
}
