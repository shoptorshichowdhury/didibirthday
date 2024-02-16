// Discounted price calculator
/**
 * 100 ---> 100tk
 * 101-200 ---> 90tk
 * 200 --->70tk
 */

/* function discountedPrice(quantity){
    if(quantity <= 100){
        const total = quantity * 100;
        console.log("sorry! you don't get any discount!") //it's optional line. just try!
        return total;
    }
    else if(quantity <= 200){
        const total = quantity * 90;
        return total;
    }
    else{
        const total = quantity * 70;
        return total;
    }
}

const total = discountedPrice(900);
console.log(total);*/

// New BMI calculator

//10-50 --> low
//50-100 --> medium
//100-200 --> heavy

function weightCalculator(weight){
    if(weight <= 50){
        console.log("You have a very little weight");
        return weight;
    }else if(weight <= 100){
        console.log("You have perfect weight!");
        return weight;
    }else{
        console.log("Oops! you have very much heavy weight.");
        return weight;
    }
}

const exactWeight1 = weightCalculator(87);
const exactWeight2 = weightCalculator(47);
const exactWeight3 = weightCalculator(245);
console.log(exactWeight1, exactWeight2, exactWeight3);