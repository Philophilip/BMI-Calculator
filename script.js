function calculateBMI() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let bmi = weight / ((height / 100) ** 2);

    let cat = "";

    if (weight == "" && height == "") {
        alert("Enter both values!");
        return;
    }
    if (bmi < 18.5) {
        cat = "Underweight";
    } else if (bmi < 25) {
        cat = "Normal";
    } else if (bmi < 30) {
        cat = "Overweight";
    } else {
        cat = "Obese";
    }

    document.getElementById("result").innerText = "BMI: " + bmi.toFixed(2);
    document.getElementById("category").innerText = "Category: " + cat;
}



function reset() {
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";

    document.getElementById("result").innerText = "";
    document.getElementById("category").innerText = "";
}