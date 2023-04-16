const generatePrice = (price: string): string => (Number(price) === 0 ? 'Gratuit' : `${price} €`);

export default generatePrice;
