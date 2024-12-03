document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();


    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        middleName: document.getElementById('middleName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        comments: document.getElementById('comments').value,
    };


    if (!formData.firstName || !formData.lastName) {
        alert("First name and last name are required.");
        return;
    }

   
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "contact.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                document.getElementById("message").textContent = response.message || "Form submitted successfully!";
                document.getElementById("myForm").reset();
            } else {
                alert("Error submitting the form. Please try again.");
            }
        }
    };

    xhr.send(JSON.stringify(formData));
    console.log(formData)
});
