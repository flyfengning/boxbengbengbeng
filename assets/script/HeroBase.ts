
// hearBase.ts
// create by fnn


// 关于技能的枚举
const enum SKILL_TYPE{
    //  
    skill_1 = 0,
};

const {ccclass, property} = cc._decorator;

import {calc_angle} from "./GlobalFunc"

let key = 1
const getkey = ()=>{
    return key++
}

@ccclass
export default class HeroBase extends cc.Component
{
    public tag_key:number = -1;

    /////////////////////////// 公用属性//////////////////////////
    // 血量
    public blood_num:number = 0
    // 攻击力
    public attack_num:number = 0
    // 防御力
    public defense_num:number = 0
    // 是否死亡
    public is_die:boolean = false;
    // 拥有的技能
    public skill_list:Array<SKILL_TYPE> = [];
    // 攻击速度 次/s
    public attack_speed:number = 0

    // 怪物名字
    public name:string = ""

    // 移动属性
    // 移动速度
    public move_speed:number = 0
    // 减速属性
    public move_retard:number = 0

    private get blood()
    {
        return this.blood_num
    }
    private set blood(_blood:number)
    {
        this.blood_num = _blood
    }

    private get attack()
    {
        return this.attack_num
    }

    private set attack(_attack:number)
    {
        this.attack_num = _attack
    }

    loadDataByID(id:number)
    {  

        this.tag_key = getkey()
        cc.log("this.tag_key", this.tag_key)

        let resPath = ""
        if (Math.floor(id/1000) == 2)
        {
            resPath = "herodata/hero_" + String(id)
        }
        else
        {
            resPath = "herodata/enemy_" + String(id)
        }
        cc.resources.load(resPath, cc.JsonAsset,((error, jdata)=>{
            if(error)
            {
                cc.log(error)
            }
            else
            {
                cc.log(jdata.json)
                let data = jdata.json
                this.resetHero(data.blood_num, data.attack_num, data.defense_num, data.attack_speed)
                // 激活节点
                this.node.active = true

                this.name = data.name?data.name:"未知名字"

                // 预设速度
                this.move_speed = data.move_speed ? data.move_speed:0
                // 减速
                this.move_retard = 0
            }

        }).bind(this))
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
        cc.tween(this).delay(0.016).call((()=>{
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

            index ++
            // if(index == 30)
            // {
            //     this.move_retard = 75
            // }

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

    // blood血量  attack攻击力 defense防御力 attack_speed攻击速度
    resetHero(blood:number, attack:number, defense:number, attack_speed:number)
    {
        this.blood = blood
        this.attack = attack
        this.defense_num = defense
        this.attack_speed = attack_speed 
    }

    onLoad()
    {

    }

    start()
    {
        
    }

    // 受击
    on_hit_base(hit_number:number)
    {
        if(this.is_die)
        {
            return 
        }
        hit_number -= this.defense_num
        hit_number = hit_number < 0? 0 : hit_number
        this.blood -= hit_number
        this.on_hit(hit_number)
        if(this.blood_num< 0)
        {
            this.on_die_base()
        }
    } 

    // 回血
    on_blood_back_base(blood:number)
    {
        this.blood_num += blood
        this.on_blood_back()
    } 

    // 死亡
    on_die_base()
    {
        this.is_die = true
        this.on_die()
    }

    on_hit(hit_number:number){
        cc.log("ERROR:Need to rewrite this method function name: HeroBase:on_hit")
    }
    on_blood_back(){
        cc.log("ERROR:Need to rewrite this method function name: HeroBase:on_blood_back")
    }
    on_die(){
        cc.log("ERROR:Need to rewrite this method function name: HeroBase:on_die")
    }

}
