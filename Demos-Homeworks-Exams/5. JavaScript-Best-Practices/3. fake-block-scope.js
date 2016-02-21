//Both printMsg and count are declared
//var messageInIf, printMsg;

if (false) {
  var messageInIf ='Message in Function';
  function printMsg(message) {
    console.log("Message: " + message + "!");
  }
}

// messageInIf has no value, because the execution flow cannot reach the initialization in If
console.log(messageInIf);
printMsg(messageInIf); // Message: undefined!