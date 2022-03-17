import {basicCoupon, basicCoupon1} from "./coupon.js";

const basicDiscount = () => basicCoupon() == 'FirstCustomer' ? '10%' : '5%'
const basicDiscount1 = () => basicCoupon1() == 'FirstCustomer' ? '10%' : '5%'

console.log(`basic disc: ${basicDiscount()}`);
console.log(`basic disc: ${basicDiscount1()}`);
export {basicDiscount as default, basicCoupon}