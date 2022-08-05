//工厂模式

//定义一个创建对象的接口，让其子类自己决定实例化哪一个工厂类，工厂模式使其创建过程延迟到子类进行
// 在工厂中去创建其他类的实例


// 定义一个工厂制作手机
// 根据投入不同产出不同型号的手机
// 1.简单工厂模式

// 先定义手机的抽象类
abstract class Phone {
    // 手机都有的功能打电话
    public abstract call(): void
}

// 具体型号的手机
class Phone5 extends Phone {
// 型号5
    public call(): void {
        console.log('来自5代手机的电话');
    }


}
class Phone6 extends Phone {
// 型号6
    public call(): void {
        console.log('来自6代手机的电话');
    }

    public internet(): void {
        console.log('6代机器可以上网冲浪');
    }

}

// 定义工厂
class PhoneFactory {
    public static createPhone(money: number) {
        if (money < 4000) {
            return new Phone5()
        } else {
            return new Phone6()
        }
    }
}
// 2000元的5代
let myPhone1 =PhoneFactory.createPhone(2000)
myPhone1.call()

// 6000元的5代
let myPhone2 =PhoneFactory.createPhone(6000)
myPhone2.call()
if(myPhone2 instanceof Phone6){
    myPhone2.internet()
}













