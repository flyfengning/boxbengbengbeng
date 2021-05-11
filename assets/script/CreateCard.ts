// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;
const CardModel = "./CardModel"

enum UITYPE_ENUM{
    input,
    checkbox,

}




@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Prefab)
    input_model:cc.Prefab = null

    @property(cc.Prefab)
    check_model:cc.Prefab = null

    onLoad()
    {
        // 
        this.node.on("event_attack", (event)=>{
            cc.log("event_attack event~~~~~", event.getUserData())//  
        }, this)

        this.node.on("open_attack", (event)=>{
            cc.log("open_attack event~~~~~", event.getUserData())//  
            // window.showTips("1111111111")
        }, this)
    }

    addBox(type:UITYPE_ENUM, pos:cc.Vec2, event:string, btn_name)
    {
        let btn_atk = null
        let model = null

        switch(type){
            case UITYPE_ENUM.input:
            {
                btn_atk = cc.instantiate(this.input_model)
                model = btn_atk.getComponent("InputModel")
                break
            }
            case UITYPE_ENUM.checkbox:
            {
                btn_atk = cc.instantiate(this.check_model)
                model = btn_atk.getComponent("CheckBox")
                break
            }
        }

        if(btn_atk && model)
        {
            btn_atk.parent = this.node
            btn_atk.setPosition(pos)
            model.envnt_name = event
            model.btn_name = btn_name
        }
    }

    start () {

        this.addBox(UITYPE_ENUM.input, cc.v2(0, 100), "event_attack", "攻击")
        this.addBox(UITYPE_ENUM.checkbox, cc.v2(100, 100), "open_attack", "打开攻击")
  

    }

    onsave()
    {
        // this.node.on()
        // if(jsb)
        // {   

        //     let fileUtils = jsb.fileUtils
            
        //     let str1:CardModel = <CardModel>{}
        //     str1.dadsadsad = 1
        //     str1.ddsadsadsa = 2
        //     str1.dada = 3

        //     let str = JSON.stringify(str1)
        //     let path = "E:/flytest/box_beng/assets/resources/herodata/"
        //     let fileName = path + "creator_txt.json"
        //     if (fileUtils.isFileExist(fileName))
        //     {
        //         cc.log("当前已存在同名文件")
        //     }
        //     else
        //     {
        //         jsb.fileUtils.writeStringToFile(str, fileName)
        //     }

        // }
        // else
        // {
        //     cc.log("-----------------------------没有jsb 浏览器暂时不支持 jsb")
        // }
    }

    


}
