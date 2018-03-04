import {Magazine} from './interfaces';
import Shelf from './shelf';
import Category from './enums';
import {Book, Logger, Author, Librarian} from './interfaces';
import {UniversityLibrarian, ReferenceItem} from './classes';
import RefBook from './encyclopedia';
import Encyclopedia from './encyclopedia';
import { purge, showHello, logFirstAvailable, getAllBooks, logBookTitles, getBookTitlesByCategory, getBookById, createCustomerId, createCustomer, getTitles, PrintBook, getBooksByCategory, logCategorySearch, getBooksByCategoryPromise, logSearchResults } from './lib/utility-functions';
import 'babel-polyfill';

showHello('greeting', 'TypeScript');
logFirstAvailable(getAllBooks());
logBookTitles(getBookTitlesByCategory(getAllBooks(), Category.JavaScript));
getAllBooks().forEach((item) => {
    if (item.category === Category.JavaScript) console.log(item.title);
});
console.log(getBookById(getAllBooks(), 1));
let myID: string;
myID = createCustomerId('customer', 1);
let IdGenerator: typeof createCustomerId;
IdGenerator = createCustomerId;
console.log(IdGenerator('customer', 1));
createCustomer('Alex', 10, 'Minsk');
createCustomer(null, null, 'Minsk');
createCustomer('Alex', 10);
createCustomer('Alex');
/*let myBooks = checkoutBooks('Ann', 1, 2, 4);
myBooks.forEach((item) => console.log(item));
let checkoutBooks = getTitles(false);
checkoutBooks.forEach(element => console.log(element));*/
let myBook: Book = {
    id: 5,
    title: 'Colors, Backgrounds and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: Category.CSS,
    pages: 200,
    markDamaged: (reason) => console.log(`Damaged: ${reason}`)
};
PrintBook(myBook);
// myBook.markDamaged('missing back cover');
let logDamage: Logger = (reason) => console.log(`Damaged: ${reason}`);
logDamage('missing back cover');
let favoriteAuthor: Author = Object();

let favoriteLibrarian = new UniversityLibrarian();
favoriteLibrarian.name = 'John';
favoriteLibrarian.assistCustomer('Antony');
favoriteLibrarian.assistFaculty();
favoriteLibrarian.assistFaculty = null;
favoriteLibrarian.teachCommunity();

/* let ref = new ReferenceItem('SmallBook', 1900);
ref.printItem();
ref.publisher = 'test';
console.log(ref.publisher);*/

let refBook = new RefBook('title', 2015, 5);
refBook.printItem();
refBook.printCitation();


let inventory = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
];

let bookShelf = new Shelf();
inventory.forEach((book) => bookShelf.add(book));
console.log(bookShelf.getFirst());
let magazines = [
    { title: 'Programming Language Monthly', publisher: 'Code Mags' },
    { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
    { title: 'Five Points', publisher: 'GSU' }
];
let magazineShelf = new Shelf();
magazines.forEach((magazine) => magazineShelf.add(magazine));
console.log(magazineShelf.getFirst());

magazineShelf.printTitles();
console.log(bookShelf.find('Code Complete'));


getBooksByCategory(Category.JavaScript, logCategorySearch);

getBooksByCategoryPromise(Category.JavaScript).then(titles => {
    console.log(titles);
    return titles.length;
}).then(num => console.log(num)).catch(err => console.warn(err));

console.log('Beginning search...');
logSearchResults(Category.JavaScript)
.catch(reason => console.log(reason));
console.log('Search submitted...');