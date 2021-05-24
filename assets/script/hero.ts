// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

import { GAME } from "./GameDefine";
import HeroBase from "./HeroBase"

import {TagMg} from "./TagManger"


@ccclass
export default class hero extends HeroBase {

    // 地图
    map = null

    //lv

    // 是否可以攻击
    is_can_attack = true
    // 技能是否可以用
    // is_can_skill = true 
    
    // 攻击动作
    attack_tag = TagMg.ATTACK_TAG

    @property({type:cc.Sprite, override:true})
    head_img:cc.Sprite = null;

    @property({type:cc.Label, override:true})
    lv_label:cc.Label = null;

    start() {
        this.start_attack()
    }

    // 开始攻击
    start_attack()
    {
        cc.tween(this.node)
        .delay(0.05) // 攻速上限？(20次)
        .call(this.findEmety.bind(this))
        .union()
        .repeatForever()
        .tag(Number(this.tag_key + "" + this.attack_tag))
        .start()
    }

    // 设置map
    setMap(_map)
    {
        this.map = _map
    }

    // 刷新ui
    refush()
    {
        this.lv_label.string = String(this.lv)
    }

    findEmety()
    {
        if(this.is_can_attack == false)
        {
            return
        }
        // cc.log('this.map.enemy_list.length', this.map.enemy_list.length)
        let emety:cc.Node[] = []

        switch(this.attack_type)
        {
            case GAME.attack_type.NORMAL:
            {
                break
            }
            
        }
        let enemycount = this.attack_number
        // 寻找攻击目标
        for(let i = 0; i < this.map.enemy_list.length; i++)
        {
            let temp = this.map.enemy_list[i]
            if(temp.getComponent("enemy").is_die == false)
            {
                emety.push(temp)
                enemycount--;
                if(enemycount == 0)
                {
                    break
                }
            }
        }
        emety.forEach((element => {
            this.onAttack(element)
        }));

        if(this.attack_speed > 0 && emety.length > 0)
        {
            this.is_can_attack = false
            cc.tween(this.node)
            .delay(1/this.attack_speed)
            .call(function(){
                this.is_can_attack = true
            }.bind(this))
            .tag(123213)
            .start()
        }

        if(this.is_can_skill)
        {
            // TagMg.SKILL_TAG
            this.onSkill()
        }
    }

    // 技能攻击
    onSkill()
    {   
        let skill_id = this.skill[0]
        switch(skill_id)
        {   
            // 狂风
            case GAME.skill.BLAST:
                {
                    this.addKuangFeng()
                    break
                }
            case GAME.skill.ICE: // 减速
                {

                    break
                }



        }
    }

    // 攻击
    onAttack(target:cc.Node)
    {
        if(this.is_can_attack == false)
        {
            return
        }

        // target:HeroBase         // 释放对象
        // is_crit:boolean         // 是否暴击
        // hit_number:number       // 攻击数值
        // hit_type:attack_type    // 攻击类型
        // hit_Proba:number        // 取值概率
        // hit_target_count        // 攻击人数

        let data = <GAME.HitData>{}
        data.target = this
        data.hit_type = this.attack_type
        data.hit_number = this.attack
        data.is_crit = this.rand_crit()
        data.hit_proba = this.attack_crit // 暴击率
        data.hit_target_count = this.attack_number // 攻击人数
        data.hit_damage = 0             // 先设置成0
        // 本地发射子弹到对方
        this.create_one_bullet(target, data)
    }
 
    create_one_bullet(target:cc.Node, hit_data:GAME.HitData)
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
                    target.getComponent("enemy").on_hit(hit_data)
                    bullet.removeFromParent()
                }.bind(this))
            ).start()
        }).bind(this))

    }
    on_hit(data:GAME.HitData){
        cc.log("Hero:on_hit")
    }
    on_blood_back(){
        cc.log("Hero:on_blood_back")
    }
    on_die(){
        cc.log("Hero:on_die")
    }


}
