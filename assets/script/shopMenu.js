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
        // },

        //menu panel 
        shopBtn: cc.Node,
        cross: cc.Sprite,
        petTypeBtn: cc.Node,
        dishTypeBtn: cc.Node,
        setTypeBtn: cc.Node,
        pet: cc.Node,
        dish: cc.Node,
        set: cc.Node,

        //pet property panel
        petPropertyPanel: cc.Node,

        goldWarning: cc.Node, //gold not enough warning
        eatFoodWarning: cc.Node, //只能选择一种食物
    },

    // // LIFE-CYCLE CALLBACKS:
    shopping(sender, inform) {
        //buy keji
        if (inform === "keji") {
            if (game.goldValue - 100 < 0) {
                console.log("value not enough")
                this.showGoldWarningDialog("gold")
            } else {
                game.goldValue -= 100
                game.gold.string = game.goldValue
            }
        }

        //buy icecream
        for (let i = 0; i < 4; i++) {
            if (inform === this.goodName[i]) {
                cc.log(inform)
                if (game.goldValue - this.goodValue[i] < 0) {
                    console.log("value not enough")
                    this.showGoldWarningDialog("gold")
                } else {
                    game.goldValue -= this.goodValue[i]
                    game.gold.string = game.goldValue
                    game.spawnGoods(this.goodName[i])
                    game.saveGold() //更改金币记录
                }
                break
            }
        }
    },



    //gold warning
    showGoldWarningDialog(str) {
        if (str === "gold") {
            this.goldWarning.active = true
        } else if (str === "eatFood") {
            this.eatFoodWarning.active = true
            cc.log("malimali")
        }
    },

    hideGoldWarningDialog(str) {
        this.goldWarning.active = false
    },

    hideFoodWarningDialog() {
        this.eatFoodWarning.active = false
    },



    //shop menu and cross button 
    btn_callback(sender, infm) {
        if (infm === "shop") {
            this.shopBtn.active = true
        } else if (infm === "shopCross") {
            this.shopBtn.active = false
        } else if (infm === "petTypeBtn") {
            this.change(0)
        } else if (infm === "dishTypeBtn") {
            this.change(2)
        } else if (infm === "setTypeBtn") {
            this.change(1)
        }
    },

    //menu panel显现 btn 位置改变
    change(num) {
        for (let i = 0; i < 3; i++) {
            if (num === i) {
                this.panel[i].active = true
                this.btn[i].y = 385
            } else {
                this.panel[i].active = false
                this.btn[i].y = 407
            }
        }
    },


    onLoad() {
        window.shopMenu = this

        this.panel = [this.pet, this.set, this.dish]
        this.btn = [this.petTypeBtn, this.setTypeBtn, this.dishTypeBtn]
        this.goodName = ["icecream", "coka", "bearCookies", "strawberryCookie"]
        this.goodValue = [5, 4, 15, 10]
            // console.log(this.goodValue[1])

        // this.GOODS = [{
        //     icecream: {
        //         intro: 'icecream',
        //         picUrl: './icecream',
        //     }
        // }]

    },

    start() {

    },

    // update (dt) {},
});