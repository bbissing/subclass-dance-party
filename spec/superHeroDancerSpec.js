describe('superHeroDancer', function() {

  var superHeroDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    superHeroDancer = new SuperHeroDancer(0, 0, 0, 0, timeBetweenSteps);
    console.log(superHeroDancer)
  });

  it('should have a jQuery $node object', function() {
    expect(superHeroDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its count increased', function() {
    superHeroDancer.step();
    expect(superHeroDancer.count).to.equal(1);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(superHeroDancer, 'step');
      console.log(superHeroDancer.step.callCount)
      expect(superHeroDancer.step.callCount).to.be.equal(0);

      clock.tick(timeBetweenSteps);
      clock.tick(timeBetweenSteps);

      expect(superHeroDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(superHeroDancer.step.callCount).to.be.equal(2);
    });
  });
});
