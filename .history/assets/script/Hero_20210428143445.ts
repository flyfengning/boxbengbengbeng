// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Sprite)
    head_img:cc.Sprite = null;

    @property(cc.Label)
    blood_volume:cc.Sprite = null;

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
    public 



    // onLoad () {}

    start () {

    }

    // update (dt) {}
}
