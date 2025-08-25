const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");

  if (height < 0 || isNaN(height)) {
    result.innerHTML = `<span>Invalid height ${height} !</span>`;
  } else if (weight < 0 || isNaN(weight)) {
    result.innerHTML = `<span>Invalid weight ${weight} !</span>`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    let category;
    if (bmi < 18.6) {
      category = "Under Weight";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      category = "Normal Weight";
    } else {
      category = "Over Weight";
    }
    result.innerHTML = `<span> Your BMI is: ${bmi} </span> <br>
    And you are ${category}`;
  }
});
