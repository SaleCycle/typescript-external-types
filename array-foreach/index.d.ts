declare module 'array-foreach' {
  function forEach(value: Array<any>|NodeListOf<any>, callback: Function): any;
  function forEach(value: Array<any>|NodeListOf<any>, callback: Function, thisArg: any): any;
  export = forEach;
}
