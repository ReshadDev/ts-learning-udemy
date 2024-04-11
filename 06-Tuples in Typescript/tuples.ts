const drink = {
  color: 'blue',
  carbonated: true,
  sugar: 40,
};

// Tuple - arraya benzerdir, ama burada orderi ozumuz veririk ki sira pozulmasin
// const pepsi: [string, boolean, number] = ['brown', true, 40];
// burada gelib 0 ci indekse reqem teyin etsek error verecek, cunki biz 0 ci indeksi string olaraq teyin etmisik - pepsi[0] = 40;

// Type alias
type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', false, 0];

const carSpecs: [number, number] = [400, 3343];

const carStats = {
  horsepower: 400,
  weight: 3343,
};
