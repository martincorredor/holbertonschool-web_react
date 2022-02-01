interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstName: 'Martin',
	lastName: 'Corredor',
	age: 26,
	location: 'Colombia'
}

const student2: Student = {
	firstName: 'Usain',
	lastName: 'Bolt',
	age: 35,
	location: 'Jamaica'
}

const studentsList: Array<Student> = [student1, student2];
const table: HTMLTableElement = document.createElement('table');
const tBody: HTMLTableSectionElement = table.createTBody();

studentsList.forEach((student) => {
	const newRow: HTMLTableRowElement = tBody.insertRow();
	const newRowFirstName: HTMLTableCellElement = newRow.insertCell();
	const newRowLocation: HTMLTableCellElement = newRow.insertCell();
	newRowFirstName.innerHTML = student.firstName;
	newRowLocation.innerHTML = student.location;
})

document.body.appendChild(table);
