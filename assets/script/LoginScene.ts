// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    // @property(cc.Label)
    // label: cc.Label = null;

    @property(cc.Button)
    start_game: cc.Button = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        
        this.start_game.node.on(cc.Node.EventType.TOUCH_END, (()=>{
            cc.director.loadScene("FightScene")
        }).bind(this))
    }   

    // update (dt) {}
}
