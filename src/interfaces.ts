import Category from './enums';

interface DamageLogger {(param: string): void; }

interface Person {
    name: string;
    email: string;
}

interface Author extends Person {
    numBooksPublished: number;
}

interface Librarian extends Person {
    department: string;
    assistCustomer(custName: string);
}

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    markDamaged?: DamageLogger;
}

interface Magazine {
    title: string;
    publisher: string;
}

export {Book, Author, Librarian, DamageLogger as Logger, Magazine};