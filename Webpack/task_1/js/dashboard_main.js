import $ from 'jquery';
import _ from 'lodash';

let p1 = $('<p>Holberton Dashboard</p>');
let p2 = $('<p>Dashboard data for the students</p>');
let p3 = $('<button>Click here to get started</button>');
let p4 = $('<p id="count"></p>');
let p5 = $('<p>Copyright - Holberton School</p>');

$('body').append(p1);
$('body').append(p2);
$('body').append(p3);
$('body').append(p4);
$('body').append(p5);


let count = 0;

function updateCounter() {
  count++;
  p4.text(`${count} clicks on the button`);
}

p3.on('click', _.debounce(updateCounter, 500));
