// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html


import {calc_angle} from "./GlobalFunc"

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Sprite)
    bullet: cc.Sprite = null;

    // @property
    // text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    setAngle(_angle:number)
    {   
        this.bullet.node.rotation = _angle
    }

    activeActive(pos:cc.Vec2, endpos:cc.Vec2)
    {
        let angle = calc_angle(pos, endpos)

        this.setAngle(angle)
        this.node.setPositionpos


        cc.tween(this).to({
            
        })
        


    }
    start () {

    }

    


    // update (dt) {}
}
