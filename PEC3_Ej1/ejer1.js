let dog;

dog = {
  kind: "mammal",
  weight: 10
};

console.log (dog)
dog = {
  kind: true,
  weight: 10
};

console.log (dog)


function baby(dog1, dog2) {
  return {
    kind: dog1.kind,
    weight: (dog1.weight + dog2.weight) / 4
  };
}
