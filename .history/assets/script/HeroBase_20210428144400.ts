
// hearBase.ts
// create by fnn


const enum enumType{

};

export default class HeroBase 
{

    // 公用属性
    // 血量
    public blood_num:number = 0
    // 攻击力
    public attack_num:number = 0
    // 防御力
    public defense_num:number = 0
    // 是否死亡
    public is_die:boolean = false;
    // 拥有的技能
    public skill_list:Array<Number> = []

}
