function Vector2d(x, y) {
    this.x = x;
    this.y = y;
}

//Public Methods
Vector2d.prototype = {
    add: function (vec) {
        return new Vector2d(this.x + vec.x, this.y + vec.y);
    }
}