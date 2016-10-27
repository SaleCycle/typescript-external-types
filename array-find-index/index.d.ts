declare module 'array-find-index' {
  /**
    * Returns the index of the first element in the array where predicate is true, and -1
    * otherwise.
    * @param arr Array to look for the element in
    * @param predicate find calls predicate once for each element of the array, in ascending
    * order, until it finds one where predicate returns true. If such an element is found,
    * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
    * @param thisArg If provided, it will be used as the this value for each invocation of
    * predicate. If it is not provided, undefined is used instead.
    */
  function ponyFindIndex(arr: Array<any>, predicate: (value: number, index: number, obj: Array<number>) => boolean, thisArg?: any): number;
  export = ponyFindIndex;
}
