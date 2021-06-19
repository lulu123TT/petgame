// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // myicecream: cc.Sprite,
        spa_food: cc.SpriteAtlas,

        pet: cc.Node,

        eatfood: cc.Prefab,
        // },
    },




    // LIFE-CYCLE CALLBACKS:
    selectGood(sender, info) {
        if (info === "icecream") {
            this.food = this.pet.getChlidByName("food")
                // cc.log(this.ice)
            this.ice.getComponent(cc.Sprite).spriteFrame = this.spa_food.getSpriteFrame('kele')

            // cc.log("success")
        }
    },


    onLoad() {
        window.myGoods = this

        this.foodFrame = ['icecream', 'coka', 'strawberryCookie', 'bearCookies']
        this.realFoodFrame = ['ice', 'kele', 'cookiesbar', 'bearcook']


        this.clickgood = this.node.getComponent(cc.Sprite)
            // cc.log(this.clickgood)
        var clickEventHandler = new cc.Component.EventHandler();
        //目标节点
        clickEventHandler.target = this.node;
        //脚本名称
        clickEventHandler.component = "myGoods";
        //添加回调函数
        clickEventHandler.handler = "onRoleListBtnClick";
        let button = this.node.getComponent(cc.Button);
        //响应事件
        button.clickEvents.push(clickEventHandler);


    },

    //回调函数
    onRoleListBtnClick(event) {
        // cc.log(game.eatFlag)
        if (!game.eatFlag) {
            return
        }
        game.isChose += 1 //在背包中选择

        if (game.isChose === 1) {
            let good = cc.instantiate(this.eatfood)
            game.pet.addChild(good)
            for (let i = 0; i < 4; i++) {
                //获取eatfood
                if (this.foodFrame[i] === this.clickgood.spriteFrame.name) {
                    //对应good num 减少
                    game.goodNameNum[this.foodFrame[i]] -= 1
                    let num = game.goodNameNum[this.foodFrame[i]]
                    game.saveFood(this.foodFrame[i]) //在playerInfo 中保存食物数量
                    cc.log(num)
                    if (num === 0) {
                        game.goodNum = 0 //位置计数改为0
                        game.goodPanel.getChildByName(this.foodFrame[i]).destroy() //!!
                        this.reLoadBag()
                    }
                    game.setLabel(this.foodFrame[i]) //背包数量Label

                    good.getComponent(cc.Sprite).spriteFrame = this.spa_food.getSpriteFrame(this.realFoodFrame[i])
                }
            }
            good.setPosition(cc.v2(0, -50))
        } else {
            shopMenu.showGoldWarningDialog("eatFood")
        }
    },

    //重新渲染背包
    reLoadBag() {
        for (let j = 0; j <= 4; j++) {
            let remanGood = game.goodPanel.getChildByName(this.foodFrame[j])
            let nums = game.goodNameNum[this.foodFrame[j]]
            if (nums > 0) {
                remanGood.setPosition(game.setGoodPosition())
            }
        }
    },


    start() {

    },

    // update (dt) {},
});