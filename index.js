const wasm = require("./add.c");
wasm.init().then(function(mod) {
    console.log(`fib(12)=${mod.exports.fib(12)}`);
});