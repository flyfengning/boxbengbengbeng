// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Layout)
    map_bg:cc.Layout = null;

    // @property()
    @property(cc.Prefab)
    hero:cc.Prefab = null

    @property(cc.Prefab)
    emety:cc.Prefab = null

    @property({type:cc.Button, displayName:"添加一个英雄按钮"})
    btn_addhero:cc.Button = null

    @property({type:cc.Label, displayName:"金币数"})
    gold_num_label:cc.Label = null

    @property({type:cc.Label, displayName:"生成英雄金币数"})
    gener_num_label:cc.Label = null

    @property({type:[cc.Node]})
    hero_bg:Array<cc.Node> = []

    @property({type:cc.Layout})
    result_bg:cc.Layout = null

    // 英雄取值范围
    public hero_range:Array<number> = []
    // 英雄列表(@注意不是顺序的，中间有空的)
    public hero_list:Array<cc.Node> = []
    // 怪物列表
    public enemy_list:Array<cc.Node> = []
    // 地图块列表
    public map_list:Array<cc.Node> = []
    // 间隔时间
    public interval_time:number = 20
    // 波数
    public group_count:number = 0

    // 总金币数
    _gold_num:number = 10
    // 生成所需要数
    _genner_num:number = 10
    //生成之后增加的金币数
    _genner_add_num:number = 10
    // 每个敌人(小怪)多少钱
    _enemy_s_gold = 10
    // 每个敌人(精英)多少钱
    _enemy_m_gold = 10    
    // 每个敌人(boss)多少钱
    _enemy_b_gold = 10

    set gold_num(_num:number)
    {
        this._gold_num = _num
        this.gold_num_label.string = (String(this._gold_num))
    }
    get gold_num():number
    {
        return this._gold_num
    }
    set genner_num(_num:number)
    {
        this._genner_num = _num
        this.gener_num_label.string = (String(this._genner_num))
    }
    get genner_num():number
    {
        return this._genner_num
    }

    add_gold_num(num:number)
    {
        this.gold_num += num
    }

    sp_Atlas:cc.SpriteAtlas = null
    start () {
        cc.resources.load("node/nodes", cc.SpriteAtlas, ((error, sp_atlas)=>{
            if(!error)
            {
                this.sp_Atlas = sp_atlas
                cc.log("----------------加载完毕node/nodes")
            }
        }).bind(this))

        this.hero_range.push(2001)
        this.hero_range.push(2002)
        this.hero_range.push(2003)
        this.hero_range.push(2004)
        this.init_map()
        this.gold_num = 10
        this.start_emety()
    }

    init_map()
    {        // 初始化地图
        for(let i = 0; i <= 10; i++)
        {
            let mapNode = this.map_bg.node.getChildByName("f" + i)  
            this.map_list.push(mapNode)
            if (i % 2 == 0)
            {
                mapNode.opacity = 120
            }
        }

        this.btn_addhero.node.on(cc.Node.EventType.TOUCH_END, (()=>{

            // 金币不足
            // if(this.gold_num < this.genner_num )
            // {
            //     cc.log("金币不足")
            //     return
            // }
            let index = Math.floor(Math.random()*100 % this.hero_range.length)
            // 从地图里面随机取出一个空位
            let key = []
            for(let i = 0; i < this.hero_bg.length; i++)
            {
                if (!this.hero_list[i])
                {
                    key.push(i)
                }
            }
            if(key.length > 0)
            {
                let index1 = Math.floor(Math.random()*100 % key.length)
            
                this.addOneHero(this.hero_range[index], key[index1])
    
                // 金币
                this.add_gold_num(this._genner_num * -1)
                this.genner_num += this._genner_add_num
            }


        }).bind(this))
    }

    start_emety()
    {
        // 计时开始怪物
        cc.tween(this)
            .call((()=>{
                this.addListEnemy()
            }).bind(this))
            .delay(this.interval_time)
            .union()
            .repeatForever()
            .tag(123)
            .start()
    }

    getBeginPos():cc.Vec2
    {
        let pos = this.map_list[0].getPosition()
        return pos
    }

    // 生成一波怪物
    addListEnemy()
    {
        let list:Array<number> = [1001, 1002, 1003, 1004, 1005]
        // 当前的波数
        this.group_count ++;
        let pos:cc.Vec2 = this.getBeginPos()
        let temp = []
        for(let i = 0; i < list.length; i++)
        {
            let node = this.addOneEnemy(list[i], pos)
            temp.push(node)
        }
        // 开始移动到终点
        this.sequence_move(temp)
    }

    addOneEnemy(id:number, pos?:cc.Vec3|cc.Vec2):cc.Node
    {
        let emety1 = cc.instantiate(this.emety)
        emety1.parent = this.map_bg.node
        this.enemy_list.push(emety1)

        emety1.zIndex = 20
        let sc = emety1.getComponent("enemy")
        sc.setMap(this)
        emety1.setPosition(pos == null?this.getBeginPos():pos)
        emety1.active = false
        sc.loadDataByID(id, this.group_count)

        return emety1
    }

    sequence_move(temp_list)
    {
        temp_list.forEach((emety, index) => {
            let node = emety
            if(node.active == false)
            {
                let idx = index
                let sc = node.getComponent("enemy")
                // node.setPosition(p1)
                let nowIndex = 0
                let p1 = this.map_list[nowIndex].getPosition()
                let p2 = this.map_list[++nowIndex].getPosition()
                
                node.scale = 0.5
                let getNext = (()=>{
                    let tempindex = nowIndex + 1
                    if(!this.map_list[tempindex])
                    {   // 结束了
                        // cc.log("有怪物到达了终点", sc.tag_key)
                        this.stopGame()
                        return
                    }
                    let p1 = node.getPosition()
                    let p2 = this.map_list[++nowIndex].getPosition()
                    sc.move(p1, p2, getNext)
                }).bind(this)
            
                cc.tween(node).delay((idx)*1.3).call(()=>{
                    // 显示出来
                    node.active = true
                    cc.tween(node).to(0.2, {scale:0.8}).start()  //缩放效果
                    sc.move(p1, p2, getNext)
                }).start()
            }
            else
            {
                cc.log("---------------------------------")
            }
        });
    }

    // id和位置
    addOneHero(id:number, index:number)
    {
        let pos = this.hero_bg[index].getPosition()
        let w_p = this.hero_bg[index].getParent().convertToWorldSpaceAR(pos)
        
        let hero = cc.instantiate(this.hero) 
        hero.parent = this.map_bg.node
        let sc1 = hero.getComponent("hero")
        // hero.active = false
        sc1.setMap(this)
        sc1.loadDataByID(id)
        hero.setPosition(this.map_bg.node.convertToNodeSpaceAR(w_p))

        this.hero_list[index] = hero
    }

    kill_enemy(enemy)
    {
        for(let i = 0; i < this.enemy_list.length; i++)
        {
            if(this.enemy_list[i] == enemy.node)
            {
                this.enemy_list.splice(i, 1)
                break
            }
        }
        enemy.node.removeFromParent()// 需要从列表里面删除

        this.add_gold_num(this._enemy_s_gold)

    }

    // 停止游戏
    stopGame()
    {   
        // 停止动作
        this.enemy_list.forEach((enemy)=>{
            cc.Tween.stopAllByTarget(enemy)
        })
        // 停止hero动作
        this.hero_list.forEach((hero)=>{
            cc.Tween.stopAllByTarget(hero)
        })
        // 停止生成
        

        this.showResult()
    }

    showResult()
    {
        this.result_bg.node.active = true
        let result = this.result_bg.getComponent("Result")
    }

    // update (dt) {}
}
