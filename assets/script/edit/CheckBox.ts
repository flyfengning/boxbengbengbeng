// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

import model from "./UIModel"

@ccclass
export default class NewClass extends model {

    @property(cc.Toggle)
    toggle_node:cc.Toggle = null
    
    getUserData()
    {
        return this.toggle_node.isChecked
    }

    start () {

    }
}
