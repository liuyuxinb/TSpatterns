// 观察者模式
// 当一个对象的状态发生改变时，所有依赖于它的对象都得到通知并被自动更新。


// 举例

// 老板通知大家明天(上班/放假/加班)

// 这里 老板作为事件的发布者
// 员工作为观察者
// 事件是明天的状态




// 观察者(员工)的接口
interface Observer {
    // 更新事件
    update(params: string):void;
}

// 事件的发布者(被观察者)的接口
interface Subject {
    registerObserver(observer: Observer): void; //注册观察者
    removeObserver(observer: Observer): void; //移除观察者
    notifyObservers(msg:string ): void; // 通知所有观察者
}

// 老板的类

class Boss implements Subject{
    private staff:  Set<Observer> = new Set();
    private state: string = '上班';
    registerObserver(staff:Observer){
        this.staff.add(staff);
    }
    removeObserver(staff:Observer){
        this.staff.delete(staff)
    }

    notifyObservers(msg:string){
        this.staff.forEach(observer => observer.update(msg));
    }

    // 更新明天的状态
    setState(info:string): void {
        this.state = info;
        this.notifyObservers(info);
    }

}

// 员工类
class Staff implements Observer {
    name: string; //名字
    constructor(name: string) {
        this.name = name;
    }
    update(msg: string): void {
        console.log(`我是${this.name},我收到了明天${msg}的消息`);
    }
}

const bigBoss = new Boss() //实例化一个老板
// 实例化4个员工
const staff1 = new Staff('小明')
const staff2 = new Staff('小李')
const staff3 = new Staff('小王')
const staff4 = new Staff('小刘')
// 将小明 小李注册注册进来
bigBoss.registerObserver(staff1)
bigBoss.registerObserver(staff2)
// 进行通知
bigBoss.setState('加班了')

console.log("==========================");
// 将小明移除并且将小王小刘注册
bigBoss.removeObserver(staff1)
bigBoss.registerObserver(staff3)
bigBoss.registerObserver(staff4)
bigBoss.setState('放假了')
