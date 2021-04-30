// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

import HeroBase from "./HeroBase"


@ccclass
export default class hero extends HeroBase {

    map = null

    // 是否可以攻击
    is_can_attack = true
     
    attack_tag = 65432

    start () {
        let self = this
        // this.resetHero(100, 1, 1, 1)
        cc.tween(this.node).repeatForever(
            cc.tween(this.node).delay(0.1)
            .call(this.findEmety.bind(self))
            .start()
        ).tag(this.attack_tag)
        .start()
        
    }

    setMap(_map)
    {
        this.map = _map
    }


    findEmety()
    {
        if(this.is_can_attack == false)
        {
            return
        }

        let emety:cc.Node = null
        for(let i = 0; i < this.map.emety_list.length; i++)
        {
            emety = this.map.emety_list[i]
            break
        }
        if(emety && emety.getComponent("enemy").is_die == false)
        {
            this.onAttack(emety)
        }
        else
        {
            // this.node.stopActionByTag(this.attack_tag)
            cc.Tween.stopAllByTag(this.attack_tag)
        }
    }

    // 攻击
    onAttack(target:cc.Node)
    {
        if(this.is_can_attack == false)
        {
            return
        }
        target.getComponent("enemy").on_hit_base(this.attack_num)
        
        this.is_can_attack = false
        let self = this
        cc.tween(this.node)
        .delay(1/this.attack_speed)
        .call(function(){
            this.is_can_attack = true
        }.bind(self))
        .tag(123213)
        .start()

        // 本地发射子弹到对方
        // target

    }

    create_one_bullet(target)
    {
        // var onResourceLoaded = function(errorMessage, loadedResource )
        // {
        //     if( !( loadedResource instanceof cc.Prefab ) ) { cc.log( 'Prefab error' ); return; } 
        //     var newMyPrefab = cc.instantiate( loadedResource );
        //     target.addChild( newMyPrefab );
        //     //newMyPrefab.setPosition( 0, 0 );
        //     let pos = this.node
        //     var newMyPrefabScript = newMyPrefab.getComponent( 'showTips' );
        // };
        cc.loader.loadRes('prefabs/tips', ((errorMessage, loadedResource)=>{
            if( !( loadedResource instanceof cc.Prefab ) ) { cc.log( 'Prefab error' ); return; } 
            var newMyPrefab = cc.instantiate( loadedResource );
            target.addChild( newMyPrefab );
            let pos = this.node.getPosition()
            let wpos = this.node.parent.convertToWorldSpace(pos)
            target.convertToNodeSpace()


        }).bind(this) )

    }
    on_hit(hit_number:number){
        cc.log("Hero:on_hit")
    }
    on_blood_back(){
        cc.log("Hero:on_blood_back")
    }
    on_die(){
        cc.log("Hero:on_die")
    }


}
