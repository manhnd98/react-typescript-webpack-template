export type Handler<T, G> = (item: T) => G;
export type StringHandler<T> = Handler<T, string>;
export type BooleanHandler<T> = Handler<T, boolean>;
export type NumberHandler<T> = Handler<T, number>;
