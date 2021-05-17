// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

import UIModel from "./UIModel"

@ccclass
export default class NewClass extends UIModel {

    @property(cc.EditBox)
    input_:cc.EditBox = null

    getUserData()
    {
        return this.input_.string
    }

    set string(_str)
    {
        this.input_.string = _str
    }

    get string()
    {
        return this.input_.string
    }

    // 定义下回调属性
    start () {

    }

}
