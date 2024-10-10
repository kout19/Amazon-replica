import { formateCurrency } from "../JS/utilss/money.js";

export function getProduct(productId) {
  let matchingId;
    products.forEach((product) => {
      if (productId === product.id) {
        matchingId = product;
      }
    })
  return matchingId;
}

class Product{
    id;
    name;
    image;
    rating;
    PriceCents;
    constructor(productDetails) {
      this.id = productDetails.id;
      this.name = productDetails.name;
      this.image = productDetails.image;
      this.rating = productDetails.rating;
      this.PriceCents = productDetails.PriceCents;
    }
    getStarsURL() {
      return `images/ratings/rating-${this.rating.stars*10}.png`
      
    }
    getPrice() {
      return `${formateCurrency(this.PriceCents)}`
    }
    extraInfoHTML() {
      return `<a href="${this.sizeChartLink}" target="_blank"> size chart </a>`
    }

}

class Clothing extends Product{
  sizeChartLink;
  constructor(productDetails) {
    super(productDetails);
    this.sizeChartLink = productDetails.sizeChartLink;
  }
 extraInfoHTML() {
    return `<a href="${this.sizeChartLink}" target="_blank">
    Size Chart 
    </a>`;
    
  }
 
}
// const object2 = {
//   a: 2,
//   b: this.a,
  
// }

// const newDate = new Date();
// console.log(newDate);
// console.log(newDate.toLocaleTimeString());

function logThis(a,b) {
  console.log(this);
  return a + b;
}
console.log(logThis(3,4));
console.log(logThis.call('hello',2,3));


export const products = [
  {
  id:'15b6fc6f-3ddt34233-kk4452sf-1',
  image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
  name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
  rating: {
    stars: 4.5,
    count: 87
  },
  PriceCents: 1090,
   keyWrods: [
    'socks',
    'sports',
    'apparel'
  ]
},
  {
  id:'15b6fc6f-3ddt34233-kk4452sf-2',
  image: 'images/products/intermediate-composite-basketball.jpg',
  name: 'Intermediate Size Basketball',
  rating: {
    stars: 4,
    count: 127
  },
    PriceCents: 2095,
   keyWrods: [
    'socks',
    'sports',
    'apparel'
  ]
},
  {
  id:'15b6fc6f-3ddt34233-kk4452sf-3',
  image: 'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
  name: 'Adults Plain Cotton T-Shirt - 2 Pack',
  rating: {
    stars: 4.5,
    count: 56
  },
    PriceCents: 799,
   keyWrods: [
    'tshirt',
    'sports',
    'apparel'
    ],
    sizeChartLink: 'images/clothing-size-chart.png'
  }, {
    id:'15b6fc6f-3ddt34233-kk4452sf-4',
    image: 'images/products/black-2-slot-toaster.jpg',
    name: '2 slot toaster-black',
    rating: {
      stars: 5,
      count: 2197
    },
    PriceCents: 1899,
     keyWrods: [
    'socks',
    'sports',
    'apparel'
  ]
  }, {
    id:'15b6fc6f-3ddt34233-kk4452sf-5',
  image: 'images/products/6-piece-white-dinner-plate-set.jpg',
  name: '6 piece white dinner plate set',
    rating:{
  stars: '4',
  count:'37'
  },
    PriceCents: '2067',
 keyWrods: [
    'socks',
    'sports',
    'apparel'
  ]
  }, {
    id:'15b6fc6f-3ddt34233-kk4452sf-6',
  image: 'images/products/6-piece-non-stick-baking-set.webp',
  name: '6 piece white dinner plate set',
    rating:{
  stars: '4',
  count:'37'
  },
    PriceCents: '2067',
 keyWrods: [
    'socks',
    'sports',
    'apparel'
  ]
  }, {
    id:'15b6fc6f-3ddt34233-kk4452sf-7',
  image: 'images/products/backpack.jpg',
  name: 'Black back pack',
    rating:{
  stars: '3.5',
  count:'80'
  },
    PriceCents: '1023',
 keyWrods: [
    'socks',
    'sports',
    'apparel'
  ]
  }, {
    id:'15b6fc6f-3ddt34233-kk4452sf-8',
  image: 'images/products/bathroom-rug.jpg',
  name: 'Bathroom rug',
    rating:{
  stars: '4.5',
  count:'107'
  },
    PriceCents: '1458',
 keyWrods: [
    'socks',
    'sports',
    'apparel'
  ]
  }, {
    id:'15b6fc6f-3ddt34233-kk4452sf-9',
  image: 'images/products/coffeemaker-with-glass-carafe-black.jpg',
  name: 'Coffee maker with glass',
    rating:{
  stars: '4',
  count:'147'
  },
    PriceCents: '1562',
 keyWrods: [
    'socks',
    'sports',
    'apparel'
  ]
  }, {
    id:'15b6fc6f-3ddt34233-kk4452sf-10',
  image: 'images/products/blackout-curtain-set-beige.webp',
  name: 'White curtains',
    rating:{
  stars: '5',
  count:'1000'
  },
    PriceCents: '1865',
 keyWrods: [
    'socks',
    'sports',
    'apparel'
  ]
  }, {
    id:'15b6fc6f-3ddt34233-kk4452sf-11',
  image: 'images/products/blackout-curtains-black.jpg',
  name: 'Black curtains',
    rating:{
  stars: '3.5',
  count:'2001'
  },
    PriceCents: '1856',
 keyWrods: [
    'socks',
    'sports',
    'apparel'
  ]
  }, {
    id:'15b6fc6f-3ddt34233-kk4452sf-12',
  image: 'images/products/women-stretch-popover-hoodie-black.jpg',
  name: 'Women stretch popover hoodie',
    rating:{
  stars: '4',
  count:'2564'
  },
    PriceCents: '2089',
 keyWrods: [
    'socks',
    'sports',
    'apparel'
  ]
  }, {
    id:'15b6fc6f-3ddt34233-kk4452sf-13',
  image: 'images/products/luxury-tower-set-6-piece.jpg',
  name: 'Luxury tower set',
    rating:{
  stars: '4',
  count:'1625'
  },
    PriceCents: '1856',
 keyWrods: [
    'socks',
    'sports',
    'apparel'
  ]
  }, {
    id:'15b6fc6f-3ddt34233-kk4452sf-14',
  image: 'images/products/men-chino-pants-beige.jpg',
  name: 'Men chino pants',
    rating:{
  stars: '3',
  count:'25'
  },
    PriceCents: '1045',
 keyWrods: [
    'socks',
    'sports',
    'apparel'
  ]
  }
].map((productDetails) => {
  return new Product(productDetails);
});
