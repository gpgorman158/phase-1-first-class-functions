function receivesAFunction (arguement){
    console.log(arguement())
}
receivesAFunction(function (){ return "something"})

function receivesAFunction(call){
    call();
}



function returnsANamedFunction() {
    return liftWeights;
  }

function liftWeights() {
    console.log("Pump iron");
  }

function returnsAnAnonymousFunction () {
    return function (){};
}
