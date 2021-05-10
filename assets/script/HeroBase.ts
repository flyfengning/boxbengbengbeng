
// hearBase.ts
// create by fnn


// 关于技能的枚举
const enum SKILL_TYPE{
    //  
    skill_1 = 0,
};

const {ccclass, property} = cc._decorator;



let key = 1
const getkey = ()=>{
    return key++
}

const HeroDataManger:Map<string, any> = new Map()

@ccclass
export default class HeroBase extends cc.Component
{
    public tag_key:number = -1;

    ////////////////////////////基础属性//////////////////////////
    // 血量
    private blood_num_base:number = 0
    // 攻击力
    private attack_num_base:number = 0
    // 防御力
    private defense_num_base:number = 0
    // 攻击速度 次/s
    private attack_speed_base:number = 0
    // 暴击几率
    private attack_Crit_base:number = 0

    ////////////////////////////公用属性//////////////////////////
    // 怪物名字
    public name:string = ""
    // 血量
    public blood_num:number = 0
    // 攻击力
    public attack_num:number = 0
    // 防御力
    public defense_num:number = 0
    // 是否死亡
    public is_die:boolean = false;
    // 拥有的技能
    public skill_list:Array<SKILL_TYPE> = [];
    // 攻击速度 次/s
    public attack_speed:number = 0
    // 等级
    public lv_num:number = 0;
    // 星级
    public star_num:number = 0;
    // 星级加成(攻击)
    star_addition_blood:number = 10


    ////////////////// 移动属性
    // 移动速度
    public move_speed:number = 0
    // 减速属性
    public move_retard:number = 0

    /***************提供给子类（需要继承）的属性***********************/
    map = null

    @property({type:cc.Sprite})
    head_img:cc.Sprite = null
    /***************************************************************/


    public set lv(_lv)
    {   
        this.lv_num = _lv
    }

    public get lv()
    {
        return this.lv_num
    }

    public set star(_star:number)
    {   
        this.star_num = _star
    }

    public get star()
    {
        return this.star_num
    }

    // 血量
    private get blood()
    {
        return this.blood_num
    }
    private set blood(_blood:number)
    {
        this.blood_num = _blood
    }
    // 攻击力
    private get attack()
    {
        return this.attack_num
    }

    private set attack(_attack:number)
    {
        this.attack_num = _attack
    }

    loadDataByID(id:number, lv:number = 1, star:number = 1)
    {  
        this.tag_key = getkey()
        // cc.log("this.tag_key", this.tag_key)

        let resPath = ""
        if (Math.floor(id/1000) == 2)
        {
            resPath = "herodata/hero_" + String(id)
        }
        else
        {
            resPath = "herodata/enemy_" + String(id)
        }

        let headPath = "node/fight_" + String(id)

        if(this.map.sp_Atlas)
        {
            let headName = "fight_" + String(id)
            let spriteFrame = this.map.sp_Atlas.getSpriteFrame(headName)
            if(this.head_img && spriteFrame)  // 子类需要实现， base里面是个空节点
            {
                this.head_img.spriteFrame = spriteFrame
            }
            else
            {
                cc.log("spriteFrame is not find", spriteFrame)
            }
        }
        else
        {
            cc.resources.load(headPath, cc.SpriteFrame, ((error, spriteFrame)=>{
                if(spriteFrame)
                {
                    // cc.
                    if(this.head_img)  // 子类需要实现， base里面是个空节点
                    {
                        this.head_img.spriteFrame = spriteFrame
                    }
                }
            }).bind(this))
        }

        let load = ((jdata)=>{
            let data = jdata.json
            this.resetHero(data.blood_num, data.attack_num, data.defense_num, data.attack_speed, lv, star)
            this.name = data.name?data.name:"未知名字"
            // 预设速度
            this.move_speed = data.move_speed ? data.move_speed:0
            // 减速
            this.move_retard = 0
            this.refush()
        }).bind(this)

        if(HeroDataManger.has(resPath))
        {
            let jdata = HeroDataManger.get(resPath)
            load(jdata)
        }
        else
        {
            cc.resources.load(resPath, cc.JsonAsset, ((error, jdata)=>{
                HeroDataManger.set(resPath, jdata)
                if(error)
                {
                    cc.log(error)
                }
                else
                {
                    load(jdata)
                }
            }).bind(this))
        }
    }
    // 主动刷新界面

    refush()
    {
        // 需要主动刷新界面显示   
    }

    // 设置减速
    set_retard(_retard:number, time:number)
    {
        this.move_retard = _retard
    }
    // 设置百分比减速
    set_retard_scale(_retard:number, time:number)
    {
        try {
            _retard >= 0 && _retard <= 1
        } catch (error) {
            cc.log("set_retard_scale _retard must > 0 and _retard < 1", _retard)
        }
        let sub_retard = this.move_speed * _retard
        this.set_retard(sub_retard, time)
    }

    // blood血量  attack攻击力 defense防御力 attack_speed攻击速度
    resetHero(blood:number, attack:number, defense:number, attack_speed:number, lv:number=1, star:number=1)
    {
        // 这个是基数属性
        this.blood_num_base = blood
        this.attack_num_base = attack
        this.defense_num_base = defense
        this.attack_speed_base = attack_speed 
        this.lv = lv
        this.star = star
        // 重新计算属性
        this.calculate_property()
    }

    //重新计算属性
    calculate_property()
    {
        // 计算公式  基础*等级+星级加成
        this.blood = this.blood_num_base * this.lv + this.star * this.star_addition_blood 
        this.attack =  this.attack_num_base * this.lv + this.star * this.star_addition_blood 
        this.defense_num = this.defense_num_base + this.lv *2 // 成长属性太高了
        this.attack_speed = this.attack_speed_base * this.lv // 攻速注意设置上限
    }

    onLoad()
    {

    }

    start()
    {
        
    }

    // 受击
    on_hit_base(hit_number:number)
    {
        if(this.is_die)
        {
            return 
        }
        hit_number -= this.defense_num
        hit_number = hit_number < 0? 0 : hit_number
        this.blood -= hit_number
        this.on_hit(hit_number)
        if(this.blood_num< 0)
        {
            this.on_die_base()
        }
    } 

    // 回血
    on_blood_back_base(blood:number)
    {
        this.blood_num += blood
        this.on_blood_back()
    } 

    // 死亡
    on_die_base()
    {
        this.is_die = true
        this.on_die()
    }

    on_hit(hit_number:number){
        cc.log("ERROR:Need to rewrite this method function name: HeroBase:on_hit")
    }
    on_blood_back(){
        cc.log("ERROR:Need to rewrite this method function name: HeroBase:on_blood_back")
    }
    on_die(){
        cc.log("ERROR:Need to rewrite this method function name: HeroBase:on_die")
    }

}
