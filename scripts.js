let state = "idle";
let user = null;
let calculated = "1";

// Only allowed to change below

const logCalc = () => {
  const number = parseInt(calculated);
  calculated = number
  return ++ calculated
};

const calcUser = () => {
  logCalc();
  if (calculated > 1) user = "John";
  if (calculated > 1) state = "requesting";
  if (calculated > 3) state = "idle";
  return calculated ++ 
};

const checkUser = () => {
  calcUser();
  if (user === "John" && state === "requesting") {
    console.log(`User: ${user} (${calculated})`);
  }
};


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