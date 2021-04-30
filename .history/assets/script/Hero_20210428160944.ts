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
        this.resetHero(100, 1, 1, 1)
    }

    map = null

    setMap(_map)
    {
        this.map = _map
    }


    findEmety()
    {
        // this.map:
    }

    // 攻击
    onAttack(target:HeroBase)
    {
        target.on_hit(this.attack_num)
        // 本地发射子弹到对方
        // let pos = 

        


    }

    on_hit(hit_number:number){
        cc.log("Hero:on_hit")
    }
    on_blood_back(){
        cc.log("Hero:on_blood_back")
    }
    on_die(){
        cc.log("Hero:on_die")
    }


}
