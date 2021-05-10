// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;
import HeroBase from "./HeroBase"

import {calc_angle} from "./GlobalFunc"

@ccclass
export default class enemy extends HeroBase {

    @property({type:cc.Sprite, override:true})
    head_img:cc.Sprite = null;

    @property(cc.Label)
    blood_volume:cc.Label = null;

    @property(cc.Node)
    tips_num:cc.Node = null;

    map = null

    onLoad () {

    }

    setMap(_map)
    {
        this.map = _map
    }

    start() {
        // this.attack_num
        //血量
        this.blood_volume.string = String(this.blood_num)
    }

    on_hit(hit_number:number){
        this.blood_volume.string = String(this.blood_num)

        let tips = cc.instantiate(this.tips_num)
        tips.active = true
        tips.parent = this.node
        tips.getComponent(cc.Label).string = hit_number + ""
        tips.x = this.node.width / 3 * (-1) + Math.floor(Math.random() * 100 %(this.node.width/3*2)) 
        tips.y = 24
        cc.tween(tips).by(0.3, {y:15, opacity:50})
        .removeSelf()
        .start()

        // 24.816
    }
    on_blood_back(){
        cc.log("enemy:on_blood_back")
    }
    on_die(){
        cc.log("enemy:on_die", this.name)
        this.map.kill_enemy(this)
        // this.map.enemy_list.
        // for(let i = 0; i < this.map.enemy_list.length; i++)
        // {
        //     if(this.map.enemy_list[i] == this.node)
        //     {
        //         this.map.enemy_list.splice(i, 1)
        //         break
        //     }
        // }
        // this.node.removeFromParent()// 需要从列表里面删除
    }

    refush()
    {
        this.blood_volume.string = String(this.blood_num)
    }

    move(p1:cc.Vec2, p2:cc.Vec2, callBack:Function)
    {

        let _tag = this.tag_key + "" + 123
        let tag = Number(_tag)
        cc.Tween.stopAllByTag(Number(tag)) // 先干掉动作

        this.node.setPosition(p1)

        // 计算时间
        // 每一帧应该移动的距离 = 速度（速度-减速）*时间（0.016）直到终点
        // 方向
        let dir = calc_angle(p1, p2)
        dir = dir * Math.PI / 180
        let index = 0
        cc.tween(this.node).delay(0.016).call((()=>{
            let tempSped = this.move_speed - this.move_retard
            tempSped  = tempSped > 0 ? tempSped : 0
            let subx = 0
            let suby = 0
            if(tempSped > 0)
            {
                subx = Math.cos(dir) * (tempSped) / 60
                suby = Math.sin(dir) * (tempSped) / 60 
            }

            this.node.x += subx
            this.node.y += suby
            // cc.log("***********subx, subx", tempSped, subx, suby, this.node.x, this.node.y, p2.x, p2.y)
            if(Math.abs(this.node.x - p2.x) <= 2 && Math.abs(this.node.y - p2.y) <= 2 )
            {
                cc.Tween.stopAllByTag(Number(tag)) // 先干掉动作
                if(callBack)
                {
                    callBack()
                }
            }
        }).bind(this)).union()
        .repeatForever()
        .tag(Number(tag))
        .start()
    }

}
