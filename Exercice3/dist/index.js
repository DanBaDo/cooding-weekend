"use strict";
/*class SortingObject implements Sorting {

    merge<T>(data: SortingData<T>): SortingData<T> {
        return []
    }

    bubbleSort<T>(data: SortingData<T>): SortingData<T> {
        return []
    }

}*/
var SortPersons = /** @class */ (function () {
    function SortPersons() {
    }
    SortPersons.prototype.compare = function (pers1, pers2) {
        return pers1.age > pers2.age;
    };
    SortPersons.prototype.switchPersons = function (idx1, idx2, list) {
        var tmp = list[idx1];
        list[idx1] = list[idx2];
        list[idx2] = tmp;
    };
    SortPersons.prototype.bubble = function (list) {
        for (var index1 = 0; index1 < list.length; index1++) {
            var currentMinorIdx = index1;
            for (var index2 = index1 + 1; index2 < list.length; index2++) {
                if (this.compare(list[currentMinorIdx], list[index2]))
                    currentMinorIdx = index2;
            }
            if (index1 !== currentMinorIdx)
                this.switchPersons(index1, currentMinorIdx, list);
        }
        return list;
    };
    return SortPersons;
}());
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
// Tests
var personList = [];
var sortPersons = new SortPersons();
for (var i = 5; i >= 0; i--) {
    var person = new Person();
    person.age = i * 2;
    personList.push(person);
}
sortPersons.bubble(personList);
console.log(personList);
//# sourceMappingURL=index.js.map