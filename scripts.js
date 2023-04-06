let state = "idle";
let user = null;
let calculated = "1";

// Only allowed to change below

const logCalc = () => {
  const number = parseInt(calculated);
  const isNumber = typeof number === "number";
  const calculatedAsNumber = isNumber ? number : parseInt(calculated);
  calculated = calculatedAsNumber + 1;
};

const calcUser = () => {
  logCalc();
  if (calculated > 2) user = "John";
  if (calculated > 2) state = "requesting";
  if (calculated > 3) state = "idle";
};

const checkUser = () => {
  calcUser();
  if (user === "John" && state === "requesting") {
    console.log(`User: ${user} (${calculated})`);
  }
};

checkUser();

// Only allowed to change code above

checkUser();
calcUser();

checkUser();
calcUser();

checkUser();
calcUser();

checkUser();
calcUser();

checkUser();
calcUser();