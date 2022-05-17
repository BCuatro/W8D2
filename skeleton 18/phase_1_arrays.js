Array.prototype.uniq =function() {
    const newArr =[];
    debugger
    
    this.forEach(el => {
        if (!newArr.includes(el)) {
            newArr.push(el);
        }
    });
    
    return newArr;
}
console.log([1,2,1].uniq())