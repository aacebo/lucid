export type Validator = <T>(v: T, prop: keyof T, errors: any) => any;
