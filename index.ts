function findFirstOccurrence(numbers: number[],
                             input: number): number {
    let low: number = 0;
    let high: number = numbers.length - 1;
    let result: number  = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (numbers[mid] === input) {
            result = mid;
            return result
        } else if (input<numbers[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return result;
}

let data: number[] = [2, 5, 5, 5, 6, 6, 8, 9, 9, 9];
let input: number = 5
let index: number = findFirstOccurrence(data, input);

if (index !== -1) {
    console.log(`Phần tử ${input} xuất hiện đầu tiên tại vị trí ${index}`);
} else {
    console.log(`Phần tử ${input} không tồn tại trong mảng`)
}