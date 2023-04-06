let state = "idle";
let user = null;
let calculated = "1";

// Only allowed to change below

const logCalc1 = () => {
  const number = parseInt(calculated);
  calculated = number;
  return ++calculated;
};

const calcUser1 = () => {
  logCalc1();
  if (calculated > 1) user = "John";
  if (calculated > 1) state = "requesting";
  if (calculated == 1) state = "idle";
  return ++calculated;
};

const checkUser1 = () => {
  calcUser1();
  if (user === "John" && state === "requesting") {
    console.log(`User: ${user} (${calculated})`);
  }
};

checkUser1();