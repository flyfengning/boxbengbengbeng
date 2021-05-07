// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

import HeroBase from "./HeroBase"


@ccclass
export default class hero extends HeroBase {

    map = null

    // 是否可以攻击
    is_can_attack = true
     
    attack_tag = 65432

    @property({type:cc.Sprite, override:true})
    head_img:cc.Sprite = null;

    start () {
        let self = this
        // this.resetHero(100, 1, 1, 1)
        cc.tween(this.node).repeatForever(
            cc.tween(this.node).delay(0.1)
            .call(this.findEmety.bind(self))
            .start()
        ).tag(this.attack_tag)
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

        let emety:cc.Node = null
        for(let i = 0; i < this.map.emety_list.length; i++)
        {
            emety = this.map.emety_list[i]
            if(emety.getComponent("enemy").is_die == false)
            {
                break
            }
        }
        if(emety && emety.getComponent("enemy").is_die == false)
        {
            this.onAttack(emety)
        }
        else
        {
            // this.node.stopActionByTag(this.attack_tag)
            cc.Tween.stopAllByTag(this.attack_tag)
        }
    }

    // 攻击
    onAttack(target:cc.Node)
    {
        if(this.is_can_attack == false)
        {
            return
        }
        
        
        this.is_can_attack = false
        let self = this
        cc.tween(this.node)
        .delay(1/this.attack_speed)
        .call(function(){
            this.is_can_attack = true
        }.bind(self))
        .tag(123213)
        .start()

        // 本地发射子弹到对方
        // target
        this.create_one_bullet(target)
    }

    create_one_bullet(target:cc.Node)
    {
        cc.resources.load("Prefab/bullet", cc.Prefab, ((errorMessage, loadedResource)=>{
            if( !( loadedResource instanceof cc.Prefab ) ) { cc.log( 'Prefab error', errorMessage, loadedResource); return; } 
            var bullet = cc.instantiate( loadedResource );
            target.addChild( bullet );
            
            let pos = this.node.getPosition()
            let wpos = this.node.parent.convertToWorldSpaceAR(pos)
            let bulletPos = target.convertToNodeSpaceAR(wpos)

            let bullets = bullet.getComponent("bullet")
            bullets.setAngleWithPos(bulletPos, cc.v2(0, 0))

            // bullet.position = bulletPos
            bullet.x = bulletPos.x
            bullet.y = bulletPos.y  

            
            let movetime = 0.3
            cc.tween(bullet).sequence(
                cc.tween(bullet).to(movetime, {
                    x:0,
                    y:0
                }),
                cc.tween(bullet).call(function(){
                    target.getComponent("enemy").on_hit_base(this.attack_num)
                    bullet.removeFromParent()
                }.bind(this))
            ).start()
        }).bind(this))

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
