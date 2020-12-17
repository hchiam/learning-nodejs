const events = require("events");
const emitter = new events.EventEmitter();

console.log(
  'Enter some text and hit enter. To exit, type "exit" and hit enter.'
);

emitter.on("customEvent", (message, user) => {
  console.log(`${user}: ${message}`);
});

process.stdin.on("data", (data) => {
  const input = data.toString().trim();
  if (input === "exit") {
    emitter.emit("customEvent", "Goodbye!", "process");
    process.exit();
  }
  emitter.emit("customEvent", input, "terminal");
});
