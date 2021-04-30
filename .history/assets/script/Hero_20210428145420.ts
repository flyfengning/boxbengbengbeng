// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;
import HeroBase from "./HeroBase"

@ccclass
export default class Hero extends HeroBase {

    @property(cc.Sprite)
    head_img:cc.Sprite = null;

    @property(cc.Label)
    blood_volume:cc.Sprite = null;

    onLoad () {
        
    }

    start () {
        // this.attack_num
    }

    // update (dt) {}
}
