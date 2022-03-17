import PI, { squareOfNumber as square123, cubeOfNumber as cube } from './utils.js'
import basicDiscount, {basicCoupon} from './discount.js'

console.log(basicDiscount())
console.log(basicCoupon())
console.log(`Constant PI: ${PI}`);
console.log(cube(5))
console.log(square123(5))