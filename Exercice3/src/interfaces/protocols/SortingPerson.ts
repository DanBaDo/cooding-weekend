type PersonArray = Person[]

interface SortingPersons {
    compare(pers1: Person, pers2: Person): boolean;
    switchPersons(idx1: number, idx2: number, list: PersonArray): void
    bubble(data: PersonArray): PersonArray;
}