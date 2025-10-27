// Verfügbaren Typen in TypeScript
let myString = 'hello world';
let myNumber = 4.5;
let myBoolean = false;
const empty = null;
const unavailable = undefined;
const anything: any = 1; // Schaltet effektiv das TypeChecking aus
const externalData: unknown = false;
let impossible: never; // Zuweisen eines Werts produziert Fehler

let speedInMph: null | number = null;

speedInMph = 10;

if (typeof speedInMph === 'number') {
    speedInMph.toExponential();
    let speedInKph = speedInMph * 1.60934;
}

const user = {
    id: 1,
    username: 'john_doe',
    age: 25,
    professions: ['designer']
};

user.id = 2;

// function getFullName(firstName: string, lastName: string, separator?: string): string {
function getFullName(firstName: string, lastName: string, separator = ' '): string {
    return `${firstName}${separator}${lastName}`;
}

const fullName: string = getFullName('philip', 'braunen');

type User = {
    username: string;
    password: string;
    id: number;
};

const getUsername = (user: User): string => {
    return user.username;
};

const getPassword = (user: User): string => {
    return user.password;
};

getUsername({ username: 'johndoe22', password: 'secret', id: 1 });

{
    const getUsername = (user: { isSignedIn: boolean; username?: string }): string => {
        if (typeof user.username === 'string') {
            return user.username;
        }

        return 'Anonymous';
    };

    getUsername({ isSignedIn: true, username: undefined }); // unsinnig
}

{
    type User =
        | { isSignedIn: true; username: string }
        | { isSignedIn: false; username: undefined };

    const getUsername = (user: User): string => {
        return user.isSignedIn ? user.username : 'Anonymous';
    };

    getUsername({ isSignedIn: true, username: 'johndoe22' });
}
