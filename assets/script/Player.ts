// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html


export default class Player{

    static __instance:Player = null

    static getInstance():Player
    {
        if(!Player.__instance)
        {
            Player.__instance = new Player()
        }
        return Player.__instance
    }
    
    private constructor(){

    }

    // 属性
    lv:number = 1
    nickname:string = ''
    // 拥有的英雄
    have_hero:Array<number> = []

    // 当前上阵的英雄
    fight_hero:Array<number> = [2001, 2002, 2003, 2004]

    add_fight_hero(hero_id:number)
    {
        // 检测是否存在
        let checkIn = false
        this.fight_hero.forEach(id=>{
            if(id == hero_id)
            {
                checkIn = true 
            }
        })
        if(checkIn == false)
        {
            this.fight_hero.push(hero_id)
        }
    }
    // 删除选定id
    del_fight_hero(hero_id:number)
    {
        for(let i = 0; i < this.fight_hero.length; i++)
        {
            if(hero_id == this.fight_hero[i])
            {
                this.fight_hero.splice(i, 1)
                break
            }
        }
    }



} 