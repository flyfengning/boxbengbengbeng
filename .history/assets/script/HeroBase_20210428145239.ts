
// hearBase.ts
// create by fnn


// 关于技能的枚举
const enum SKILL_TYPE{
    //  
    skill_1 = 0,
};

const {ccclass, property} = cc._decorator;

@ccclass
export default class HeroBase extends cc.Component
{

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
    public skill_list:Array<Number> = [];

    


}
