export function subtotal(purchases) {
  return purchases.reduce((prev, purchase) => {
    return prev + purchase.product.price * purchase.number;
  }, 0)
}

export function display(purchases) {
  return purchases.map(purchase => {
    return `${purchase.product.price}円:${purchase.number}点`;
  }).join("\n")
};

export function calcPostageFromPurchase(sum) {
   if (sum == 0 || sum >= 3000) {
     return 0;
   } else if (sum < 1000){
    return 500;
   } else {
    return 250;
   }
}