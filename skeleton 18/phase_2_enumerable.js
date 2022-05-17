Array.prototype.myEach = function (callback) {
   
    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }

}


Array.prototype.myMap = function(callback){
   let mapped =[];
   this.myEach(ele => {
    mapped.push(cb(ele))

   }); 
}