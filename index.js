function receivesAFunction (callback) {
    callback() ;
}

var fn = returnsANamedFunction;

function returnsANamedFunction ()  {
    return function namedfn() {
    console.log("it returns a function")
}
}

function returnsAnAnonymousFunction () {
//return function fn() {
    //return function name () {
       return () => console.log("return a function");
   // }
//}


}