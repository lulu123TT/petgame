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
        goldWarning: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    shopping(sender, inform) {

        //buy keji
        if (inform === "keji") {
            if (game.goldValue - 100 < 0) {
                console.log("value not enough")
                this.showGoldWarningDialog()
            } else {
                game.goldValue -= 100
                game.gold.string = game.goldValue
            }
        }

        //buy icecream
        if (inform === "icecream") {
            if (game.goldValue - 5 < 0) {
                console.log("value not enough")
                this.showGoldWarningDialog()
            } else {
                game.goldValue -= 5
                game.gold.string = game.goldValue
                this.initInfo('icecream')
            }
        }
    },

    //gold warning
    showGoldWarningDialog() {
        this.goldWarning.active = true
    },

    hideGoldWarningDialog() {
        this.goldWarning.active = false
    },

    //背包资源加载
    initInfo(info) {
        // 图片
        var self = this;
        cc.resources.load(info['picUrl'], cc.SpriteFrame, function(err, spriteFrame) {
            self.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        });

        // 介绍
        this.node.intro = info['intro'];
        console.log('load success')
    },

    // onLoad () {},

    start() {

    },

    // update (dt) {},
});