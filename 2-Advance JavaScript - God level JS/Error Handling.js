
// Error Handling

// try catch

function divide(a, b) {
if (b == 0) {
error
}

  try {
    if (b == 0) {
      throw Error("koi gadbar huyi");
    }
    console.log(a / b);
  } catch (e) {
    console.log(e);
  }
}

const res1 = divide(10, 0);
const res2 = divide(10, 2);

console.log(res1);