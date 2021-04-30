// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

import HeroBase from "./HeroBase"

@ccclass
export default class NewClass extends HeroBase {

    start () {

    }

    // 攻击
    onAttack(target)
    {

    }


    on_hit(hit_number:number){
        cc.log("Hero:on_hit")
    }
    on_blood_back(){
        cc.log("Hero:on_blood_back")
    }
    on_die(){
        cc.log("Heroon_die")
    }


}
