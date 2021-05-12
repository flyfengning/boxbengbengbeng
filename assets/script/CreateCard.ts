// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;
import {CardModel} from "./CardModel"
import {GAME} from './GameDefine'

// 类型
enum UITYPE_ENUM{
    input,
    checkbox,

}

// 类型对应的类
const UITYPE_STRING = [
    "InputModel",
    "CheckBox",
]

// id:number;                      // id
// blood:number;                   // 血量 
// attack:number                   // 攻击力
// defense:number                  // 防御力
// attack_speed:number             // 攻击速度
// attack_crit:number              // 暴击
// move_speed:number               // move_speed 移动速度
// skill:Array<skill>              // 拥有的技能
// attack_type:attack_type         // 攻击方式
// attack_spark:attack_spark_type  // 攻击触发类型
// attack_number:number            // 攻击对象数 
// attack_effnum:number            // 攻击特效 每次的数值（毒/额外伤害/...d）

// blood_grow:number
// attack_grow:number
// defense_grow:number
// attack_speed_grop:number
// attack_crit_grop:number
// attack_number_grop:number
// attack_effnum_grop:number
const key:Array<string> = [

   "event_id",
   "event_blood",
   "event_attack",

   "event_defense",
   "event_defense_check",

   "event_attack_speed",
   "event_attack_crit",
   "event_move_speed",
   "event_skill",
   "event_attack_type",
   "event_attack_number",
   "event_attack_effnum",

   // 成长
   "event_blood_grow",
   "event_attack_grow",
   "event_defense_grow",
   "event_attack_speed_grop",
   "event_attack_crit_grop",
   "event_attack_number_grop",
   "event_attack_effnum_grop",
]


const UI_EVENT_TYPE:Map<string, string> = new Map()

