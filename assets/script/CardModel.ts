

import {GAME} from './GameDefine'

// 卡牌数据模型
export interface CardModel{
    nickname:string;                        // 名字
    id:number;                              // id
    blood:number;                           // 血量 
    attack:number                           // 攻击力
    defense:number                          // 防御力
    attack_speed:number                     // 攻击速度(0-60)
    attack_crit:number                      // 暴击(0-1000)
    move_speed:number                       // move_speed 移动速度
    skill:Array<GAME.skill>                 // 拥有的技能
    attack_type:GAME.attack_type            // 攻击方式
    attack_spark:GAME.attack_spark_type     // 攻击触发类型
    attack_number:number                    // 攻击人数
    attack_targets:number                   // 攻击对象数 
    attack_effnum:number                    // 攻击特效 每次的数值（毒/额外伤害/...d）

    /************  成长属性 ****************/
    blood_grow:number
    attack_grow:number
    defense_grow:number
    attack_speed_grop:number
    attack_crit_grop:number
    attack_targets_grop:number
    attack_effnum_grop:number
    attack_number_grop:number
}