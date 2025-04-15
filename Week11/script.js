function recommendSize() {
  let height = document.getElementById("height").value;
  let weight = document.getElementById("weight").value;

  height = Number(height);
  weight = Number(weight);
  let size = "";
  if (height < 62 && weight < 110) {
    size = "S";
  } else if (height >= 62 && height <= 68 && weight >= 110 && weight <= 150) {
    size = "M";
  } else if (height > 68 && height <= 73 && weight > 150 && weight <= 180) {
    size = "L";
  } else {
    size = "XL";
  }
  document.getElementById(
    "result"
  ).innerHTML = `Based on your height and weight, we recommend size: <strong>${size}</strong>`;
}
