export interface Activity {
	name: string;
	location: string;
	description: string;
	period: Date;
	datetime: Date;
	teacher: string;
}

export interface Student {
	name: string;
	surname: string;
	birth: string;
	id: string;
	email: string;
	password: string;
	confirmed: boolean;
}

export interface Teacher {
	id: string;
	name: string;
}

export interface Manager {
	id: string;
	name: string;
}

