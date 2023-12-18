fetch("http://localhost:4000/users")
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		console.log(data);
	})
	.then((error) => console.log(error));
