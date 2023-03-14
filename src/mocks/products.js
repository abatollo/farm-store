const products = [
  {
    id: "chicken-thigh-fillet",
    name: "Филе бедра цыпленка",
    image: "chicken-thigh-fillet",
    imageDescription: "Филе бедра цыпленка",
    description: {
      text: "Филе бедра без кожи и кости. Птица содержится в свободных птичниках, выращивается на натуральных зерновых кормах, что влияет положительно на вкус мяса. Филейная часть бедра обладает насыщенным вкусом и мясным ароматом.",
      price: 400,
      weight: 700
    },
    specifications: {
      weight: 700,
      weightRangeFrom: 595,
      weightRangeTo: 805,
      shelfLife: 6,
      specimen: "КОББ 500",
      placeOfOrigin: "Тверская область"
    },
    properties: {
      energyValue: 135,
      nutritionalValue: {
        protein: 13.8,
        fats: 8.7,
        carbohydrates: 0
      }
    }
  },
  {
    // https://esh-derevenskoe.ru/#!goods/file-bedra-gusja-s-k-karpachcho-100-g-ot-stanislava-tipikina
    id: "goose-thigh-fillet",
    name: "Филе бедра гуся",
    image: "goose-thigh-fillet",
    imageDescription: "Филе бедра гуся",
    description: {
      text: "Филе бедра гуся - это тонко нарезанный продукт, который понравится всем любителям сырокопченых продуктов. Необычный вкус, аппетитный аромат и тонкое послевкусия отличает сырокопченого гуся от других подобных продуктов.",
      price: 279,
      weight: 85
    },
    specifications: {
      weight: 100,
      weightRangeFrom: 595,
      weightRangeTo: 805,
      shelfLife: 30,
      // specimen: "КОББ 500",
      placeOfOrigin: "Московская облать, Егорьевский район"
    },
    properties: {
      energyValue: 135,
      nutritionalValue: {
        protein: 13.8,
        fats: 8.7,
        carbohydrates: 0
      }
    }
  },
  {
    // https://esh-derevenskoe.ru/#!goods/govjadina-molodaja-tazovaja-chast-mjakot
    id: "beef-thigh-flesh",
    name: "Мякоть бедра говяжья",
    image: "beef-thigh-flesh",
    imageDescription: "Мякоть бедра говяжья",
    description: {
      text: "Мякоть бедра - это жестковатое мясо, но очень диетическое и прекрасно подходит для поклонников здорового питания. Мясо можно запечь или потушить с овощами. Все бычки на ферме Эдуарда Васильева выращиваются на натуральном корме, поэтому мясо нежное и вкусное.Цвет мяса может быть от светло розового до более тёмного в зависимости от зрелости бычков.",
      price: 709,
      weight: 500
    },
    specifications: {
      weight: 500,
      weightRangeFrom: 375,
      weightRangeTo: 625,
      shelfLife: 7,
      // specimen: "КОББ 500",
      placeOfOrigin: "Тверская область, Калининский район"
    },
    properties: {
      energyValue: 137.98,
      nutritionalValue: {
        protein: 20.2,
        fats: 6.4,
        carbohydrates: 0
      }
    }
  },
  {
    // https://esh-derevenskoe.ru/#!goods/grudka-kurinaja-na-kosti-ot-evgenija-roshalja
    id: "chicken-breast-on-the-bone",
    name: "Грудка цыпленка на кости",
    image: "chicken-breast-on-the-bone",
    imageDescription: "Грудка цыпленка на кости",
    description: {
      text: "Мясо грудки считается самым диетическим. Грудку можно отваривать, тушить с овощами, запекать под сыром, обжаривать в соусе. Курицы на ферме Рошаля живут на свободном выгуле и питаются качественным сбалансированным комбикормом, поэтому их мясо мягкое и натуральное.",
      price: 544,
      weight: 1000
    },
    specifications: {
      weight: 1000,
      weightRangeFrom: 750,
      weightRangeTo: 1250,
      shelfLife: 7,
      specimen: "КОББ 500",
      placeOfOrigin: "Краснодарский край, район Славянский"
    },
    properties: {
      energyValue: 201,
      nutritionalValue: {
        protein: 23.6,
        fats: 1.9,
        carbohydrates: 0
      }
    }
  },
  {
    // https://esh-derevenskoe.ru/#!goods/kurinaya-golen-roshal
    id: "chicken-drumstick",
    name: "Голень цыпленка",
    image: "chicken-drumstick",
    imageDescription: "Голень цыпленка",
    description: {
      text: "Куриная голень - полезный и вкусный продукт. Голени вкусно и пожарить, и запечь с пряностями в духовке. Курицы на ферме Рошаля живут на свободном выгуле и питаются качественным сбалансированным комбикормом, поэтому их мясо мягкое и натуральное.",
      price: 455,
      weight: 700
    },
    specifications: {
      weight: 700,
      weightRangeFrom: 350,
      weightRangeTo: 1050,
      shelfLife: 7,
      specimen: "КОББ 500",
      placeOfOrigin: "Краснодарский край, район Славянский"
    },
    properties: {
      energyValue: 200,
      nutritionalValue: {
        protein: 19,
        fats: 14,
        carbohydrates: 0
      }
    }
  }
];

export { products };
