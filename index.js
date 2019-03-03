function produceDrivingRange (blockRange) {
  return function (Num1, Num2){
    let total = parseInt(Num2,10) - parseInt(Num1,10);
    if (total < Number(blockRange)) {
     return `within range by ${blockRange - total}`;
    }
    else {
      return `${total - blockRange} blocks out of range`;
    }
  }

}

function produceTipCalculator(tipRate) {
  return function (mealPrice){
    return mealPrice * tipRate;
  }
}

function createDriver (){
  let DriverId = 0;
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++DriverId;
    }
  }
}
