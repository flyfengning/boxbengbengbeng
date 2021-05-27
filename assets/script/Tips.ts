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

    static showTips(txt:string)
    {
        cc.resources.load('Prefab/tips', cc.Prefab, (function(error, tipsprefab){
            if (tipsprefab)
            {
                let tips:cc.Node = cc.instantiate(tipsprefab)
                tips.parent = cc.director.getScene()
                let label = tips.getComponent("Tips")
                label.string = txt
                tips.x = cc.winSize.width/2
                tips.y = cc.winSize.height/4*3
                tips.zIndex = 10
            }
        }).bind(this))
    }

    start () {
        // this.node.active = false
        this.node.setScale(0.5)
        cc.tween(this.node)
            .show()
            .to(0.1, {scale:1})
            .delay(0.8)
            .by(0.4, {
                y:150,
                opacity:-100
            })
            // .delay(0.2)
            // .by(0.1, {scale:-0.5, opacity:-122})
            .removeSelf()
            .start()
    }

    // update (dt) {}
}
