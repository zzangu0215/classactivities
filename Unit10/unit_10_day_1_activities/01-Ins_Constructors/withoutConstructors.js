// dogs and cats have the same interface (same properties/types) and this code
// is very repetitive. This code could be more DRY by using a constructor
// function.

const dogs = {
  raining: true,
  noise: "Woof!",
  makeNoise: function () {
    if (this.raining === true) {
      console.log(this.noise);
    }
  },
};

const cats = {
  raining: true,
  noise: "Meow!",
  makeNoise: function () {
    if (this.raining === true) {
      console.log(this.noise);
    }
  },
};

// Calling dogs and cats makeNoise methods
dogs.makeNoise();
cats.makeNoise();

// If we want, we can change an object's properties after they're created
// cats.raining = true;
// cats.makeNoise();

const massHysteria = () => {
  if (dogs.raining === true && cats.raining === true) {
    console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
  }
};

massHysteria();
