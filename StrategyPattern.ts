// 策略模式

// 定义一系列的算法,把它们一个个封装起来, 并且使它们可相互替换。


// 实现购物策略 满200减20 或打7折 或使用5元红包


// 定义策略的接口
interface Strategy {
    afterDiscount(value: number): void
}

// 打7折
class Discount implements  Strategy{
    afterDiscount(value: number){
        return value*0.7
    }
}

// 5元红包
class Doucher implements  Strategy{
    afterDiscount(value: number){
        return value-5<0?0.1:value-5
    }
}
// 满减
class Subtract implements  Strategy{
    afterDiscount(value: number){
        return value>=200?value-20:value
    }
}


class supermarket{
    // 消费金额
    money: number;
    // 使用的策略
    private stragety: Strategy | null;
    constructor(money:number) {
        this.money = money;
        this.stragety = null;
    }
    // 设置策略
    setStragety(stragety: Strategy){
        // 变更当前策略
        this.stragety = stragety;
    }
    // 获取当前应该多少钱
    howMuch(){
        return this.stragety?this.stragety.afterDiscount(this.money):this.money

    }
}
// 生成一次消费
const order = new supermarket(203)
// 不使用优惠
console.log(`没有使用优惠${order.howMuch()}`);


// 使用不同优惠
order.setStragety(new Doucher())
console.log(`使用5元红包${order.howMuch()}`);
order.setStragety(new Discount())
console.log(`7折${order.howMuch()}`);
order.setStragety(new Subtract())
console.log(`满减${order.howMuch()}`);

// 如果需要增加测量只需要在现有基础上增加
