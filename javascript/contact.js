document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
        alert("Please fill in all fields before submitting.");
        return;
    }

    fetch(this.action, {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: new FormData(this)
    })
    .then(response => {
        if (response.ok) {
            this.reset();
            alert("Message sent!");
        } else {
            alert("Something went wrong. Please try again.");
        }
    })
    .catch(() => alert("Something went wrong. Please try again."));
});