"use strict";
const title = 'Квадракоптер';
const price = 5000;
const count = 5;
const arrived = false;
const product = {
    title: 'Квадракоптер',
    price: 5000,
    count: 5,
    arrived: false,
    option: {
        weight: 234,
        color: 'white',
    },
};
const totalNu = ({ title, price, option: { weight }, count, }) => {
    const totalPrice = price * count;
    const totalWeight = weight * count;
    return `${title}: цена - ${totalPrice}, вес - ${totalWeight}`;
};
const result = totalNu(product);
console.log(result);
