function flat(arr, depth) {
    return arr.reduce((acc, val) => {
        if (Array.isArray(val) && depth > 0) {
            acc.push(...flat(val, depth - 1));
        } else {
            acc.push(val);
        }
        return acc;
    }, []);
}

flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 0);
// [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]

flat(
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, [9, 10, 11], 12],
        [13, 14, 15],
    ],
    2
);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

function flat2(arr, depth) {
    const stack = arr.map((el) => [el, depth]);
    const result = [];

    while (stack.length > 0) {
        const [item, depth] = stack.pop();
        if (Array.isArray(item) && depth > 0) {
            stack.push(...item.map((subItem) => [subItem, depth - 1]));
        } else {
            result.push(item);
        }
    }
    return result.reverse();
}
