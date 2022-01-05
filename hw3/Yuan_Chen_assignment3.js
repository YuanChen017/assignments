const tableInfo = [{
        studentName: 'John',
        Age: 19,
        Phone: '455 - 983 - 0903',
        Address: '123 Ave, San Francisco, CA, 94011',
    },
    {
        studentName: 'Alex',
        Age: 21,
        Phone: '455 - 983 - 0912',
        Address: '456 Rd, San Francisco, CA, 94012',
    },
    {
        studentName: 'Josh',
        Age: 22,
        Phone: '455 - 345 - 0912',
        Address: '789 Dr, Newark, CA, 94016',
    },
    {
        studentName: 'Matt',
        Age: 23,
        Phone: '321 - 345 - 0912',
        Address: '223 Dr, Sunnyvale, CA, 94016',
    },
];

let headers = ['studentName', 'Age', 'Phone', 'Address'];
let table = document.createElement('table');
table.className = 'table';
document.body.appendChild(table);
let headerrow = document.createElement('tr');
table.appendChild(headerrow);
headers.forEach(headername => {
    let eachheader = document.createElement('th');
    eachheader.textContent = headername;
    headerrow.appendChild(eachheader);
});
tableInfo.forEach(info => {
    let inforow = document.createElement('tr');
    Object.values(info).forEach(text => {
        let eachtext = document.createElement('td');
        eachtext.textContent = text;
        inforow.appendChild(eachtext);
    })
    table.appendChild(inforow);
});

const list = ['HTML', 'JavaSclistript', 'CSS', 'React', 'Redux', 'Java'];
let orderedlistdiv = document.createElement('div');
orderedlistdiv.id = 'ordered-list';
document.body.appendChild(orderedlistdiv);
let Olist = document.createElement('ol');
orderedlistdiv.appendChild(Olist);
list.forEach(ele => {
    let eachitem = document.createElement('li');
    eachitem.textContent = ele;
    Olist.appendChild(eachitem);
});

let unorderedlistdiv = document.createElement('div');
unorderedlistdiv.id = 'unordered-list';
document.body.appendChild(orderedlistdiv);
let unolist = document.createElement('ul');
orderedlistdiv.appendChild(unolist);
list.forEach(ele => {
    let eachitem = document.createElement('li');
    eachitem.textContent = ele;
    unolist.appendChild(eachitem);
});

const dropDownList = [
    { value: 'newark', content: 'Newark' },
    { value: 'santaClara', content: 'Santa Clara' },
    { value: 'unionCity', content: 'Union City' },
    { value: 'albany', content: 'Albany' },
    { value: 'dalyCity', content: 'Daly City' },
    { value: 'sanJose', content: 'San Jose' },
];
let optionselect = document.createElement('div');
optionselect.className = 'select';
document.body.appendChild(optionselect);
let selector = document.createElement('select');
optionselect.appendChild(selector);
selector.name = 'list-city';
selector.id = 'list-city';
dropDownList.forEach(ele => {
    let eachoption = document.createElement('option');
    eachoption.value = ele.value;
    eachoption.textContent = ele.content;
    selector.appendChild(eachoption);
});