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
