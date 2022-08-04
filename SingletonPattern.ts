// 单例模式


// 概念 单例类只能有一个实例
// 单例类必须自己创建自己的唯一实例。
// 单例类必须给所有其他对象提供这一实例。


// 定义一个People类
class People {
    private static instance:People //将一个私有属性instance挂载到People的类上
    public name:string             //实例上的name
    private constructor (name:string){  //将constructor私有化阻止new进行实例化
        this.name = name
    }
    public say(){
        console.log(this.name);
    }

    static getInstance(name:string){
        if (!this.instance){   //如果People类上没有instance则实例化一个People挂载上
            this.instance = new People(name)
        }
        // 返回People类上的instance
        return this.instance
    }
}

// 报错
// const tom = new People("tom")
// tom.say()

const tom =  People.getInstance("tom")
const jack =  People.getInstance("jack")

tom.say() //tom

jack.say() //tom

console.log(tom === jack);//true




