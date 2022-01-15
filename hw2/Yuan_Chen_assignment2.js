// given array
const itemsObject = [
    { quantity: 1, price: 200 },
    { quantity: 3, price: 350 },
    { quantity: 5, price: 400 },
];
/* Q1: Given the array, implement a function for generating a new array which doubles the quantity and price in each object.*/
const doublearray = itemsObject.map(ele => {
    return { quantity: ele.quantity * 2, price: ele.price * 2 }
});

console.log("Question 1 result: \n", doublearray);

/* Q2: Given the array, implement a function for generating a new array which contains item quantity > 2 and price > 300 only.*/
const checkarray = (itemsObject) => {
    const filterarray = itemsObject.filter(ele => ele.price > 300 && ele.quantity > 2);
    return filterarray;
};
console.log("Question 2 result: \n", checkarray(itemsObject));

/* Q3: Given the array, implement a function to calculate the total value of the items.*/

const itemsObject2 = [
    { quantity: 1, price: 200 },
    { quantity: 3, price: 350 },
    { quantity: 5, price: 400 },
];
const totalvalue = itemsObject.reduce((sum, num) => {
    sum += (num.price * num.quantity);
    return sum;
}, 0);
console.log("Question 3 result: \n", totalvalue);

/* Q4:Given the string, implement a function to remove all the non-alphabet characters and
extra space in the string and convert the string to all lowercase. */
const string = ' Perhaps The Easiest-to-understand Case For Reduce Is To Return The Sum Of All The Elements In An Array';
const result = (string) => {
    const newstring = string.trim().split(/[-, ]/).join(' ').toLowerCase();
    return newstring;
}
console.log("Question 4 result: \n", result(string));