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
    score: cc.Label = null;

    @property(cc.Button)
    btn_again: cc.Button = null;

    @property(cc.Sprite)
    sp_light: cc.Sprite = null;


    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        cc.tween(this.sp_light.node)
            .by(1, {angle:90})
            .repeatForever()
            .start()
    }

    // update (dt) {}
}
