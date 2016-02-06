function ObjectWithMethodOverloading() {
    this.functionArray = [];
}

ObjectWithMethodOverloading.prototype.overload = function (name, func, typeArray) {

    this.functionArray.push([func, typeArray, name]);

    this[name] = function () {
        
        for (var i = 0; i < this.functionArray.length; i++) {

            if(this.functionArray[i][2] == name && this.functionArray[i][0].length == arguments.length) {

                if(!this.functionArray[i][1]) {
                    return this.functionArray[i][0].apply(this,arguments);

                } else {

                    var argType = this.functionArray[i][1].every( (element, index) => {
                        return (typeof arguments[index] == typeof element());
                    });

                    if(argType) {
                        return this.functionArray[i][0].apply(this,arguments);
                    }
                }
            }
        }
    };
};