for(let i = 0; i < key.length; i++)
{
    UI_EVENT_TYPE.set(key[i], key[i]) 
}

 
@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Prefab)
    input_model:cc.Prefab = null

    @property(cc.Prefab)
    check_model:cc.Prefab = null

    card_def: CardModel = 
    {
        id:0,                           // id
        blood:0,                        // 血量 
        attack:0,                       // 攻击力
        defense:0,                      // 防御力
        attack_speed:0,                 // 攻击速度
        attack_crit:0,                  // 暴击
        move_speed:0 ,                  // move_speed 移动速度
        skill : [],                       // 拥有的技能
        attack_type:GAME.attack_type.NORMAL,        // 攻击方式
        attack_spark:GAME.attack_spark_type.NORMAL,  // 攻击触发类型
        attack_targets:0,                    // 攻击对象数 
        attack_effnum:0,                // 攻击特效 每次的数值（毒/额外伤害/...d）
    
        /************  成长属性 ****************/
        blood_grow:0,
        attack_grow:0,
        defense_grow:0,
        attack_speed_grop:0,
        attack_crit_grop:0,
        attack_number_grop:0,
        attack_effnum_grop:0,
    }

    onLoad()
    {
        this.addEvent()
    }

    addEvent()
    {
        for(let i = 0; i < key.length; i++)
        {
            // this.node.on(UI_EVENT_TYPE.get(key[i]), (event)=>{
            //     cc.log("event", event.getEventName(), event.getUserData()) 
            // }, this)
            this.node.on(UI_EVENT_TYPE.get(key[i]), (event)=>this.onEvent(event))
        }  
    }


    onEvent(event:cc.Event.EventCustom)
    {
        cc.log("onEvent-->>>>", event.getEventName(), event.getUserData())
    }


    addBox(type:UITYPE_ENUM, pos:cc.Vec2, event:string, btn_name:string, onoff?:boolean)
    {
        let btn_atk = null

        switch(type){
            case UITYPE_ENUM.input:
            {
                btn_atk = cc.instantiate(this.input_model)
                break
            }
            case UITYPE_ENUM.checkbox:
            {
                btn_atk = cc.instantiate(this.check_model)
                break
            }
            default:
            {
                cc.log("---------addBox------")
                break
            }
        }

        if(btn_atk)
        {
            let model = btn_atk.getComponent(UITYPE_STRING[type])
            btn_atk.parent = this.node
            btn_atk.setPosition(pos)
            model.envnt_name = event
            model.btn_name = btn_name
        }

        if(onoff)
        {
            let onoffpos = cc.v2(pos.x + 100, pos.y)
            this.addBox(UITYPE_ENUM.checkbox, onoffpos, event + "_check", "")
        }



        return btn_atk
    }

    // id:number;                      // id
    // blood:number;                   // 血量 
    // attack:number                   // 攻击力
    // defense:number                  // 防御力
    // attack_speed:number             // 攻击速度
    // attack_crit:number              // 暴击
    // move_speed:number               // move_speed 移动速度
    // skill:Array<skill>              // 拥有的技能
    // attack_type:attack_type         // 攻击方式
    // attack_spark:attack_spark_type  // 攻击触发类型
    // attack_number:number            // 攻击对象数 
    // attack_effnum:number            // 攻击特效 每次的数值（毒/额外伤害/...d）

    // /************  成长属性 ****************/
    // blood_grow:number
    // attack_grow:number
    // defense_grow:number
    // attack_speed_grop:number
    // attack_crit_grop:number
    // attack_number_grop:number
    // attack_effnum_grop:number

    /*没有开关的，强制必须有的类型*/
    // id
    id_node:cc.Node = null
    // 血量
    blood_node:cc.Node = null;
    blood_grop_node:cc.Node = null
    // 攻击
    attack_node:cc.Node = null
    attack_grop_node:cc.Node = null
    // 防御
    defense_node:cc.Node = null
    defence_check_node = null //可开启的选项
    defense_grop_node:cc.Node = null

    //攻速
    attack_speed_node:cc.Node = null;
    attack_speed_check_node = null
    attack_speed_grop_node = null
    // 暴击
    attack_crit_node = null
    attack_crit_check_node = null
    attack_crit_grop_node = null
    
    // 移动速度
    move_speed_node = null
    move_speed_check_node = null

    skill_list = []
    skill_node = null

    // 攻击方式
    attack_type_node = null
    // 攻击敌人的个数
    attack_number_node = null
    attack_number_grop_node = null // 成长

    // 攻击特效数值
    attack_effnum_node = null
    attack_effnum_grop_node = null

    start () {

        // 
        let height = cc.winSize.width - 100
        let sunb_H = 50

        this.id_node = this.addBox(UITYPE_ENUM.input, cc.v2(0, height), UI_EVENT_TYPE.get("event_id"), "ID")
        
        height = height - sunb_H

        this.attack_node = this.addBox(UITYPE_ENUM.input, cc.v2(0, height), UI_EVENT_TYPE.get("event_attack"), "攻击")
        height = height - sunb_H

        this.attack_grop_node = this.addBox(UITYPE_ENUM.input, cc.v2(0, height), UI_EVENT_TYPE.get("event_attack_grow"), "攻击成长")
        height = height - sunb_H

        this.blood_node = this.addBox(UITYPE_ENUM.input, cc.v2(0, height), UI_EVENT_TYPE.get("event_blood"), "血量")
        height = height - sunb_H
        this.blood_grop_node = this.addBox(UITYPE_ENUM.input, cc.v2(0, height), UI_EVENT_TYPE.get("event_blood_grow"), "血量成长")
        height = height - sunb_H

        this.defense_node = this.addBox(UITYPE_ENUM.input, cc.v2(0, height), UI_EVENT_TYPE.get("event_defense"), "防御", true)
        height = height - sunb_H
        this.defense_grop_node = this.addBox(UITYPE_ENUM.input, cc.v2(0, height), UI_EVENT_TYPE.get("event_defense_grow"), "防御成长")
        height = height - sunb_H

        this.attack_speed_node = this.addBox(UITYPE_ENUM.input, cc.v2(0, height), UI_EVENT_TYPE.get("event_attack_speed"), "攻速", true)
        height = height - sunb_H
        this.attack_speed_grop_node = this.addBox(UITYPE_ENUM.input, cc.v2(0, height), UI_EVENT_TYPE.get("event_attack_speed_grop"), "攻速成长")
        height = height - sunb_H

        this.attack_crit_node = this.addBox(UITYPE_ENUM.input, cc.v2(0, height), UI_EVENT_TYPE.get("event_attack_crit"), "暴击", true)
        height = height - sunb_H
        this.attack_crit_grop_node = this.addBox(UITYPE_ENUM.input, cc.v2(0, height), UI_EVENT_TYPE.get("event_attack_crit_grop"), "暴击成长")
        height = height - sunb_H

        this.move_speed_node = this.addBox(UITYPE_ENUM.input, cc.v2(0, height), UI_EVENT_TYPE.get("event_move_speed"), "移速", true)
        height = height - sunb_H

        this.skill_node = this.addBox(UITYPE_ENUM.input, cc.v2(0, height), UI_EVENT_TYPE.get("event_skill"), "技能")
        height = height - sunb_H

        this.attack_type_node = this.addBox(UITYPE_ENUM.input, cc.v2(0, height), UI_EVENT_TYPE.get("event_attack_type"), "攻击方式")
        height = height - sunb_H

        this.attack_number_node = this.addBox(UITYPE_ENUM.input, cc.v2(0, height), UI_EVENT_TYPE.get("event_attack_number"), "攻击人数")
        height = height - sunb_H
        this.attack_number_grop_node = this.addBox(UITYPE_ENUM.input, cc.v2(0, height), UI_EVENT_TYPE.get("event_attack_number_grop"), "攻击人数成长")
        height = height - sunb_H

        this.attack_effnum_node = this.addBox(UITYPE_ENUM.input, cc.v2(0, height), UI_EVENT_TYPE.get("event_attack_effnum"), "攻击特效")
        height = height - sunb_H
        this.attack_effnum_grop_node = this.addBox(UITYPE_ENUM.input, cc.v2(0, height), UI_EVENT_TYPE.get("event_attack_effnum_grop"), "攻击特效成长")
        height = height - sunb_H
    }

    onSave()
    {
        // if(jsb)
        // {   

        //     let fileUtils = jsb.fileUtils
            
        //     let str1:CardModel = <CardModel>{}
        //     str1.dadsadsad = 1
        //     str1.ddsadsadsa = 2
        //     str1.dada = 3

        //     let str = JSON.stringify(str1)
        //     let path = "E:/flytest/box_beng/assets/resources/herodata/"
        //     let fileName = path + "creator_txt.json"
        //     if (fileUtils.isFileExist(fileName))
        //     {
        //         cc.log("当前已存在同名文件")
        //     }
        //     else
        //     {
        //         jsb.fileUtils.writeStringToFile(str, fileName)
        //     }

        // }
        // else
        // {
        //     cc.log("-----------------------------没有jsb 浏览器暂时不支持 jsb")
        // }
    }

    


}
