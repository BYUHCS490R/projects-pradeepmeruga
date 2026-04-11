document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("fanForm");
    const message = document.getElementById("successMessage");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const character = document.getElementById("character").value.trim();
            const arc = document.getElementById("arc").value;
            const comments = document.getElementById("comments").value.trim();

            if (!name || !email || !character || !arc) {
                alert("Please fill all required fields.");
                return;
            }

            const formData = {
                name: name,
                email: email,
                character: character,
                arc: arc,
                comments: comments
            };

            console.log(formData);

            const xhr = new XMLHttpRequest();
            xhr.open("GET", "submit.json", true);

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    alert("Form submitted successfully!");
                    const response = JSON.parse(xhr.responseText);
                    console.log(response);
                    form.reset();
                    message.innerText = response.message;
                } else if (xhr.readyState === 4) {
                    alert("Error submitting form.");
                }
            };

            xhr.send();
        });
    }
});