import * as Interfaces from './interfaces';
import {sealed, logger, writable} from './decorators';

@logger
@sealed('UniversityLibrarian')
class UniversityLibrarian implements Interfaces.Librarian {
    name;
    email;
    department;

    assistCustomer(custName) {
        console.log(`${this.name} is assisting ${custName}`);
    }

    @writable(true)
    assistFaculty() {
        console.log(`Assisting faculty`);
    }

    @writable(false)
    teachCommunity() {
        console.log(`Teaching Community`);
    }
}

abstract class ReferenceItem {
    /*title: string;
    year: number;
    constructor(newTitle, newYear) {
        console.log('Creating new ReferenceItem');
        this.title = newTitle;
        this.year = newYear;
    }*/
    constructor(public title: string, protected year: number) {}
    _publisher: string;
    static department: string = 'dept';
    printItem() {
        console.log(`${this.title} was published in ${this.year} in ${ReferenceItem.department}`);
    }
    public get publisher(): string {
        return this._publisher.toUpperCase();
    }
    public set publisher(v: string) {
        this._publisher = v;
    }
    abstract printCitation();
}

export {UniversityLibrarian, ReferenceItem};