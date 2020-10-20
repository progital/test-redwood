import round from 'lodash/round';

const priceFromCents = (price) => {
  if (typeof price === 'undefined') {
    return price;
  }

  return (price / 100).toFixed(2);
};

const priceToCents = (price) => {
  if (typeof price === 'undefined') {
    return price;
  }

  const numPrice = Number(price);
  return !Number.isNaN(numPrice) ? round(numPrice * 100) : 0;
};

export { priceFromCents, priceToCents };
