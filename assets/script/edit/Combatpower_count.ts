// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

/*
    战力计算界面

*/

const {ccclass, property} = cc._decorator;

@ccclass
export default class Combatpower_count extends cc.Component {

    // @property(cc.Label)
    // label: cc.Label = null;

    @property(cc.ScrollView)
    scroll: cc.ScrollView = null;

    

    start () {

    }


    loadInfoBylv(lv:number)
    {
        let grop_lv = lv-1
        let grop_star = 0

        // this.blood = this.blood_base + this.blood_grow* (grop_lv) + grop_star * this.blood_star
        // this.attack =  this.attack_base + this.attack_grow * (grop_lv) + grop_star * this.attack_star // 血量需要判断是否是掉过血，然后再成长的
        // this.defense = this.defense_base + this.defense_grow * (grop_lv) + grop_star * this.defense_star
        // this.attack_speed = this.attack_speed_base + this.attack_speed_grop *(grop_lv) +  grop_star * this.attack_speed_star
        // this.attack_crit = this.attack_crit_base + this.attack_crit_grop * (grop_lv) + grop_star * this.attack_crit_star
        // this.attack_targets = this.attack_targets_base + this.attack_targets_grop * (grop_lv) + grop_star * this.attack_targets_star
        // this.attack_effnum = this.attack_effnum_base + this.attack_effnum_grop * grop_lv + grop_star * this.attack_effnum_star
        // this.attack_number = this.attack_number_base + this.attack_number_grop * grop_lv // + grop_star * this.attack_number_grop
    }
    


    // update (dt) {}
}
