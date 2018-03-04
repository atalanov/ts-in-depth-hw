import { Book, Logger } from '../interfaces';
import Category from '../enums';

export function purge<T>(inventory: T[] ): T[] {
    return inventory.slice(2);
}

export function createCustomerId(name: string, id: number): string {
    return name + id;
}

export function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

export function getAllBooks(): Book[] {
    let books = [
        { id: 0, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript },
        { id: 1, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript },
        { id: 2, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
        { id: 3, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JavaScript }
        ];
    return books;
}

export function logFirstAvailable(books: any[] = getAllBooks()): void {
    const numberOfBooks: number = books.length;
    let firstAvailable: string = '';

    for (let currentBook of books) {
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }
    console.log(`Total number: ${numberOfBooks}`);
    console.log(`First Available:${firstAvailable}`);
}


export function getBookTitlesByCategory(books: any[], category: Category = Category.JavaScript): Array<string> {
    const titles = new Array<string>();

    for (let book of books) {
        if (book.category === category) {
            titles.push(book.title);
        }
    }

    return titles;
}

export function logBookTitles(titles: any[]): void {
    for (let title of titles) {
        console.log(title);
    }
}

export function getBookById(books: any[], id: number): Book | undefined {
    return books.find((el) => {
        return el.id === id; });
}

export function createCustomer (name: string = null, age: number = null, city: string = null): void {
    console.log(`${name ? `name: ${name}` : '' }${age ? `${name ? `, ` : ``}age: ${age}` : '' }${city ? `${name || age ? `, ` : ``}city: ${city}` : '' }`);
}

export function checkoutBooks(customer: string, ...bookIds: number[]): string[] {
    const items: any[] = [];
    bookIds.forEach((item) => {
        let book = getBookById(getAllBooks(), item);
        if (book && book.available)
            items.push(book.title);
    });
    console.log(customer);
    return items;
}

export function getTitles(param): string[] {
    const titles: string[] = [];
    let paramName: string;
    switch (typeof param) {
        case 'string':
            paramName = 'author';
            break;
        case 'boolean':
            paramName = 'available';
            break;
        default:
            console.log(typeof param);
            return titles;
    }
    getAllBooks().forEach(element => {
        if (element[paramName] === param)
            titles.push(element.title);
    });
    return titles;
}



export function PrintBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`);
}

interface LibMgrCallback {
    (err: Error, titles: string[]): void;
}

export function getBooksByCategory(category: Category, callback: LibMgrCallback) {
    setTimeout(() => {
        try {
            const titles: string[] = getBookTitlesByCategory(getAllBooks(), category);
            if (titles.length > 0) {
                callback(null, titles);
            }
            else {
                throw new Error('No books found');
            }
        } catch (error) {
            callback(error, null);
        }
    }, 2000);
}

export function logCategorySearch(err: Error, titles: string[]): void {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log('Book titles:', titles);
    }
}

export function getBooksByCategoryPromise(category: Category): Promise<string[]> {
    const p: Promise<string[]> = new Promise((resolve, reject) => {
        setTimeout(() => {
            const titles: string[] = getBookTitlesByCategory(getAllBooks(), category);
            if (titles.length > 0) {
                resolve(titles);
            }
            else {
                reject('No books found');
            }
        }, 2000);
    });
    return p;
}

export async function logSearchResults(category: Category) {
    let foundBooks = await getBooksByCategoryPromise(category);
    console.log(foundBooks);
}