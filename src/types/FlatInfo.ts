type Primitive = number | string | boolean | null | undefined;

export type FlatInfo = Record<string, Primitive | Array<Primitive>>;
