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

    set string(_str)
    {
       this.label.string = _str 
    }

    get string()
    {
        return this.label.string
    }

    start () {
        this.node.active = false
        this.node.setScale(0.5)
        cc.tween(this.node)
            .show()
            .to(0.2, {scale:1})
            .delay(0.5)
            .by(1, {
                y:100,
                opacity:100
            })
            .removeSelf()
            .start()
    }

    // update (dt) {}
}
