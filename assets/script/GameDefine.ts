import HeroBase from "./HeroBase"

namespace GAME {

    export enum skill{  
        ICE,        // 冰
        FIRE,       // 火
        POISON,
        BLAST,      // 狂风
    }
    // 攻击类型
    export enum attack_type{
        NORMAL,             // 普通
        TRIGGER_SKILL,      // 触发技能
        PROBA_PERCENTAGE,   // 概率百分比
        PROBA_KILL,         // 概率击杀
        SUPERIMPOSE,        // 叠加攻击(累计)
    }
    
    // 攻击特效
    export enum attack_spark_type
    {
        NORMAL,
        // BLAST, 

    }

    export const max_attack_crit:number = 10000  // 常量可以导出
    export const min_attack_crit:number = 0  // 常量可以导出


    // 受击属性
    export interface HitData{
        target:HeroBase                 // 释放对象
        is_crit:boolean                 // 是否暴击
        hit_number:number               // 攻击数值
        hit_type:attack_type            // 攻击类型
        hit_proba:number                // 取值概率
        hit_target_count:number         // 受击人数

        hit_damage:number               // 受击伤害（计算之后血量减少的数值） 
        
        
        // spark_type:number            // 攻击特效
    }







}

export {GAME}