export function FormatPrice(price) {
    return new Intl.NumberFormat('vi-VN').format(price);
}