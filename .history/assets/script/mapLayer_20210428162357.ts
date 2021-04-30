// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    // @property(cc.Label)
    // label: cc.Label = null;

    // @property
    // text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    @property(cc.Layout)
    map_bg:cc.Layout = null;

    // @property()
    @property(cc.Prefab)
    hero:cc.Prefab = null

    @property(cc.Prefab)
    emety:cc.Prefab = null

    emety_list:Array<cc.Node> = []

    start () {

        let emety1 = cc.instantiate(this.emety)
        emety1.parent = this.map_bg.node
        this.emety_list.push(emety1)
        // blood血量  attack攻击力 defense防御力 attack_speed攻击速度
        emety1.getComponent("enemy").resetHero(10000, 1, 10, 0)
        
        let hero = cc.instantiate(this.hero) 
        hero.parent = this.map_bg.node
        hero.getComponent("hero").setMap(this)
        hero.getComponent("hero")resetHero(100, 1, 1, 1)


        
    }

    // update (dt) {}
}
