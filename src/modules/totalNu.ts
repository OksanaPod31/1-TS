export const totalNu = ({
    title,
    price,
    option: {weight},
    count,
}:{
    title: string;
    price: number;
    option:{
        weight: number;
    },
    count: number;
}): string => {
    const totalPrice = price * count;
    const totalWeight = weight * count;
    return `${title}: цена - ${totalPrice}, вес - ${totalWeight}`;
};