"use strict";
// import { product } from "./src/modules/product";
// import { totalNu } from "./src/modules/totalNu";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carResult = void 0;
// const title: string = 'Квадракоптер';
// const price: number = 5_000;
// const count: number = 5;
// const arrived: boolean = false;
// const result: string = totalNu(product);
// console.log(result);
const car = {
    brand: 'BMW',
    model: 'xDrive30e',
    country: 'Germany',
    price: 50_000,
    color: 'white',
    rating: [
        ['performance', 8.0],
        ['comfort', 8.0],
        ['interior', 8.5],
        ['technology', 8.0],
        ['storage', 8.0],
        ['fuelEconomy', 6.5],
        ['value', 7.5],
        ['wildcard', 8.5],
    ],
};
const totalVerdict = ({ rating }) => {
    const sumRating = car.rating.reduce((acc, item) => {
        console.log(acc, item);
        return Number(item[1]) + acc;
    }, 0);
    const verdict = sumRating / car.rating.length;
    return verdict;
};
exports.carResult = totalVerdict(car);
