// given array
const itemsObject = [
    { quantity: 1, price: 200 },
    { quantity: 3, price: 350 },
    { quantity: 5, price: 400 },
];
/* Q1: Given the array, implement a function for generating a new array which doubles the quantity and price in each object.*/
const doublearray = (array) => {
    array.forEach(element => {
        element.quantity *= 2;
        element.price *= 2;
    });
    return array;
};
console.log("Question 1 result: \n", doublearray(itemsObject));

/* Q2: Given the array, implement a function for generating a new array which contains item quantity > 2 and price > 300 only.*/
const itemsObject1 = [
    { quantity: 1, price: 200 },
    { quantity: 3, price: 350 },
    { quantity: 5, price: 400 },
];
const checkarray = (itemsObject) => {
    const filterarray = itemsObject.filter(ele => ele.price > 300 && ele.quantity > 2);
    return filterarray;
};
console.log("Question 2 result: \n", checkarray(itemsObject1));

/* Q3: Given the array, implement a function to calculate the total value of the items.*/

const itemsObject2 = [
    { quantity: 1, price: 200 },
    { quantity: 3, price: 350 },
    { quantity: 5, price: 400 },
];
const totalvalue = (array) => {
    let sum = 0;
    array.forEach(element => {
        sum += element.quantity * element.price;
    });
    return sum;
}
console.log("Question 3 result: \n", totalvalue(itemsObject2));

/* Q4:Given the string, implement a function to remove all the non-alphabet characters and
extra space in the string and convert the string to all lowercase. */
const string = ' Perhaps The Easiest-to-understand Case For Reduce Is To Return The Sum Of All The Elements In An Array';
const result = (string) => {
    const newstring = string.trim().split(/[-, ]/).join(' ').toLowerCase();
    return newstring;
}
console.log("Question 4 result: \n", result(string));