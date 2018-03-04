import { ReferenceItem } from './classes';

export default class Encyclopedia extends ReferenceItem {
    printCitation() {
        console.log(`${this.edition} - ${this.year}`);
    }
    constructor (public title: string, protected year: number, public edition: number) {
        super(title, year);
    }
    printItem() {
        super.printItem();
        console.log(`${this.edition} (${this.year})`);
    }
}