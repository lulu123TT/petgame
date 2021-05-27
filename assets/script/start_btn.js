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
        setting: cc.Node,
        // game: cc.SceneAsset,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        // cc.director.preloadScene("game", function() {
        //     cc.log("Next scene preloaded");
        // });
    },


    btn_callback(sender, infm) {
        if (infm === "start") {
            console.log("start");
            cc.director.loadScene("scenes/game");
        } else if (infm === "set") {
            this.setting.active = true;
        } else if (infm === "cross") {
            this.setting.active = false;
        }
    },

    start() {

    },

    // update (dt) {},
});