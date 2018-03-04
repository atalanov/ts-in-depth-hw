interface ShelfItem {
    title: string;
}


export default class Shelf<T extends ShelfItem> {
    private _items: T[] = [];
    add(item: T) {
        this._items.push(item);
    }
    getFirst(): T {
        return this._items[0];
    }
    find(title: string) {
        return this._items.find(item => title === item.title);
    }
    printTitles() {
        this._items.forEach(item => console.log(item.title));
    }
}