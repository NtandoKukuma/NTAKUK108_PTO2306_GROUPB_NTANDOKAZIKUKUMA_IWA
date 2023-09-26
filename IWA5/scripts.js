
const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately, we do not ship to your country of residence';
const NONE_SELECTED = 0;

const SHIPPING_COST_RSA = 400;
const SHIPPING_COST_NAM = 600;
const SHIPPING_COST_OTHER = 800;
const FREE_SHIPPING_THRESHOLD_RSA_NAM = 1000;


const customers = 1;
const location = 'RSA';
const items = {
  shoes: 300,
  toys: 100 * 5,
  shirts: 150 * NONE_SELECTED,
  batteries: 35 * 2,
  pens: 5 * NONE_SELECTED
};


function calculateShippingCost(location, costWithoutShipping) {
  if (location === 'RSA') {
    return costWithoutShipping >= FREE_SHIPPING_THRESHOLD_RSA_NAM ? 0 : SHIPPING_COST_RSA;
  } else if (location === 'NAM') {
    return costWithoutShipping >= FREE_SHIPPING_THRESHOLD_RSA_NAM ? 0 : SHIPPING_COST_NAM;
  } else {
    return SHIPPING_COST_OTHER;
  }
}

function calculateTotalCost(location, costWithoutShipping) {
  const shippingCost = calculateShippingCost(location, costWithoutShipping);
  return costWithoutShipping + shippingCost;
}


const totalCostWithoutShipping = Object.values(items).reduce((total, itemCost) => total + itemCost, 0);


let currency = 'R';
let shipping = 0;
if (location === 'RSA') {
  currency = 'R';
  shipping = SHIPPING_COST_RSA;
} else if (location === 'NAM') {
  currency = '$';
  shipping = SHIPPING_COST_NAM;
} else {
  currency = '$';
  shipping = SHIPPING_COST_OTHER;
}


const totalWithShipping = totalCostWithoutShipping + shipping;


const isBanned = location === 'NK';


const totalCost = calculateTotalCost(location, totalCostWithoutShipping);


const isFree = (location === 'RSA' || location === 'NAM') &&
  totalCostWithoutShipping >= FREE_SHIPPING_THRESHOLD_RSA_NAM &&
  customers === 1;


if (isBanned) {
  console.log(BANNED_WARNING);
} else {
  if (isFree) {
    console.log('Price: Free');
  } else {
    console.log('Price:', currency + totalCost);
  }
}