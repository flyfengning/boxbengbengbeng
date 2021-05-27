// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;
import { GAME } from "./GameDefine";
import Player from "./Player"
import Tips from "./Tips"


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

    // 第几波
    @property({type:cc.Label})
    group_label:cc.Label = null

    // 当前选择的英雄
    select_hero:cc.Node = null
    select_index:number = -1

    // 英雄取值范围
    public hero_range:Array<number> = Player.getInstance().fight_hero
    // 英雄node列表(@注意不是顺序的，中间有空的)
    public hero_list:Array<cc.Node> = []
    // 怪物列表
    public enemy_list:Array<cc.Node> = []
    // 地图块列表
    public map_list:Array<cc.Node> = []
    // 间隔时间
    public interval_time:number = 30
    // 现在统计的时间
    public timeCount:number = 0;
    // 波数(对于怪物来说这是lv)
    public group_count:number = 0
    // 伤害统计
    public HitCountData:GAME.HitCountData = {
        target_attack:new Map(),
        all_attack:0,
        crit_count:0
    }
    // 总金币数
    _gold_num:number = GAME.start_gold
    // 生成所需要数
    _genner_num:number = GAME.genter_gold
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

        // this.btn_addhero
        if(this._gold_num >= this.genner_num)
        {
            this.btn_addhero.interactable = true
        }
        else
        {
            this.btn_addhero.interactable = false
        }

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
        this.node.height = cc.winSize.height
        this.node.width = cc.winSize.width
        cc.resources.load("node/node", cc.SpriteAtlas, ((error, sp_atlas)=>{
            if(!error)
            {
                this.sp_Atlas = sp_atlas
                cc.log("----------------加载完毕node/nodes")
            }
        }).bind(this))
        this.init_map()
  
        this.reset_game()
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
            if(this.gold_num < this.genner_num )
            {
                cc.log("金币不足")
                Tips.showTips("金币不足")
                return
            }
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
        this.timeCount = this.interval_time - 5 // 第一次是5s出兵
        cc.tween(this)
            .call((()=>{
                this.timeCount++;
                if (this.timeCount >= this.interval_time)
                {
                    this.timeCount = 0
                    this.addListEnemy()
                }
            }).bind(this))
            .delay(1)
            .union()
            .repeatForever()
            .tag(123)
            .start()
    }

    // 设置时间， 更改2s之后开始下一波
    next_emety()
    {   
        this.timeCount = this.interval_time - 2
    }

    stop_emety()
    {
        cc.Tween.stopAllByTarget(this)
    }

    getBeginPos():cc.Vec2
    {
        let pos = this.map_list[0].getPosition()
        return pos
    }

    set_group_label()
    {
        this.group_label.string = "第" + this.group_count + "波"
    }

    // 生成一波怪物
    addListEnemy()
    {
        let list:Array<number> = [1001, 1002, 1003, 1004, 1005]
        let bigBoss:Array<number> =  [9001]
        // let list:Array<number> = [1001]
        // 当前的波数
        this.group_count ++;
        this.set_group_label()  


        if(this.group_count >= 10)
        {   
            // 超过10层， 超过的波数每5波增加数量1
            for(let i = 0; i < this.group_count/5-1; i++)
            {
                let index = Math.floor(Math.random() * 100) % 5
                list.push(list[index]) 
            }
        }

        let pos:cc.Vec2 = this.getBeginPos()
        let temp = []

        // 大boss出现的时机
        if(this.group_count % GAME.map_bigboss_group == 0)
        {
            for(let i = 0; i < bigBoss.length; i++)
            {
                let node = this.addOneEnemy(bigBoss[i], pos)
                temp.push(node)
            }
        }
        else
        {
            for(let i = 0; i < list.length; i++)
            {
                let node = this.addOneEnemy(list[i], pos)
                temp.push(node)
            }
        }

        // 开始移动到终点
        this.sequence_move(temp)
    }
    // 添加一个怪物
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

    count_hit(HitData:GAME.HitData)
    {
        if (!this.HitCountData.target_attack.get(HitData.target.id))
        {
            this.HitCountData.target_attack.set(HitData.target.id, HitData.hit_damage)
        }
        else
        {
            let num = this.HitCountData.target_attack.get(HitData.target.id) + HitData.hit_damage
            this.HitCountData.target_attack.set(HitData.target.id, num)
        }
        
        this.HitCountData.all_attack += HitData.hit_damage
        this.HitCountData.crit_count += HitData.is_crit?1:0
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

                sc.is_die = true
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
            
                cc.tween(node).delay((idx)*1.5).call(()=>{
                    sc.is_die = false
                    // 显示出来
                    node.active = true
                    sc.move(p1, p2, getNext)
                }).to(0.2, {scale:0.8})
                .start()
            }
            else
            {
                cc.log("---------------------------------")
            }
        });
    }

    // 获取hero的位置
    getHeroPos(index:number){
        let pos = this.hero_bg[index].getPosition()
        let w_p = this.hero_bg[index].getParent().convertToWorldSpaceAR(pos)

        return this.map_bg.node.convertToNodeSpaceAR(w_p)
    }

    // id和位置
    addOneHero(id:number, index:number, lv:number = 1)
    {
        let hero = cc.instantiate(this.hero) 
        hero.scale = 0.2
        cc.tween(hero).to(0.2,{scale:1}).start()
        hero.parent = this.map_bg.node
        let sc1 = hero.getComponent("hero")
        // hero.active = false
        sc1.setMap(this)
        sc1.loadDataByID(id, lv)
        hero.setPosition(this.getHeroPos(index))

        this.hero_list[index] = hero

        hero.on(cc.Node.EventType.TOUCH_START, ((touches)=>{
            this.on_touch_hero_begin(index)
        }).bind(this))

        hero.on(cc.Node.EventType.TOUCH_MOVE, ((touches)=>{
            this.on_touch_hero_moved(touches)
        }).bind(this))

        hero.on(cc.Node.EventType.TOUCH_END, ((touches)=>this.on_touch_hero_ended(touches)).bind(this))
    }

    on_touch_hero_begin(index:number)
    {
        // select_hero
        this.select_index = index
        this.select_hero = this.hero_list[index]
        this.select_hero.zIndex = 2 // 在所有同节点的上面
    }

    on_touch_hero_moved(touches)
    {
        if(this.select_hero)
        {
            let t_pos = touches.getLocation()
            let pos = this.select_hero.getParent().convertToNodeSpaceAR(t_pos)
            this.select_hero.setPosition(pos)
        }
    }

    //合成
    on_touch_hero_ended(touches)
    {
        if(this.select_hero)
        {   
            let t_pos = touches.getLocation()
            let pos = this.select_hero.getParent().convertToNodeSpaceAR(t_pos)

            let find_index = -1
            // 查看这个点和哪个相交
            for (let i = 0; i < this.hero_bg.length; i++)
            {
                // 查看当前是否有英雄
                if(this.hero_list[i] != null && i != this.select_index)
                {
                    let _tpos = this.hero_bg[i].convertToNodeSpaceAR(t_pos)
                    let _r = new cc.Rect(this.hero_bg[i].width/2*-1, this.hero_bg[i].height/2*-1, this.hero_bg[i].width+5, this.hero_bg[i].height+5)
                    let check = _r.contains(_tpos)
                    if(check)
                    {
                        find_index = i
                        break
                    }
                }
            }

            if(find_index != -1)
            {
                // 合成
                if (!this.composite_hero(find_index, this.select_index))
                {
                    // 重新归位          
                    this.select_hero.setPosition(this.getHeroPos(this.select_index))
                    this.select_hero.zIndex = 0
                }
            }
            else
            {
                this.select_hero.setPosition(this.getHeroPos(this.select_index))
                this.select_hero.zIndex = 0
            }
        }
        this.select_hero = null // 置空
        this.select_index = -1
    }

    // 合成两个节点
    composite_hero(index1, index2):boolean
    {   
        
        let node1 = this.hero_list[index1]
        let node2 = this.hero_list[index2]
        let lv1 = node1.getComponent("hero").lv
        let lv2 = node2.getComponent("hero").lv

        let id1 = node1.getComponent("hero").id
        let id2 = node2.getComponent("hero").id

        if(lv1 == lv2 && id1 == id2)
        {
            this.hero_list[index1] = null
            node1.removeFromParent()

            this.hero_list[index2] = null
            node2.removeFromParent()

            // 随机出来一个id
            let index = Math.floor(Math.random()*100 % this.hero_range.length)
            let id = this.hero_range[index]

            this.addOneHero(id, index1, lv1 + 1)

            return true
        }
        else // tips 提示
        {
            // cc.log("-----------合成失败, 合成需要等级相同和id相同")
            if(id1 != id2)
            {
                Tips.showTips("合成需要两个同类型的英雄")
            }
            else if (lv1 != lv2)
            {
                Tips.showTips("合成需要两个同等级的英雄")
            }
            return false
        }
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

        // 查看是否还有怪物
        if(this.enemy_list.length == 0)
        {
            this.next_emety()
        }
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
        this.stop_emety()
        // 结算界面
        this.showResult()
    }

    // 重新开始游戏
    reset_game()
    {
        this.group_count = 0
        this.set_group_label()
        // 清空所有的炮台
        this.enemy_list.forEach((enemy, index)=>{
            enemy.destroy()
        })
        this.enemy_list = []

        this.hero_list.forEach((hero, index)=>{
            if (hero)
            {
                hero.destroy()
            }
            else
            {
                // cc.log('没有找到hero', index)
                Tips.showTips('没有找到hero id:' + index)
            }
        })
        this.hero_list = []
        // 开始出兵
        this.start_emety()

        // 初始化生成金币
        this.genner_num = GAME.genter_gold 
        // 初始化金币
        this.gold_num = GAME.start_gold

        this.resetCountData()
    }

    // 清空本局统计    
    resetCountData()
    {
        this.HitCountData.all_attack = 0
        this.HitCountData.crit_count = 0
        this.HitCountData.target_attack = new Map()
    }

    showResult()
    {
        this.result_bg.node.active = true
        let result = this.result_bg.getComponent("Result")

        // result
        result.btn_again.node.on(cc.Node.EventType.TOUCH_END, (()=>{
            this.result_bg.node.active = false
            this.reset_game()
        }).bind(this))

        result.score.string = Math.floor(this.HitCountData.all_attack) + ""
    }

    // update (dt) {}
}
