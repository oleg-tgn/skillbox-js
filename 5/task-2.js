let applyDiscount = function(sum, count, promo = null) {

    if (promo === 'ДАРИМ300') {
        sum =  sum > 300 ? sum - 300 : 0;
    } 
    if (count >= 10) {
        sum = sum - Math.round(sum * 0.05);
    } 
    if (sum > 50000) {
        sum = sum - Math.round((sum - 50000) * 0.2);
    }
    if (promo === 'ДАРИМ300' && sum >= 20000) {
        sum = sum - Math.round(sum * 0.15);
    }
    return sum;
}

console.log(applyDiscount(55000, 11, 'ДАРИМ300'));