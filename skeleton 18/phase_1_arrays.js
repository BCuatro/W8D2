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