'use strict';

Number.prototype.toFixedRound = function(ln = 0, rn = 0) {
    var n = 0,
        l = 0;
    n = parseFloat(this);
    if (Math.floor(this.valueOf()) == this.valueOf()) {
        l = 0;
    } else {
        l = this.toString().split(".")[1].length || 0;
    }
    if (ln > 0 && (l > ln || (rn && l < ln))) {
        n = n + (1 / Math.pow(10, ln));
    }
    if (rn && ln > 0) {
        return parseFloat(n.toFixed(ln));
    } else {
        return n.toFixed(ln);
    }
};
