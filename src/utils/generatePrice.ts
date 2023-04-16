const generatePrice = (price: string): string => (price === '0.0' ? 'Gratuit' : price);

export default generatePrice;
