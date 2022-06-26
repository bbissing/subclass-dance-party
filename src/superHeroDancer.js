var SuperHeroDancer = function(top, left, timeBetweenSteps) {
  // console.log('arguments: ', top, left, timeBetweenSteps);
  Dancer.call(this, 0, 0, timeBetweenSteps);
  // this.top = 0;
  // this.left = 0;
  // this.right = 0;
  // this.bottom = 0;
  this.count = 0;
}

SuperHeroDancer.prototype = Object.create(Dancer.prototype);
SuperHeroDancer.prototype.constructor = SuperHeroDancer;

SuperHeroDancer.prototype.setPosition = function(obj) {
  // console.log(this)
  if (typeof obj !== 'number') {
  // console.log('obj: ', obj)
    var styleSettings = {
      top: obj.top,
      left: obj.left,
    };

    // console.log('this in setPosition', this) // Super
    //console.log('style settings ', styleSettings)
    // console.log(this.$node);
    this.$node.css(styleSettings);
  }
};

SuperHeroDancer.prototype.step = function() {
  console.log('this in step: ', this)
  Dancer.prototype.step.call(this);
  if (this.count === 0) {
    var pos = {top: '0%', left: '0%'};
    SuperHeroDancer.prototype.setPosition.call(this, pos);
    this.count++;
  } else if (this.count === 1) {
    var pos = {top: '0%', left: '75%'};
    SuperHeroDancer.prototype.setPosition.call(this, pos);
    this.count++;
  } else if (this.count === 2) {
    var pos = {top: '95%', left: '75%'};
    SuperHeroDancer.prototype.setPosition.call(this, pos);
    this.count++;
  } else if (this.count === 3) {
    var pos = {top: '95%', left: '0%'};
    SuperHeroDancer.prototype.setPosition.call(this, pos);
    this.count = 0;
  }
};




