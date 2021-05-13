
// hearBase.ts
// create by fnn


// 关于技能的枚举
const enum SKILL_TYPE{
    //  
    skill_1 = 0,
};

const {ccclass, property} = cc._decorator;

import {CardModel} from "./CardModel";
import {GAME} from './GameDefine'

let key = 1
const getkey = ()=>{
    return key++
}

const HeroDataManger:Map<string, any> = new Map()

@ccclass
export default class HeroBase extends cc.Component implements CardModel
{
    // action_tag 为action设立的tag值
    public tag_key:number = -1;

    // CardModel 基础的属性
    id:number;                                                                  // id
    nickname:string = "";                                                       // 名称                   
    move_speed:number = 0                                                       // move_speed 移动速度
    skill:Array<GAME.skill> = []                                                // 拥有的技能
    attack_type:GAME.attack_type = GAME.attack_type.NORMAL                      // 攻击方式
    attack_spark:GAME.attack_spark_type = GAME.attack_spark_type.NORMAL         // 攻击触发类型

    // 下面这些属性都是动态计算的值(有计算公式决定)
    blood:number = 0                           // 血量 
    attack:number = 0                          // 攻击力
    defense:number = 0                         // 防御力
    attack_speed:number = 0                    // 攻击速度
    attack_crit:number = 0                     // 暴击几率
    attack_targets:number = 0                  // 攻击对象数
    attack_effnum:number = 0                   // 攻击特效 每次的数值（毒/额外伤害/...d）

    /************  base属性(对应的是成长增加的属性) ****************/
    blood_base:number = 0
    attack_base:number = 0
    defense_base:number = 0
    attack_speed_base:number = 0
    attack_crit_base:number = 0
    attack_targets_base:number = 0
    attack_effnum_base:number = 0

    /************  成长属性 ****************/
    blood_grow:number = 0
    attack_grow:number = 0
    defense_grow:number = 0
    attack_speed_grop:number = 0
    attack_crit_grop:number = 0
    attack_targets_grop:number = 0
    attack_effnum_grop:number = 0

    /************  升星属性 ****************/   
    blood_star:number = 0;
    attack_star:number = 0;
    defense_star:number = 0;
    attack_speed_star:number = 0;
    attack_crit_star:number = 0;
    attack_targets_star:number = 0;
    attack_effnum_star:number = 0;

    ////////////////////////////公用属性//////////////////////////
    // 是否死亡
    public is_die:boolean = false;
    // 是否被激活，激活之后不允许更改基础属性
    private is_active:boolean = false
    // 对外接口是否活着
    get is_alive(){return this.is_active}
    // 等级
    public lv_num:number = 0;
    // 星级
    public star_num:number = 0;

    /***********游戏中的属性**********/

    // 减速属性
    public move_retard:number = 0

    /***************提供给子类（需要继承）的属性***********************/
    map = null

    @property({type:cc.Sprite})
    head_img:cc.Sprite = null
    /***************************************************************/

    // 等级
    public set lv(_lv)
    {   
        this.lv_num = _lv
    }

    public get lv()
    {
        return this.lv_num
    }

    public set star(_star:number)
    {   
        this.star_num = _star
    }

    public get star()
    {
        return this.star_num
    }

