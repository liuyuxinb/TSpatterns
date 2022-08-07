// 装饰器模式
// 允许向一个现有的对象添加新的功能，同时又不改变其结构。这种类型的设计模式属于结构型模式，它是作为现有的类的一个包装。





// 人可以穿各式各样的衣服
interface Person {
    show(): void;
}

// 定义一个男孩类
class Boy implements Person{
    show(): void {
        console.log(`进行展示衣服=============`);
    }
}
// 定义一个衣服抽象类
abstract class PersonClothes implements Person {
    protected Person: Person;
    constructor(Person: Person) {
        this.Person = Person;
    }
    show(): void {
        this.Person.show();
    }
}
// 定义不同的服装
class TShirt extends PersonClothes {
    show(): void {
        // 调用父类的show --->PersonClothes-->Person
        super.show();
        console.log('穿上了TShirt');
    }
}

class Shoes extends PersonClothes {
    show(): void {
        // 调用父类的show --->PersonClothes-->Person
        super.show();
        console.log('穿上了鞋子');
    }
}
class Trousers extends PersonClothes {
    show(): void {
        // 调用父类的show --->PersonClothes-->Person
        super.show();
        console.log('穿上了裤子');
    }
}
// 实例化一个boy
const boy = new Boy();
// boy现在穿了什么
boy.show()
// 给boy穿上TShirt
const boyTShirt = new TShirt(boy);
// boy现在穿了什么

boyTShirt.show()
// 给boy穿上Shoes
const boyTShoes = new Shoes(boyTShirt);
// boy现在穿了什么

boyTShoes.show()

// 给boy穿上裤子
const boyTrousers = new Trousers(boyTShoes);
// boy现在穿了什么

boyTrousers.show()




