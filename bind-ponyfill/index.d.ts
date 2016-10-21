declare module 'bind-ponyfill' {
  function ponyBind(fn: Function, that: any, ...args: Array<any>): Function;
  export = ponyBind;
}
