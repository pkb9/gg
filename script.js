document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registration-form");

    form.addEventListener("submit", function (event) {
        // Client-side validation
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        if (!name || !email) {
            alert("Please fill all required fields.");
            event.preventDefault(); // Prevent form submission
        }
    });
});
