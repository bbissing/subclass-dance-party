var BatmanDancer = function(top, left, timeBetweenSteps) {
  SuperHeroDancer.call(this, 0, 0, timeBetweenSteps);
  this.addImage(this.$node);
  this.className = 'batman';
};

BatmanDancer.prototype = Object.create(SuperHeroDancer.prototype);
BatmanDancer.prototype.constructor = BatmanDancer;

BatmanDancer.prototype.addImage = function(node) {
  node[0].className = 'batman';
};
