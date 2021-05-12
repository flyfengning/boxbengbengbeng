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
        Proba_kill,         // 概率击杀
        Superimpose,        // 叠加攻击
    }
    
    // 攻击特效
    export enum attack_spark_type
    {
        NORMAL,
        sustained,          // 多人攻击
    
    }

}

export {GAME}