function Vector2d(x, y) {
    this.x = x;
    this.y = y;
}

//Public Methods
Vector2d.prototype = {
    lengthSqrd: function () {
        return this.x*this.x + this.y * this.y;
    },
    length: function(){
        return Math.sqrt(this.lengthSqrd());
    },
    add: function (vec) {
        return new Vector2d(this.x + vec.x, this.y + vec.y);
    },
    subtract: function (vec) {
        return new Vector2d(this.x - vec.x, this.y - vec.y);
    }
}