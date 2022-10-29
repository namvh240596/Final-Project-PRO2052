export const formatMoney = money => {
  return money.toLocaleString('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });
};
