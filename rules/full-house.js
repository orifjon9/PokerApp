var consts = require('../helpers/const-arrays'),
    ValidationModule = require('../helpers/validations'),
    CountSameValue = require('../helpers/count-values'),
    CompareSameValueByTwoQuantity = require('./compare-same-value-by-two-quantity');

module.exports = (player1Arr, player2Arr) => {
    return CompareSameValueByTwoQuantity(player1Arr, player2Arr, 3, 2);

    /*const req1Count = 3;
    const req2Count = 2;
    var player1CountSameValue = CountSameValue(player1Arr);
    var player2CountSameValue = CountSameValue(player2Arr);

    // validation for both player have same value each by 4
    if (player1CountSameValue.first.count === req1Count && player1CountSameValue.second.count === req2Count &&
        player2CountSameValue.first.count === req1Count && player2CountSameValue.second.count === req2Count) {
        return consts.valueSeq.findIndex(f => f === player1CountSameValue.first.suit) >
            consts.valueSeq.findIndex(f => f === player2CountSameValue.first.suit) ? 1 : 2;
    }
    if (player1CountSameValue.first.count === req1Count && player1CountSameValue.second.count === req2Count) {
        return 1;
    }
    if (player2CountSameValue.first.count === req1Count && player2CountSameValue.second.count === req2Count) {
        return 2;
    }
    return undefined;*/
}