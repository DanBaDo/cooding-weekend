type SortingData<T> = T[];

interface Sorting {
    merge<T>(data: SortingData<T>): SortingData<T>;
    bubbleSort<T>(data: SortingData<T>): SortingData<T>;
}

interface SortingElements<T> extends Sorting {
    list: SortingData<T>;
    isGreather: GreaterThan<T>;
    sw: SwitchItems<T>;
}