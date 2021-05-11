
enum skill{
    

}
enum attack_type{
    NORMAL,


}

enum attack_spark_type
{
    NORMAL,
    sustained

}


// 卡牌数据模型
export interface CardModel{
    id:number;                      // id
    blood:number;                   // 血量 
    attack:number                   // 攻击力
    defense:number                  // 防御力
    attack_speed:number             // 攻击速度
    attack_crit:number              // 暴击
    move_speed:number               // move_speed 移动速度
    skill:Array<skill>              // 拥有的技能
    attack_type:attack_type         // 攻击方式
    attack_spark:attack_spark_type  // 攻击触发类型
    attack_number:number            // 攻击对象数 
    attack_effnum:number            // 攻击特效 每次的数值（毒/额外伤害/...d）

    /************  成长属性 ****************/
    blood_grow:number
    attack_grow:number
    defense_grow:number
    attack_speed_grop:number
    attack_crit_grop:number
    attack_number_grop:number
    attack_effnum_grop:number
    
}