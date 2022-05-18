Array.prototype.uniq =function() {
    const newArr =[];
    
    this.forEach(el => {
        if (!newArr.includes(el)) {
            newArr.push(el);
        }
    });
    
    return newArr;
}

Array.prototype.two_sum =function() {
    const newArr= [];
    this.forEach(el => {
        if (this.includes(el* -1)) {
            newArr.push([this.indexOf(el),this.indexOf(el* -1)]);
            
        }
    });
    return newArr
}

Array.prototype.myReduce = function (callback, acc) {
    let i;

    if (acc === undefined) {
        acc = this[0];
        i = 1
    } 
    else {
        i = 0
    }
    
    this.slice(i, this.length).myEach(function (ele) {
        
        acc = callback(acc, ele)
    });

    return acc;
}