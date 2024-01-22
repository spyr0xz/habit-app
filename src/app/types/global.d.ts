declare module '*.scss' {
  interface IClassNames {
      [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}

declare const  __IS__DEV__: boolean;