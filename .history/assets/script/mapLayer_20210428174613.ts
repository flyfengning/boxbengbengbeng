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

    public emety_list:Array<cc.Node> = []

    start () {

        let emety1 = cc.instantiate(this.emety)
        emety1.parent = this.map_bg.node
        this.emety_list.push(emety1)
        // blood血量  attack攻击力 defense防御力 attack_speed攻击速度
        let sc = emety1.getComponent("enemy")
        emety1.position = cc.v3(100, 100, 0)
        sc.resetHero(1000, 1, 10, 0)

        let hero = cc.instantiate(this.hero) 
        hero.parent = this.map_bg.node
        let sc1 = hero.getComponent("hero")
        sc1.setMap(this)
        sc1.resetHero(100, 11, 1, 10)

        hero.position = cc.v3(100, -100, 0)

        
    }

    // update (dt) {}
}
