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

        shopBtn: cc.Node,
        cross: cc.Sprite,
        petTypeBtn: cc.Node,
        dishTypeBtn: cc.Node,
        setTypeBtn: cc.Node,
        pet: cc.Node,
        dish: cc.Node,
        set: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:
    shopping(sender, inform) {
        if (inform === "keji") {
            this.game.goldValue -= 10;
            this.game.gold.string = this.game.goldValue;
        }
    },


    shopBtn_callback(sender, infm) {
        if (infm === "shop") {
            this.shopBtn.active = true
        } else if (infm === "cross") {
            this.shopBtn.active = false
        } else if (infm === "petTypeBtn") {
            this.petTypeBtn.y = 385
            this.dishTypeBtn.y = 407
            this.setTypeBtn.y = 407
            this.pet.active = true
            this.set.active = false
            this.dish.active = false
        } else if (infm === "dishTypeBtn") {
            this.petTypeBtn.y = 407
            this.dishTypeBtn.y = 385
            this.setTypeBtn.y = 407
            this.pet.active = false
            this.set.active = false
            this.dish.active = true
        } else if (infm === "setTypeBtn") {
            this.petTypeBtn.y = 407
            this.dishTypeBtn.y = 407
            this.setTypeBtn.y = 385
            this.pet.active = false
            this.set.active = true
            this.dish.active = false
        }
    },
    // onLoad () {},

    start() {

    },

    // update (dt) {},
});