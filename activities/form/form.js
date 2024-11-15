document.getElementById('myForm').addEventListener('submit',function(event){
    event.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const formData ={
        firstName: firstName,
        lastName: lastName,
        password: document.getElementById('password').value,
        state: document.getElementById('state').value
    };
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function (){
        if (xhr.readyState === 4 && xhr.status === 200) {
            message = JSON.parse(xhr.responseText)
            document.getElementById("message").innerHTML = response.message;
            document.getElementById("myForm").innerHTML = "";

        } else if (xhr.readyState === 4){
            alert('Error submitting form.');
        }
    };
    xhr.send(JSON.stringify(formData));
    console.log(formData)
    if (!firstName || !lastName) {
        alert("First name and last name required");
        return;
    }
    if (!age || age < 18) {
        alert('You must be 18 years or older to submit this form');
    }


})