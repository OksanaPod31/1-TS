"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.totalNu = void 0;
const totalNu = ({ title, price, option: { weight }, count, }) => {
    const totalPrice = price * count;
    const totalWeight = weight * count;
    return `${title}: цена - ${totalPrice}, вес - ${totalWeight}`;
};
exports.totalNu = totalNu;
