function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() {
	return `(${this.x}, ${this.y})`;
}

function Side(side) {
  this.length = side;

}

function Shape() {}
Shape.prototype.addToPlane = function(x,y) {this.position = new Point(x, y) };
Shape.prototype.move = function(x,y) {this.position = new Point(x, y) };

function Circle(radius) {
  Shape.call(this);
  this.radius = radius;
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.diameter = function() {return this.radius * 2;};
Circle.prototype.area = function() {return Math.PI * this.radius ** 2;};
Circle.prototype.circumference = function() {return 2 * this.radius * Math.PI;};

function Polygon() {
  Shape.call(this);
  this.args = arguments;
}
Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;
Polygon.prototype.perimeter = function() {
  var args = Array.prototype.slice.call(this.args[0]);
   return args.reduce((sum, arg) => {
   return  sum += arg.length;
  }, 0);
};
Polygon.prototype.numberOfSides = function() {
  var args = Array.prototype.slice.call(this.args[0]);
  return args.length;
};

function Quadrilateral(sideOneLength, sideTwoLength, sideThreeLength, sideFourLength) {
  Polygon.call(this, [new Side(sideOneLength), new Side(sideTwoLength), new Side(sideThreeLength), new Side(sideFourLength)]);
}
Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;

function Rectangle(width, height) {
  Quadrilateral.call(this,width, height, width, height);
  this.width = width;
  this.height = height;
}
Rectangle.prototype  = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Quadrilateral;
Rectangle.prototype.area = function() {return this.width * this.height};

function Square(sideLength) {
  Rectangle.call(this, sideLength, sideLength, sideLength, sideLength);
  // this
}
Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;
Square.prototype.listProperties = function() {
  var props = '';
  for (let prop in this) {
    if(this.hasOwnProperty(prop)) {
      props += prop;
    }
  }
  return props;
};

function Triangle(sideOneLength, sideTwoLength, sideThreeLength,) {
    Polygon.call(this, [new Side(sideOneLength), new Side(sideTwoLength), new Side(sideThreeLength)]);
}
Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle;