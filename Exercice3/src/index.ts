class Person implements Person {
    constructor(age: Number, name?: string, surname?: string){
        this.age = age
        this.name = name
        this.surname = surname
    }
}

const oldestThan: GreaterThan<Person> = (per1, per2) => {
    return per1.age > per2.age
}

const switchPerson: SwitchItems<Person> = (idx1, idx2, personList) => {
    const temp = personList[idx1];
    personList[idx1] = personList[idx2];
    personList[idx2] = temp
}

class SortIt<T> implements SortingElements<T> {
    list: SortingData<T>;
    isGreather: GreaterThan<T>;
    sw: SwitchItems<T>;
    constructor(list: SortingData<T>, isGreatherMethod: GreaterThan<T>, switchMethod: SwitchItems<T> ) {
        this.list = list;
        this.isGreather = isGreatherMethod;
        this.sw = switchMethod;
    }
    
    bubbleSort<T> (): SortingData<T> {
        for (let index1: number = 0; index1 < this.list.length; index1++) {
            let currentMinorIdx: number = index1;
            for (let index2: number = index1+1; index2 < this.list.length; index2++) {
                if ( this.isGreather( this.list[currentMinorIdx], this.list[index2] ) ) currentMinorIdx = index2;
            }
            if (index1 !== currentMinorIdx) this.sw(index1, currentMinorIdx, this.list);
        }
        //return this.list;
        return []
    }

    merge () {
        return []
    }

}

// Tests

const personList: SortingData<Person> = [];
const sortPersons = new SortIt<Person>(personList,oldestThan,switchPerson)
for (let i: number = 5; i >= 0; i--) {
    const person = new Person(i*2);
    personList.push(person);
}

sortPersons.bubbleSort()

console.log(sortPersons.list);