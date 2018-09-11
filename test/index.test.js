const {
  getStaticBuilding,
  getBuilding,
  getHeight,
  getCar,
  getLimitedCar,
  getAnimalNoise,
  teaBagsLeft,
  convertBookArrayToMap,
  dogCount,
  dogNames,
  fruitMarket,
  averageFruitPerBox,
  calculateOrderPrice,
  calculateOrderPriceWithType
} = require('../src');

test('Get static building', () => {
  const output = getStaticBuilding();

  expect(output).toEqual({
    numberOfFloors: 5,
    numberOfWindows: 8
  });
});

test('Get building', () => {
  const output = getBuilding(3, 4);

  expect(output).toEqual({
    numberOfFloors: 3,
    numberOfWindows: 4
  });
});

test('get height', () => {
  const mountains = {
    everest: 8848,
    k2: 8611,
    lhotse: 8586
  };

  const output = getHeight(mountains, 'lhotse');

  expect(output).toEqual(8586);
});

test('Get car', () => {
  const car = getCar();

  expect(car.speed).toEqual( 0 );

  car.faster();
  car.faster();
  expect(car.speed).toEqual( 20 );

  car.slower();
  expect(car.speed).toEqual( 10 );
});

test('Get limited car', () => {
  const car = getLimitedCar(15);

  expect(car.speed).toEqual( 0 );

  car.faster();
  car.faster();
  expect(car.speed).toEqual( 15 );

  car.slower();
  expect(car.speed).toEqual( 5 );

  car.slower();
  expect(car.speed).toEqual( 0 );
});

test('get animal noise', () => {

  const farm = {
    sheep(){
      return 'Baa';
    },
    cow(){
      return 'Moo';
    },
    dog(){
      return 'Woof'
    }
  }
  const noise = getAnimalNoise(farm, 'cow');

  expect(noise).toEqual( 'Moo' );
});

test('get animal noise - 2', () => {

  const farm = {
    sheep(){
      return 'Baa';
    },
    cow(){
      return 'Moo';
    },
    dog(){
      return 'Woof'
    }
  }
  const noise = getAnimalNoise(farm, 'chicken');

  expect(noise).toEqual( 'No such animal here' );
});

test('tea bags', () => {

  const teaBags = {
    'earlGrey': 12,
    'rooibos': 23,
    'matcha': 8,
    'englishBreakfast': 17
  };
  const output = teaBagsLeft(teaBags);

  expect(output).toEqual( 60 );
});

test('Convert array to map', () => {
  const books = [{
      id:1,
      author: "Alexander Dumas",
      title: "The count of Monte Christo",
      year: 1884
  }, {
      id: 2,
      author: "Douglas Crockford",
      title: "JavaScript: The Good Parts",
      year: 2008
  }, {
      id: 3,
      author: "JK Rowling",
      title: "Harry Potter and the Philosopher's Stone",
      year: 1997
  }, {
      id:4,
      author: "Arthur Conan Doyle",
      title: "The Adventures of Sherlock Holmes",
      year: 1892
  }]

  const output = convertBookArrayToMap(books);

  expect(output).toEqual({
    1: {
        id:1,
        author: "Alexander Dumas",
        title: "The count of Monte Christo",
        year: 1884
    },
    2: {
        id: 2,
        author: "Douglas Crockford",
        title: "JavaScript: The Good Parts",
        year: 2008
    },
    3: {
        id: 3,
        author: "JK Rowling",
        title: "Harry Potter and the Philosopher's Stone",
        year: 1997
    },
    4: {
        id:4,
        author: "Arthur Conan Doyle",
        title: "The Adventures of Sherlock Holmes",
        year: 1892
    }
  })
});

test('dog count', () => {
  const dogs = [
    {
        name: 'ruby',
        location: 'liverpool'
    },
    {
        name: 'max',
        location: 'manchester'
    },
    {
        name: 'woofie',
        location: 'liverpool'
    },
    {
        name: 'snoopy',
        location: 'leeds'
    },
    {
        name: 'wellard',
        location: 'manchester'
    }
  ];

  const output = dogCount(dogs);

  expect(output).toEqual({
    liverpool: 2,
    manchester: 2,
    leeds: 1
  })
});

test('dog names', () => {
  const dogs = [
    {
        name: 'ruby',
        location: 'liverpool'
    },
    {
        name: 'max',
        location: 'manchester'
    },
    {
        name: 'woofie',
        location: 'liverpool'
    },
    {
        name: 'snoopy',
        location: 'leeds'
    },
    {
        name: 'wellard',
        location: 'manchester'
    }
  ];

  const output = dogNames(dogs);

  expect(output).toEqual({
    liverpool: ['ruby', 'woofie'],
    manchester: ['max', 'wellard'],
    leeds: ['snoopy']
  })
});

test('fruit market', () => {
  const boxes = [
    {
        contents: 'apples',
        number: 10
    },
    {
        contents: 'oranges',
        number: 8
    },
    {
        contents: 'apples',
        number: 26
    },
    {
        contents: 'pears',
        number: 3
    },
    {
        contents: 'oranges',
        number: 22
    }
  ];

  const output = fruitMarket(boxes);
  expect(output).toEqual({
    apples: 36,
    oranges: 30,
    pears: 3
  });
});

test('averageFruitPerBox', () => {
  const boxes = [
    {
        contents: 'apples',
        number: 10
    },
    {
        contents: 'oranges',
        number: 8
    },
    {
        contents: 'apples',
        number: 26
    },
    {
        contents: 'pears',
        number: 3
    },
    {
        contents: 'oranges',
        number: 22
    }
  ];

  const output = averageFruitPerBox(boxes);
  expect(output).toEqual({
    apples: 18,
    oranges: 15,
    pears: 3
  });
});

test('calculate order price', () => {
  const menu = {
    hotdog: 8,
    burger: 10,
    fries: 3,
    cheeseCake: 5,
    macNCheese: 4
  };

  const order = {
    burger: 2,
    fries: 3
  };

  const output = calculateOrderPrice(menu, order);
  expect(output).toEqual(29);
});

test.only('calculate order price with type - eat in', () => {
  const menu = {
    hotdog: 8,
    burger: 10,
    fries: 3,
    cheeseCake: 5,
    macNCheese: 4
  };

  const order = {
    burger: 2,
    cheeseCake: 4
  };

  const output = calculateOrderPriceWithType(menu, order, 'eatIn');
  expect(output).toEqual(44);
});

test.only('calculate order price with type - take away', () => {
  const menu = {
    hotdog: 8,
    burger: 10,
    fries: 3,
    cheeseCake: 5,
    macNCheese: 4
  };

  const order = {
    hotdog: 3,
    macNCheese: 4
  };

  const output = calculateOrderPriceWithType(menu, order, 'takeAway');
  expect(output).toEqual(45);
});
