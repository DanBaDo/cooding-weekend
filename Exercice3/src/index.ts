/*class SortingObject implements Sorting {

    merge<T>(data: SortingData<T>): SortingData<T> {
        return []
    }

    bubbleSort<T>(data: SortingData<T>): SortingData<T> {
        return []
    }

}*/

class SortPersons implements SortingPersons {
    
    compare (pers1: Person, pers2: Person): boolean {
        return pers1.age > pers2.age;
    }

    switchPersons (idx1: number, idx2: number, list: PersonArray) {
        const tmp: Person = list[idx1];
        list[idx1] = list[idx2];
        list[idx2] = tmp;
    }
    bubble (list: PersonArray): PersonArray {
        for (let index1: number = 0; index1 < list.length; index1++) {
            let currentMinorIdx: number = index1;
            for (let index2: number = index1+1; index2 < list.length; index2++) {
                if ( this.compare( list[currentMinorIdx], list[index2] ) ) currentMinorIdx = index2;
            }
            if (index1 !== currentMinorIdx) this.switchPersons(index1, currentMinorIdx, list)
        }
        return list
    }

}

class Person implements Person {}

// Tests

const personList: PersonArray = [];
const sortPersons = new SortPersons();

for (let i: number = 5; i >= 0; i--) {
    const person = new Person();
    person.age = i*2;
    personList.push(person);
}

sortPersons.bubble(personList)

console.log(personList);