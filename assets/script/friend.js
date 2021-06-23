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

        for (let i = 0; i < 3; i++) {
            query.get(playerInfo.friend[i]).then(res => {
                let title = game.realfriendPanel.getChildByName(res.name)
                cc.log(title)
                title.destroy()
                title.active = false
                cc.log(cc.isValid(title))
                cc.log(title)
            }).catch(err => {
                console.log(err)
            })
        }

        for (let i = 0; i < 3; i++) {
            query.get(playerInfo.friend[i]).then(res => {
                let name = res.name
                    // game.realfriendPanel.getChildByName(name).destroy()
                if (name === friendName) {

                    //摧毁当前背包资源节点
                    for (let j = 0; j < 4; j++) {
                        game.goodNum = 0 //位置计数改为0
                        game.goodPanel.getChildByName(game.goodTitle[j]).destroy() //!!
                    }

                    cc.log("我的好友")
                    cc.log(res.friend)
                        //更改playerInfo的对应的值
                    playerInfo.id = res.objectId
                    playerInfo.name = res.name
                    playerInfo.gold = res.gold
                    playerInfo.level = res.level
                    playerInfo.moodValue = res.moodValue
                    playerInfo.physicalValue = res.physicalValue
                    playerInfo.cleanValue = res.cleanValue
                    playerInfo.icecream = res.icecream
                    playerInfo.coka = res.coka
                    playerInfo.bearCookies = res.bearCookies
                    playerInfo.strawberryCookie = res.strawberryCookie
                    playerInfo.friend = res.friend

                    // res.save()
                    //初始化资源
                    game.initValue()
                    game.initBag()
                    game.initFriend()
                        // break
                }

            }).catch(err => {
                console.log(err)
            })
        }
        game.friendPanel.active = false
    },


    start() {

    },

    // update (dt) {},
});