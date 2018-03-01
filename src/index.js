// PLEASE DON'T change function name
//var ost;
let result = [];
const coins = [50, 25, 10, 5, 1];
const coinsLetter = ["H", "Q", "D", "N", "P"];
let iteration = 0;
let arrResult = [];

module.exports =
function makeExchange(currency) {
  if (currency > 10000) {
    return {error: "You are rich, my friend! We don't have so much coins for exchange"}
  }
  arrResult = [];
  makeExch(currency);
  return arrResult;
}

function makeExch(currency) {
      if (currency === 0) {
        result = [];
        iteration = 0;
        return;
      } else {
        let currentCoin = coins[iteration];
        let countOfCurrentCoin = Math.floor(currency / currentCoin);
        result[iteration] = countOfCurrentCoin;

        if(countOfCurrentCoin > 0) {
          arrResult[coinsLetter[iteration]] = result[iteration];
        }

        iteration++;
        return makeExch(currency % currentCoin);
      }
}
