// @param { number } amount
// @param { any } passThruData

module.exports = (amount, passThruData) =>
  new Promise((resolve) => setTimeout(() => resolve(passThruData || true), amount));

