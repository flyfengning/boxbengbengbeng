// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;
import HeroBase from "./HeroBase"

@ccclass
export default class enemy extends HeroBase {

    @property(cc.Sprite)
    head_img:cc.Sprite = null;

    @property(cc.Label)
    blood_volume:cc.Label = null;

    onLoad () {

    }

    start() {
        // this.attack_num
        //血量
        this.blood_volume.string = String(this.blood_num)
    }

    on_hit(hit_number:number){
        this.blood_volume.string = String(this.blood_num)
    }
    on_blood_back(){
        cc.log("enemy:on_blood_back")
    }
    on_die(){
        cc.log("enemy:on_die")

        this.node.removeFromParent()
    }
}
