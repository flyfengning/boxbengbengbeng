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


    map = null

    // 是否可以攻击
    is_can_attack = true

    start () {
        // this.resetHero(100, 1, 1, 1)
        cc.tween(this.node)
        .delay(0.1)
        .call(this.findEmety)
        .start()
    }

    setMap(_map)
    {
        this.map = _map
    }


    findEmety()
    {
        if(this.is_can_attack == false)
        {
            return
        }


        for(let i = 0; i < this.map.emety_list.length)


    }

    // 攻击
    onAttack(target:HeroBase)
    {
        if(this.is_can_attack == false)
        {
            return
        }
        target.on_hit(this.attack_num)
        // 本地发射子弹到对方
        this.is_can_attack = false

        cc.tween(this.node)
        .delay(1/this.attack_speed)
        .call(()=>{
            this.is_can_attack = true
        }).tag(123213)
        .start()
    


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
