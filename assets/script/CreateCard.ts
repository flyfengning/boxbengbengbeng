// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;
// const CardModel = "./CardModel"

interface CardModel
{
    dadsadsad:number,
    ddsadsadsa:number,
    dada:number
} 


@ccclass
export default class NewClass extends cc.Component {


    start () {

        if(jsb)
        {   

            let fileUtils = jsb.fileUtils
            
            let str1:CardModel = <CardModel>{}
            str1.dadsadsad = 1
            str1.ddsadsadsa = 2
            str1.dada = 3

            let str = JSON.stringify(str1)
            let path = "E:/flytest/box_beng/assets/resources/herodata/"
            let fileName = path + "creator_txt.json"
            if (fileUtils.isFileExist(fileName))
            {
                cc.log("当前已存在同名文件")
            }
            else
            {
                jsb.fileUtils.writeStringToFile(str, fileName)
            }

        }
        else
        {
            cc.log("-----------------------------没有jsb 浏览器暂时不支持 jsb")
        }

    }

    


}
