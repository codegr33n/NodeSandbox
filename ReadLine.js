// Read user input
const rl = require("readline");
const getInput = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

getInput.question("What is your name?: ", (ans) => {
  console.log("Welcome back " + ans);
  //close the interface afterwards
  getInput.close();
});

// listen for the close event
getInput.on("close", () => {
  console.log("Sad to see you leave 👋");
  process.exit(0);
});
