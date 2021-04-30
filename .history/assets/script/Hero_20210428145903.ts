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
    blood_volume:cc.Label = null;

    onLoad () {
        //血量
        this.blood_volume.string = String(this.blood_num)

        // this.blood_volume.string = String(this.blood_num)
    }

    start () {
        // this.attack_num
    }

    // 受击
    on_hit_base(hit_number:number)
    {

    } 

    // 回血
    on_blood_back_base(blood:number)
    {
        
    } 




    
}
