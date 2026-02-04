let form = document.querySelector("form");
let eventTitle = document.getElementById("event-title");
let eventDate = document.getElementById("event-date");
let eventCategory = document.getElementById("event-category");
let eventDescription = document.getElementById("event-description");
let clearbtn = document.getElementById("clear-btn");
let addSample = document.getElementById("add-sample-btn");
let eventHandlingContainer = document.getElementById("event-handling-container");

function createEvent(event) {
    event.preventDefault();

    if (
        eventTitle.value === "" ||
        eventDate.value === "" ||
        eventCategory.value === "" ||
        eventDescription.value === ""
    ) {
        alert("Please fill all the details");
        return;
    }

    if (eventHandlingContainer.textContent.trim() === "No events yet. Add your first event!") {
        removeHandler();
    }

    let card = document.createElement("div");
    card.innerHTML = `
        <button class="delete-btn">X</button>
        <h4>${eventTitle.value}</h4>
        <span>📅 ${eventDate.value}</span><br>
        <span>🏷️ ${eventCategory.value}</span><br>
        <p>${eventDescription.value}</p>
    `;

    eventHandlingContainer.append(card);
    form.reset();
}

form.addEventListener("submit", createEvent);

clearbtn.addEventListener("click", function () {
    eventHandlingContainer.textContent = "No events yet. Add your first event!";
});

eventHandlingContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete-btn")) {
        e.target.parentElement.remove();

        if (eventHandlingContainer.textContent.trim() === "") {
            eventHandlingContainer.textContent = "No events yet. Add your first event!";
        }
    }
});

addSample.addEventListener("click", function () {
    if (eventHandlingContainer.textContent.trim() === "No events yet. Add your first event!") {
        removeHandler();
    }

    let card = document.createElement("div");
    card.innerHTML = `
        <button class="delete-btn">X</button>
        <h4>JS Workshop</h4>
        <span>📅 2024-05-15</span><br>
        <span>🏷️ workshop</span><br>
        <p>Learn Javascript in this workshop based on fundamentals</p>
    `;
    eventHandlingContainer.append(card);

    card = document.createElement("div");
    card.innerHTML = `
        <button class="delete-btn">X</button>
        <h4>C++ APP Development</h4>
        <span>📅 2025-02-19</span><br>
        <span>🏷️ workshop</span><br>
        <p>Learn C++ in this workshop based on fundamentals</p>
    `;
    eventHandlingContainer.append(card);

    form.reset();
});

function removeHandler() {
    eventHandlingContainer.textContent = "";
}

// Key demo
let keyBox = document.getElementById("key-box");

document.addEventListener("keydown", function (e) {
    if (eventTitle.value === "") {
        keyBox.textContent = "Press any key to see the magic!";
        return;
    }
    keyBox.textContent = "Key pressed: " + e.key;
});