    loadDataByID(id:number, lv:number = 1, star:number = 0)
    {  

        if(this.is_alive)
        {
            cc.log("ERROR::当前节点已经被激活， 不能再次更改属性--------------------", this.nickname)
            return
        }

        this.tag_key = getkey()
        // cc.log("this.tag_key", this.tag_key)

        let resPath = ""
        if (Math.floor(id/1000) == 2)
        {
            resPath = "herodata/hero_" + String(id)
        }
        else
        {
            resPath = "herodata/enemy_" + String(id)
        }

        let headPath = "node/fight_" + String(id)

        if(this.map.sp_Atlas)
        {
            let headName = "fight_" + String(id)
            let spriteFrame = this.map.sp_Atlas.getSpriteFrame(headName)
            if(this.head_img && spriteFrame)  // 子类需要实现， base里面是个空节点
            {
                this.head_img.spriteFrame = spriteFrame
            }
            else
            {
                cc.log("spriteFrame is not find", spriteFrame)
            }
        }
        else
        {
            cc.resources.load(headPath, cc.SpriteFrame, ((error, spriteFrame)=>{
                if(spriteFrame)
                {
                    if(this.head_img)  // 子类需要实现， base里面是个空节点
                    {
                        this.head_img.spriteFrame = spriteFrame
                    }
                }
            }).bind(this))
        }

        let load = ((jdata)=>{
            let data = jdata.json
            this.resetHero(data, lv, star)
            this.name = data.name?data.name:"未知名字"
            // 预设速度
            this.move_speed = data.move_speed ? data.move_speed:0
            // 减速
            this.move_retard = 0
            this.refush()
        }).bind(this)

        if(HeroDataManger.has(resPath))
        {
            let jdata = HeroDataManger.get(resPath)
            load(jdata)
        }
        else
        {
            cc.resources.load(resPath, cc.JsonAsset, ((error, jdata)=>{
                HeroDataManger.set(resPath, jdata)
                if(error)
                {
                    cc.log(error)
                }
                else
                {
                    load(jdata)
                }
            }).bind(this))
        }
    }
    // 主动刷新界面

    refush()
    {
        // 需要主动刷新界面显示   
    }

    // 设置减速
    set_retard(_retard:number, time:number)
    {
        this.move_retard = _retard
    }
    // 设置百分比减速
    set_retard_scale(_retard:number, time:number)
    {
        try {
            _retard >= 0 && _retard <= 1
        } catch (error) {
            cc.log("set_retard_scale _retard must > 0 and _retard < 1", _retard)
        }
        let sub_retard = this.move_speed * _retard
        this.set_retard(sub_retard, time)
    }

    // blood血量  attack攻击力 defense防御力 attack_speed攻击速度
    resetHero(jdata, lv:number=1, star:number=0)
    {   
        // 激活节点
        this.is_active = true
        // 这个是基数属性
        this.blood_base = jdata.blood?jdata.blood:0
        this.attack_base = jdata.attack?jdata.attack:0
        this.defense_base = jdata.defense?jdata.defense:0
        this.attack_speed_base = jdata.attack_speed?jdata.attack_speed:0
        this.attack_crit_base = jdata.attack_crit?jdata.attack_crit:0
        this.attack_targets_base = jdata.attack_targets?jdata.attack_targets:0
        this.attack_effnum_base = jdata.attack_effnum?jdata.attack_effnum:0

        this.id = jdata.id
        this.nickname = jdata.nickname
        this.move_speed = jdata.move_speed?jdata.move_speed:0
        // this.skill = // 需要加载
        this.attack_type = jdata.attack_type
        this.attack_spark = jdata.attack_spark

        this.lv = lv
        this.star = star
        // 重新计算属性
        this.calculate_property()
    }

    //重新计算属性
    calculate_property()
    {   
        // lv 默认为1  star 默认为0 
        // 计算公式  基础 + 成长加成的 + 星级加成

        let grop_lv = this.lv-1
        let grop_star = this.star

        this.blood = this.blood_base + this.blood_grow* (grop_lv) + grop_star * this.blood_star
        this.attack =  this.attack_base + this.attack_grow * (grop_lv) + grop_star * this.attack_star // 血量需要判断是否是掉过血，然后再成长的
        this.defense = this.defense_base + this.defense_grow * (grop_lv) + grop_star * this.defense_star
        this.attack_speed = this.attack_speed_base + this.attack_speed_grop *(grop_lv) +  grop_star * this.attack_speed_star
        this.attack_crit = this.attack_crit_base + this.attack_crit_grop * (grop_lv) + grop_star * this.attack_crit_star
        this.attack_targets = this.attack_targets_base + this.attack_targets_grop * (grop_lv) + grop_star * this.attack_targets_star
        this.attack_effnum = this.attack_effnum_base + this.attack_effnum_grop * grop_lv + grop_star * this.attack_effnum_star
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
        hit_number -= this.defense
        hit_number = hit_number < 0? 0 : hit_number
        this.blood -= hit_number
        this.on_hit(hit_number)
        // 受击触发。。。



        if(this.blood < 0)
        {
            this.on_die_base()
        }
    } 

    // 回血
    on_blood_back_base(blood:number)
    {
        this.blood += blood
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
