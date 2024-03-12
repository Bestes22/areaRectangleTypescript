interface Rectangle {
  length: number;
  width: number;
}

class RectangleCalculator {
  static calculateArea(rectangle: Rectangle): number {
    return rectangle.length * rectangle.width;
  }

  static calculatePerimeter(rectangle: Rectangle): number {
    return 2 * (rectangle.length + rectangle.width);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const lengthInput = document.getElementById("lengthInputs") as HTMLInputElement;
  const widthInput = document.getElementById("widthInput") as HTMLInputElement;
  const calculateButton = document.getElementById("calculateButton");
  let resultDiv = document.getElementById("result");

  if (calculateButton) {
    calculateButton.addEventListener("click", function() {
      const length = parseFloat(lengthInput.value);
      const width = parseFloat(widthInput.value);

      if (resultDiv) {
        if (!isNaN(length) && !isNaN(width)) {
          const rectangle: Rectangle = { length, width };
          const area = RectangleCalculator.calculateArea(rectangle);
          const perimeter = RectangleCalculator.calculatePerimeter(rectangle);

          resultDiv.innerHTML = `
            <p>Area: ${area}</p>
            <p>Perimeter: ${perimeter}</p>
          `;
        } else {
          resultDiv.innerHTML = "<p>Please enter valid numbers for length and width.</p>";
        }
      }
    });
  }
});
