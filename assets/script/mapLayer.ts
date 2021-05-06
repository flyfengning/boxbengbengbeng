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

    public map_list:Array<cc.Node> = []

    start () {
        for(let i = 0; i <= 10; i++)
        {
            let mapNode = this.map_bg.node.getChildByName("f" + i)  
            this.map_list.push(mapNode)
            if (i % 2 == 0)
            {
                mapNode.opacity = 120
            }
        }
        // this.addOneEnemy(1002, cc.v3(150, 100, 0))
        // this.addOneEnemy(1001, cc.v3(50, 100, 0))
        for(let i = 0; i < 5; i++)
        {
            this.addOneEnemy(1001, cc.v3(0, 0, 0))
        }

        this.addOneHero(2001, cc.v3(100, -100, 0))
        this.addOneHero(2002, cc.v3(0, -100, 0))
        this.sequence_move()
    }

    addOneEnemy(id:number, pos?:cc.Vec3)
    {
        let emety1 = cc.instantiate(this.emety)
        emety1.parent = this.map_bg.node
        this.emety_list.push(emety1)

        emety1.zIndex = 20

        let sc = emety1.getComponent("enemy")
        emety1.position = pos == null?cc.v3(150, 100, 0):pos
        emety1.active = false

        sc.loadDataByID(id)
    }

    sequence_move()
    {
        this.emety_list.forEach((emety, index) => {
            let node = emety
            let idx = index
            let sc = node.getComponent("enemy")
            // node.setPosition(p1)
            let nowIndex = 0
            let p1 = this.map_list[nowIndex].getPosition()
            let p2 = this.map_list[++nowIndex].getPosition()
    
            let getNext = (()=>{
                let tempindex = nowIndex + 1
                cc.log("nowIndex", index, tempindex)
                if(!this.map_list[tempindex])
                {   // 结束了
                    cc.log("结束了所有的动作", idx)
                    return
                }
                let p1 = node.getPosition()
                let p2 = this.map_list[++nowIndex].getPosition()
                sc.move(p1, p2, getNext)
            }).bind(this)
            cc.log("index", idx)
            
            cc.tween(node).delay(idx*0.5).call(()=>{
                sc.move(p1, p2, getNext)
            }).start()
            
        });

    }

    addOneHero(id:number, pos?:cc.Vec3)
    {
        let hero = cc.instantiate(this.hero) 
        hero.parent = this.map_bg.node
        let sc1 = hero.getComponent("hero")
        hero.active = false
        sc1.setMap(this)
        sc1.loadDataByID(id)
        hero.position = pos == null?cc.v3(0, -100, 0):pos
    }



    // update (dt) {}
}
