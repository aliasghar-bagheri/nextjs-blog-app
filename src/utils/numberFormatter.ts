export function toPersianNumber(value: number | string) {
  const persianNumber = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return value.toString().replace(/\d/g, (x) => persianNumber[parseInt(x)]);
}
