function calculate(a, b, operator) {
    switch (operator) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        if (b === 0) {
          console.error("Pembagian dengan 0 tidak diizinkan!");
          return NaN;
        }
        return a / b;
      default:
        console.error("Operator tidak valid!");
        return NaN;
    }
  }
  
  let a, b, operator;
  
  while (true) {
    a = parseFloat(prompt("Masukkan angka pertama: "));
    b = parseFloat(prompt("Masukkan angka kedua: "));
    operator = prompt("Masukkan operator (+, -, *, /): ");
  
    const result = calculate(a, b, operator);
    console.log(`Hasil: ${a} ${operator} ${b} = ${result}`);
  
    const continueCalculation = confirm("Lanjutkan menghitung?");
    if (!continueCalculation) {
      break;
    }
  }
  
  console.log("Selesai!");
  