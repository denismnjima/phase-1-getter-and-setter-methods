// Add your Circle class here
class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    // Getter for diameter
    get diameter() {
      return this.radius * 2;
    }
  
    // Setter for diameter
    set diameter(d) {
      this.radius = d / 2;
    }
  
    // Getter for circumference
    get circumference() {
      return 2 * Math.PI * this.radius;
    }
  
    // Setter for circumference
    set circumference(c) {
      this.radius = c / (2 * Math.PI);
    }
  
    // Getter for area
    get area() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  
    // Setter for area
    set area(a) {
      this.radius = Math.sqrt(a / Math.PI);
    }
  }
  
  module.exports = Circle;
  