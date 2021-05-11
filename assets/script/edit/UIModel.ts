// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    // 触发事件
    _envnt_name:string = ""
    
    set envnt_name(name:string)
    {
        this._envnt_name = name
    }

    get envnt_name()
    {
        return this._envnt_name
    }
    // 属性方法
    set btn_name(_name){
        this.label.string = _name
    }
    get btn_name()
    {
        return this.label.string
    }
    // 定义下回调属性
    start () {
        // this.node.on("event_attack", (event)=>{
        //     cc.log("------------start", event.getUserData(), event.detail, event.getEventName())
        // }, this)

        // this.node.emit 只针对同一脚本使用，跨脚本没用，垃圾
    }

    // 子类必须实现
    getUserData():any
    {
        return null
    }

    oninputEnd()
    {
        if(this._envnt_name != "")
        {
            let event = new cc.Event.EventCustom(this._envnt_name, true)
            event.setUserData(this.getUserData())
            this.node.dispatchEvent(event)
        }
    }
}
