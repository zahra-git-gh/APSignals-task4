export function formatNumber(num) {
    return num.toLocaleString("en-US");
  }

export function numberToWords(num) {
    const obj = { 2: "Two", 3: "Three", 4: "Four" };

    return obj[num];
  }