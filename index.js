'use strict';

Number.prototype.toFixedRound = function(ln, rn) {
    var n, l = 0;
    
    if(!ln) {
        ln = 0;
    }
    if(!rn) {
        rn = 0;
    }
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
