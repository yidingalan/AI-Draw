// jscs:disable
class DNA {

  constructor() {
    this.gene = [];
    this.fitness = 0.01;
    this.length = 7*100;

    for (var i = 0; i < this.length; i++) {
      //order:
      // R G B alpha x y radius

      // for RGB Values
      if (i%7 == 0 || i%7 == 1 || i%7 == 2 ) {
        this.gene[i] = Math.floor(Math.random() * (256));
      } else if (i%7 == 3) {
        // alpha value
        this.gene[i] = Math.random();
      } else  if (i%7 == 4){
        // x values: 0 - 300
        this.gene[i] = Math.floor(Math.random() * (300))+1;
      } else if (i%7 == 5){
        // y value: 300-600
        this.gene[i] = Math.floor(Math.random() * (300))+300;
      } else{
        // radius
        this.gene[i] = Math.floor(Math.random() * (150));
      }
    }

  }

  calcFitness(width, height) {
    loadPixels();
    var d = pixelDensity();
    for (var i = 0; i < width*height*d*d*2; i+=4) {
      //get delta per color
      var deltaRed = pixels[i] - pixels[i+width*height*d*d*2];
      var deltaGreen = pixels[i+1] - pixels[i+1+width*height*d*d*2];
      var deltaBlue = pixels[i+2] - pixels[i+2+width*height*d*d*2];

      // measure the distance between the colors in 3D space
      var pixelFitness = deltaRed * deltaRed +
                         deltaGreen * deltaGreen +
                         deltaBlue * deltaBlue;

    //  console.log("pixel fitness: "+ pixelFitness);
      //add the pixel fitness to the total fitness ( lower is better )
      this.fitness += pixelFitness;
    }
    // debugger;
    // console.log("before: " + this.fitness);
    this.fitness = 1/this.fitness;
    // console.log( "after: "+ this.fitness);
  }

  crossover(partner) {
    var child = this;
    for (var i = 0; i < this.length/2; i++) {
      child.gene[i] = partner.gene[i];
    }
    return child;
  }

  mutate(mutation_rate){

    for (var i = 0; i < this.gene.length; i++){

      if (random(1) < mutation_rate){
        // for RGB Values
        if (i%7 == 0 || i%7 == 1 || i%7 == 2 ) {
          this.gene[i] = Math.floor(Math.random() * (256));
        } else if (i%7 == 3) {
          // alpha value
          this.gene[i] = Math.random();
        } else  if (i%7 == 4){
          // x values: 0 - 300
          this.gene[i] = Math.floor(Math.random() * (300))+1;
        } else if (i%7 == 5){
          // y value: 300-600
          this.gene[i] = Math.floor(Math.random() * (300))+300;
        } else{
          // radius
          this.gene[i] = Math.floor(Math.random() * (150));
        }
      }

    }
  }


}