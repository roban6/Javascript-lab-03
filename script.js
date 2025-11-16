// ToyCar constructor with 13 properties
function ToyCar(model, brand, scale, color, material, wheels, doors, engineType, price, releaseYear, weight, length, description) {
  this.model = model;
  this.brand = brand;
  this.scale = scale;
  this.color = color;
  this.material = material;
  this.wheels = wheels;
  this.doors = doors;
  this.engineType = engineType;
  this.price = price;
  this.releaseYear = releaseYear;
  this.weight = weight;
  this.length = length;
  this.description = description;
}

// Event listener for button
document.getElementById("createBtn").addEventListener("click", createCar);

function createCar() {
  // Create a new ToyCar instance
  const car = new ToyCar(
    "Aventador", "Kinsmart", "1:36", "Orange",
    "Metal", 4, 2, "V12", 25, 2021,
    "150g", "12cm", "Miniature replica of Lamborghini Aventador"
  );

  // Display the car details
  document.getElementById("output").innerHTML = `
    <div class="car-card">
      <h2>${car.model} (${car.brand})</h2>
      <p><strong>Scale:</strong> ${car.scale}</p>
      <p><strong>Color:</strong> ${car.color}</p>
      <p><strong>Material:</strong> ${car.material}</p>
      <p><strong>Wheels:</strong> ${car.wheels}</p>
      <p><strong>Doors:</strong> ${car.doors}</p>
      <p><strong>Engine:</strong> ${car.engineType}</p>
      <p><strong>Price:</strong> $${car.price}</p>
      <p><strong>Release Year:</strong> ${car.releaseYear}</p>
      <p><strong>Weight:</strong> ${car.weight}</p>
      <p><strong>Length:</strong> ${car.length}</p>
      <p><strong>Description:</strong> ${car.description}</p>
    </div>
  `;
}
