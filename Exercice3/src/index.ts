/*class SortingObject implements Sorting {

    merge<T>(data: SortingData<T>): SortingData<T> {
        return []
    }

    bubbleSort<T>(data: SortingData<T>): SortingData<T> {
        return []
    }

}*/

class Person implements Person {
    age: Number;
    constructor(age: Number){ this.age = age}
}

class SortPersons implements Sorting, Compares, SwitchItems {
    
    greater<Person> (pers1: Person, pers2: Person): boolean {
        return pers1.age > pers2.age;
    }

    switch<Person> (idx1: number, idx2: number, list: SortingData<Person>) {
        const tmp: Person = list[idx1];
        list[idx1] = list[idx2];
        list[idx2] = tmp;
    }

    bubbleSort<Person> (list: SortingData<Person>): SortingData<Person> {
        for (let index1: number = 0; index1 < list.length; index1++) {
            let currentMinorIdx: number = index1;
            for (let index2: number = index1+1; index2 < list.length; index2++) {
                if ( this.greater( list[currentMinorIdx], list[index2] ) ) currentMinorIdx = index2;
            }
            if (index1 !== currentMinorIdx) this.switch(index1, currentMinorIdx, list)
        }
        return list
    }

    merge () {
        return []
    }

}

// Tests

const personList: SortingData<Person> = [];
const sortPersons = new SortPersons();

for (let i: number = 5; i >= 0; i--) {
    const person = new Person(i*2);
    personList.push(person);
}

sortPersons.bubbleSort(personList)

console.log(personList);