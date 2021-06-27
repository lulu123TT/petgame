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
        // friendPanel: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.clickgood = this.node.getComponent(cc.Sprite)
            // cc.log(this.clickgood)
        var clickEventHandler = new cc.Component.EventHandler();
        //目标节点
        clickEventHandler.target = this.node;
        //脚本名称
        clickEventHandler.component = "friend";
        //添加回调函数
        clickEventHandler.handler = "onRoleListBtnClick";
        let button = this.node.getComponent(cc.Button);
        //响应事件
        button.clickEvents.push(clickEventHandler);
    },

    //回调函数
    onRoleListBtnClick(event) {
        let friendName = this.node.parent.name

        //获取父母节点   getid 渲染
        const query = Bmob.Query('player')
        for (let i = 0; i < playerInfo.friendsNum; i++) {
            query.get(playerInfo.friend[i]).then(res => {
                let name = res.name
                if (name === friendName) {
                    //更改playerInfo的对应的值
                    friendInfo.id = res.objectId
                    friendInfo.name = res.name
                    friendInfo.gold = res.gold
                    friendInfo.level = res.level
                    friendInfo.moodValue = res.moodValue
                    friendInfo.physicalValue = res.physicalValue
                    friendInfo.cleanValue = res.cleanValue
                    friendInfo.icecream = res.icecream
                    friendInfo.coka = res.coka
                    friendInfo.bearCookies = res.bearCookies
                    friendInfo.strawberryCookie = res.strawberryCookie
                    friendInfo.friend = res.friend // res.save()
                        //初始化资源
                    game.initValue(playerInfo, friendInfo)
                        // game.initBag()
                        // game.initFriend()
                }

            }).catch(err => {
                console.log(err)
            })
        }
        // game.friendPanel.active = false
    },


    start() {

    },

    // update (dt) {},
});