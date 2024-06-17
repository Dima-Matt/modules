import { value as valueFrom2, operationFrom2 } from "./main2.js";

export function minus(a, b) {
    console.log(a - b);
    return a - b;
}

export function sum(a, b) {
    console.log(a + b);
    return a + b;
}


export default function logVal() {
    console.log(valueFrom2, operationFrom2);
}


