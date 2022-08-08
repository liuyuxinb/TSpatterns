// 代理模式
// 通过访问目标的代理者来对目标对象进行操作


// 举例
// 我想要买一件商品,但是我们不可以直接接触到厂家
// 这时候我门可以去找代购(代理)
//    代购1 ,花费6000元但是1个就可以
//    代购2 ,花费5000元但是4个起


// 定义一个商品
class Ps5shop {
    public static price = 5000
    public num:number
    constructor(num:number) {
        this.num=num
    }
}
// 定义代理接口
interface BuyPs5{
    buy():void //购买接口
    showShop():void //查询剩余库存
}

// 代购1
class Proxy1 implements BuyPs5{
    private shop:Ps5shop //要代理的对象
    constructor(shop:Ps5shop) {
        this.shop=shop
    }
    // 实现接口的方法
    buy() {
        if (this.shop.num==0) {
            console.log('库存不足')
            return
        }
        this.shop.num--
        console.log(`花费6000元`);
    }
    showShop(){
        console.log(`商家库存还有${this.shop.num}`);
    }
}

// 代购2
class Proxy2 implements BuyPs5{
    private shop:Ps5shop //要代理的对象
    constructor(shop:Ps5shop) {
        this.shop=shop
    }
    // 实现接口的方法
    buy() {
        if (this.shop.num<=4) {
            console.log('库存不足')
            return
        }
        this.shop.num-=4
        console.log(`花费20000元`);
    }
    showShop(){
        console.log(`商家库存还有${this.shop.num}`);
    }
}


// 实例化一个厂家
// 库存20
const ps5Market =new Ps5shop(20)

// 代购1的代理
const p1 = new Proxy1(ps5Market)
// 代购2的代理
const p2 = new Proxy2(ps5Market)
// 代理1购买
p1.buy()
console.log(`通过代理1查询剩余`);
p1.showShop()
// 代理2购买
p2.buy()
console.log(`通过代理2查询剩余`);
p2.showShop()
console.log(`通过代理1查询剩余`);
p1.showShop()


// 实现了我们通过代理对象去对商品进行操作



