function showQuestions() {
    const disease = document.getElementById("disease").value;
    const div = document.getElementById("healthQuestions");

    div.innerHTML = "";

    if (disease === "diabetes") {
        div.innerHTML = `
            <h3>Diabetes Details</h3>
            <label>Diabetes Type:</label><br>
            <select id="type">
                <option>Type 1</option>
                <option>Type 2</option>
            </select><br><br>

            <label>Low sugar diet?</label><br>
            <select id="sugar">
                <option>Yes</option>
                <option>No</option>
            </select>
        `;
    }

    else if (disease === "bp") {
        div.innerHTML = `
            <h3>Blood Pressure Details</h3>
            <label>BP Level:</label><br>
            <select id="bpType">
                <option>High BP</option>
                <option>Low BP</option>
            </select><br><br>

            <label>Low salt food?</label><br>
            <select id="salt">
                <option>Yes</option>
                <option>No</option>
            </select>
        `;
    }

    else if (disease === "pcos") {
        div.innerHTML = `
            <h3>PCOS Details</h3>
            <label>Weight Goal:</label><br>
            <select id="weight">
                <option>Weight Loss</option>
                <option>Maintain Weight</option>
            </select><br><br>

            <label>Food Preference:</label><br>
            <select id="food">
                <option>Vegetarian</option>
                <option>Non-Vegetarian</option>
            </select>
        `;
    }

    else if (disease === "heart") {
        div.innerHTML = `
            <h3>Heart Health Details</h3>
            <label>Low oil food?</label><br>
            <select id="oil">
                <option>Yes</option>
                <option>No</option>
            </select><br><br>

            <label>Physical Activity Level:</label><br>
            <select id="activity">
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
            </select>
        `;
    }

    else {
        div.innerHTML = `<p>Please select a disease.</p>`;
    }
}

// Save data and move to ingredients page
function goToIngredients() {
    const disease = document.getElementById("disease").value;
    localStorage.setItem("disease", disease);
    window.location.href = "ingredients.html";
}
