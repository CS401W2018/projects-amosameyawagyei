document.getElementById('myForm').addEventListener('submit',function(event){
    event.preventDefault();
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const age = document.getElementById("age").value;
    

    if (!firstName || !lastName) {
        alert("First name and last name required");
        return;
    }
    if (!age || age < 18) {
        alert('You must be 18 years or older to submit this form');
        return;
    }

    const formData = {
        firstName: firstName,
        lastName: lastName,
        age: age
    }

    const xhr = new XMLHttpRequest();
            xhr.open("GET", "formprocessing.json", true);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    const response = JSON.parse(xhr.responseText);
                    document.getElementById("message").innerHTML = response.message;
                    document.getElementById("myForm").innerHTML = "";
                } else if (xhr.readyState === 4) {
                    alert('Error submitting form.');
                }
            };

            xhr.send(JSON.stringify(formData));
            console.log(formData)
        });