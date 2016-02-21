var module =(function(){
    var name="Elena";
    var outerArg=arguments;
    function printMessage(message){
        console.log(name);
        console.log(outerArg);
        console.log(arguments);
    }
    // mnogo e vajno tuka da ne podam return printMessage();
    return printMessage;
})("Outer arguments", 22);

module("Inner arguments", 3, 4);