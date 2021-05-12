// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

// const showTips = (str:string)=>
// {
//     cc.resources.load("Prefab/tips", ((error, prefab)=>{
//         let scene = cc.director.getScene()
//         let tipsnode = cc.instantiate(prefab)
//         tipsnode.parent = scene
//         let Tips = tipsnode.getComponent("Tips")
//         Tips.string = str
//     }).bind(this))
// }
// // window.showTips = showTips
// declare interface Window {
//     $showTips:function =  showTips
// }
// window["showTips"] = showTips

@ccclass
export default class NewClass extends cc.Component {

    // @property(cc.Label)
    // label: cc.Label = null;

    @property(cc.Button)
    start_game: cc.Button = null;


    @property(cc.Button)
    create_card: cc.Button = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        
        this.start_game.node.on(cc.Node.EventType.TOUCH_END, (()=>{
            cc.director.loadScene("FightScene")
        }).bind(this))

        this.create_card.node.on(cc.Node.EventType.TOUCH_END, (()=>{
            cc.director.loadScene("CreatorHeroOrenemy")
        }).bind(this))

    }   

    // update (dt) {}
}
