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

    },

    // // LIFE-CYCLE CALLBACKS:


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

        const GOODS = [{
            name: 'icecream',
            intro: 'icecream',
            picUrl: 'game/menu/icecream',
        }]

    },

    start() {

    },

    // update (dt) {},
});