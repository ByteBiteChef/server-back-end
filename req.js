async function handdleGetRequest(event) {
	event.preventDefault();

	const myId = document.getElementById("myId").value;
	console.log(myId);

	fetch(`http://localhost:4000/users/${myId}`)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			console.log(data);
			let firstName = data.firstName;
			let lastName = data.lastName;
			let age = data.age;

			document.getElementById("displayUserArea").innerHTML =
				"Name:" + firstName + " " +"Last Name:" + lastName + " " + "Age:" + age;
		})
		.catch((error) => console.log(error));
}

async function handdlePostRequest(event) {
	event.preventDefault();

	const firstName = document.getElementById("firstName").value;
	const lastName = document.getElementById("lastName").value;
	const age = document.getElementById("age").value;
	const id = document.getElementById("userId").value;
	fetch("http://localhost:4000/users", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			firstName,
			lastName,
			age,
			id,
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
	const editId = document.getElementById("userId").value;

	fetch(`http://localhost:4000/users/${editId}`, {
		method: "PATCH",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			firstName,
			lastName,
			age,
		}),
	})
		.then((response) => {
			return response;
		})
		.then((data) => {
			return console.log(data);
		})
		.catch((error) => {
			return console.log(error);
		});
}

async function deleteRequest(event) {
	event.preventDefault();

	const firstName = document.getElementById("firstName").value;
	const lastName = document.getElementById("lastName").value;
	const age = document.getElementById("age").value;
	const editId = document.getElementById("userId").value;

	fetch(`http://localhost:4000/users/${editId}`, {
		method: "DELETE",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			firstName,
			lastName,
			age,
		}),
	})
		.then((response) => {
			return response;
		})
		.then((data) => {
			return console.log(data);
		})
		.catch((error) => {
			return console.log(error);
		});
}
