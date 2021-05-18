namespace GAME {
    export enum skill{
        ice,
        fire,
        poison,     //毒

    }
    export enum attack_type{
        NORMAL,             // 普通
        Trigger_skill,      // 触发技能
        Proba_percentage,   // 概率百分比
        Proba_attack,       // 暴击
        Proba_kill,         // 概率击杀
        Superimpose,        // 叠加攻击
    }
    
    // 攻击特效
    export enum attack_spark_type
    {
        NORMAL,
        sustained,          // 多人攻击
    }

    export const max_attack_crit:number = 10000  // 常量可以导出
    export const min_attack_crit:number = 0  // 常量可以导出


    // 受击属性
    export interface HitData{
        is_crit:boolean         // 
        hit_number:number       // 攻击数值
        hit_type:attack_type    // 攻击类型
        hit_Proba:number        // 取值概率

    }







}

export {GAME}