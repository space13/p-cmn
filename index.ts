export function map<T>(fn: Function, iter: T[]) {
    let res = [];
    let idx = 0;
    for (const it of iter) {
        res[idx] = fn(it);
        idx += 1;
    }
    return res;
}

export function filter<T>(fn: Function, iter: T[]) {
    let res = [];
    let idx = 0;
    for (const it of iter) {
        fn(it)
    }
    return res;
}