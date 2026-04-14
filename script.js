document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let error = document.getElementById("error");

    if (name === "" || email === "") {
        error.textContent = "All fields are required!";
        return;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        error.textContent = "Enter a valid email address!";
        return;
    }

    error.textContent = "Form submitted successfully!";
    error.style.color = "green";
});

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value;

    if (taskText === "") return;

    let li = document.createElement("li");
    li.textContent = taskText;

    li.onclick = function () {
        li.remove();
    };

    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}