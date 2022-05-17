Array.prototype.myEach = function (callback) {
    let i = 0;
    while (i < this.length) {
        callback(this[i])
        i++;
    }

}
