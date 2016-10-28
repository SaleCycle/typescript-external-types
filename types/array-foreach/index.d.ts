declare module 'array-foreach' {
  /**
    * Performs the specified action for each element in an array.
    * @param arr Array of items to iterate over
    * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
    * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
    */
  function forEach<T>(arr: Array<T>, callbackfn: (value: T, index: number, array: ReadonlyArray<T>) => void, thisArg?: any): void;
  
  /**
    * Performs the specified action for each element in an array.
    * @param arr Nodelist of items to iterate over
    * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
    * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
    */
  function forEach<T extends Node>(arr: NodeListOf<T>, callbackfn: (value: T, index: number, array: ReadonlyArray<T>) => void, thisArg?: any): void;
  export = forEach;
}