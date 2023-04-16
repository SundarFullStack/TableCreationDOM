//Table creation using DOM

//tablecreater

function createtable(tagName) {
    
    let tag = document.createElement(tagName);

    return tag;

}

//elementCreator

function createElement(tagName, attrtiname, attriValue) {

    let label = document.createElement(tagName);

    label.setAttribute(attrtiname, attriValue);

    return label;

}


//create body
let container = (createElement('div', 'class', 'container'));

let row = (createElement('div', 'class', 'row'));

let col = (createElement('div','class','col-lg-12'))

let box_inside = (createElement('div', 'class', 'box_inside'));

//create tbale

let table = (createtable('table'));

let thead = (createtable('thead'));

let tbody = (createtable('tbody'));

//header row

let tr1 = (createtable('tr'));

let tr1h1 = (createtable('th'));

let tr1h2 = (createtable('th'));

let tr1h3 = (createtable('th'));

let tr1h4 = (createtable('th'));

//data row 1

let tr2 = (createtable('tr'));

let tr2h1 = (createtable('th'));

let tr2d1 = (createtable('td'));

let tr2d2 = (createtable('td'));

let tr2d3 = (createtable('td'));

//data row 2

let tr3 = (createtable('tr'));

let tr3h1 = (createtable('th'));

let tr3d1 = (createtable('td'));

let tr3d2 = (createtable('td'));

let tr3d3 = (createtable('td')); 

//data row 3

let tr4 = (createtable('tr'));

let tr4h1 = (createtable('th'));

let tr4d1 = (createtable('td'));

let tr4d2 = (createtable('td'));

let tr4d3 = (createtable('td'));


//append body

//append body

document.body.append(container);

container.append(row);

row.append(col);

col.append(box_inside);


//append table and header

box_inside.append(table);

table.setAttribute('class','table')

table.append(thead);

table.append(tbody);

thead.append(tr1);

tr1.append(tr1h1);

tr1h1.textContent ="#";

tr1.append(tr1h2);

tr1h2.textContent ="First";

tr1.append(tr1h3);

tr1h3.textContent ="Last";

tr1.append(tr1h4);

tr1h4.textContent ="Handle";

//append row 1 in body

tbody.append(tr2);

tr2.append(tr2h1);

tr2h1.textContent = '1';

tr2.append(tr2d1);

tr2d1.textContent = 'Mark';

tr2.append(tr2d2);

tr2d2.textContent = 'Otto';

tr2.append(tr2d3);

tr2d3.textContent = '@mdo';


//append row 2 in body

tbody.append(tr3);

tr3.append(tr3h1);

tr3h1.textContent = '2';

tr3.append(tr3d1);

tr3d1.textContent = 'Jacob';

tr3.append(tr3d2);

tr3d2.textContent = 'Thornton';

tr3.append(tr3d3);

tr3d3.textContent = '@fat';

//append row 3 in body

tbody.append(tr4);

tr4.append(tr4h1);

tr4h1.textContent = '3';

tr4.append(tr4d1);

tr4d1.textContent = 'Larry the Bird';

tr4.append(tr4d2);

tr4d2.textContent = 'Class';

tr4.append(tr4d3);

tr4d3.textContent = '@twitter';




