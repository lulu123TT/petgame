// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

// const { Bmob } = require("./bmob");

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
        nameLabel: cc.Label,
        idLabel: cc.Label,
        initPanel: cc.Node,
        addPlayerPanel: cc.Node,

        cue: cc.Prefab, //提示
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {

        this.Bmob = require('../script/bmob')
        this.Bmob.initialize("c22c521ba019610a", "011217")
        window.friendInfo = {
            // id: "bbaa3a422e",
            id: "UZ6F111R",
            name: "penguin",
            level: 0,
            gold: 0,
            moodValue: 0,
            physicalValue: 0,
            cleanValue: 0,

            icecream: 0,
            coka: 0,
            bearCookies: 0,
            strawberryCookie: 0,
            // friend: ['53d20398ae', 'UHpv333Y', 'huPv555B']
            friend: [],
            friendsNum: 0,
        }
        window.playerInfo = {
            // id: "bbaa3a422e",
            id: "UZ6F111R",
            name: "penguin",
            level: 0,
            gold: 0,
            moodValue: 0,
            physicalValue: 5,
            cleanValue: 0,


            icecream: 0,
            coka: 0,
            bearCookies: 0,
            strawberryCookie: 0,
            // friend: ['53d20398ae', 'UHpv333Y', 'huPv555B']
            friend: [],
            // friendsNum: 0,
        }

        window.myId = playerInfo.id
    },


    loadPlayer() {
        playerInfo.id = JSON.parse(cc.sys.localStorage.getItem('id'))
        cc.log("存在此玩家")
        this.setPlayerInfo()
        cc.director.loadScene("scenes/game")
            // }
    },

    //为playerInfo赋初值
    setPlayerInfo() {
        const query = this.Bmob.Query('player')
        query.get(playerInfo.id).then(res => {
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
                // playerInfo.friendsNum = res.friendsNum
            playerInfo.friend = res.friend
            cc.log(res)
            cc.director.loadScene("scenes/game")
        }).catch(err => {
            console.log(err)
            let cues = cc.instantiate(this.cue)
            this.initPanel.addChild(cues)
            cues.setPosition(cc.v2(0, 50))
            cues.getComponent(cc.Label).string = "不存在该玩家"
            this.scheduleOnce(function() {
                cues.destroy()
            }, 1);
            console.log("不存在该玩家")
        })
    },

    btn_callback(sender, infm) {
        if (infm === "start") {
            // this.loadPlayer()
            this.initPanel.active = true
                // playerInfo.id = this.nameLabel.string
                // this.setPlayerInfo()
                // cc.director.loadScene("scenes/game")
        } else if (infm === "set") {
            this.setting.active = true;
        } else if (infm === "cross") {
            this.setting.active = false;
        } else if (infm === "add") {
            this.setting.active = false
            this.addPlayerPanel.active = true
        } else if (infm === "close") {
            this.initPanel.active = false
        } else if (infm === "init") {
            playerInfo.id = this.idLabel.string
            this.setPlayerInfo()
                // cc.director.loadScene("scenes/game")
        } else if (infm === "create") {
            playerInfo.name = this.nameLabel.string
            cc.log(this.nameLabel.string)
            const query = Bmob.Query('player');
            query.set("name", playerInfo.name)
            query.set("gold", playerInfo.gold)
            query.set("level", playerInfo.level)
            query.set("moodValue", playerInfo.moodValue)
            query.set("physicalValue", playerInfo.physicalValue)
            query.set("cleanValue", playerInfo.cleanValue)
            query.set("icecream", playerInfo.icecream)
            query.set("coka", playerInfo.coka)
            query.set("bearCookies", playerInfo.bearCookies)
            query.set("strawberryCookie", playerInfo.strawberryCookie)
            query.set("friend", playerInfo.friend)
                //保存新建玩家的数据
            query.save().then(res => {
                playerInfo.id = res.objectId
                myId = res.objectId
                cc.log(playerInfo)
                cc.log(res)
            }).catch(err => {
                console.log(err)
            })
            let cues = cc.instantiate(this.cue)
            this.addPlayerPanel.addChild(cues)
            cues.setPosition(cc.v2(0, 50))
            cues.getComponent(cc.Label).string = "成功创建玩家"
            this.scheduleOnce(function() {
                cues.destroy()
                cc.director.loadScene("scenes/game")
            }, 1);
        }
    },



    start() {

    },

    // update (dt) {},
});