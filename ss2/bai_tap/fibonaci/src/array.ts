let array1: Array<number> = [1, 2, 3, 4];
let array2: string[] = ["5", "6", "7"];

// foreach dùng để duyệt mảng, không trả về
array1.forEach((element) => {
  console.log(element);
});

// map để duyệt mảng, thay đổi giá trị, có trả về
let newArray: string[] = array2.map((element) => {
  if (element.includes("5")) {
    element = "8";
  }
  return element;
});
console.log(newArray);

// vừa duyệt vừa lọc, có trả về
let filterArr: Array<number> = array1.filter((element) => {
  return element > 2;
});
console.log(filterArr);
