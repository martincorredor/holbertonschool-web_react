//=========== Build a teacher interface ===============
export interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[propName: string]: any;
}

//=========== Extending the Teacher class ===============
export interface Directors extends Teacher {
	numberOfReports: number;
}

//=========== Printing teachers ===============
export interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}
//It returns the first letter of the firstName and the full lastName
export const printTeacher: printTeacherFunction = function (firstName: string, lastName: string): string {
	return `${firstName[0]}. ${lastName}`;
}
