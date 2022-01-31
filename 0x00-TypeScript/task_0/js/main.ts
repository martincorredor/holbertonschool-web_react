//Creating an interface for a student
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

let student1: Student = {
  firstName: 'Martin',
  lastName: 'Corredor',
  age: 26,
  location: 'Colombia',
};

let student2: Student = {
  firstName: 'Usain',
  lastName: 'Bolt',
  age: 35,
  location: 'Jamaica',
};

let studentList: Array<Student> = [student1, student2];

const table: HTMLTableElement = document.createElement('table');
const thead: HTMLTableSectionElement = document.createElement('thead');
const tbody: HTMLTableSectionElement = document.createElement('body');
const trHead: HTMLTableRowElement = document.createElement('tr');
const th1: HTMLTableCellElement = document.createElement('th');
const th2: HTMLTableCellElement = document.createElement('th');

th1.innerHTML = 'firstName';
th2.innerHTML = 'location';

table.append(thead);
table.append(tbody);
thead.append(trHead);
trHead.append(th1);
trHead.append(th2);

studentList.forEach((student) => {
  const row: HTMLTableRowElement = table.insertRow();
  tbody.append(row);

  const cell: HTMLTableCellElement = row.insertCell();
  const text: Text = document.createTextNode(student.firstName);
  cell.appendChild(text);

  const cell2: HTMLTableCellElement = row.insertCell();
  const text2: Text = document.createTextNode(student.location);
  cell2.appendChild(text2);
});

document.body.appendChild(table);
