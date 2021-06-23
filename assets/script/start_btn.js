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
        initPanel: cc.Node,
        // setPanel: cc.Node,
        // game: cc.SceneAsset,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {

        this.Bmob = require('../script/bmob')
        this.Bmob.initialize("c22c521ba019610a", "011217")

        window.playerInfo = {
                // id: "bbaa3a422e",
                id: "UZ6F111R",
                // icon: {
                //     "__type": "File",
                //     "group": "upyun",
                //     "filename": "1.xml",
                //     "url": ""
                // },
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
                friend: ['53d20398ae', 'UHpv333Y', 'huPv555B']
            }
            //为默认玩家设置朋友数组
        const query = Bmob.Query('player');
        query.set('id', 'UZ6F111R') //需要修改的objectId
        query.set('friend', playerInfo.friend)
        query.save().then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })

        window.myId = playerInfo.id
    },


    loadPlayer() {
        playerInfo.id = JSON.parse(cc.sys.localStorage.getItem('id'))
            // if (playerInfo.id != "UZ6F111R") {
            //     cc.log("无此玩家")
            //     this.initPanel.active = true
            // } else {
        cc.log("存在此玩家")
        const query = this.Bmob.Query('player')
            // const query = Bmob.Query("tableName");
        query.find().then(res => {
            console.log(res)
        });
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
            playerInfo.friend = res.friend
                // res.icon = playerInfo.icon
            cc.log(res)
        }).catch(err => {
            console.log(err)
        })
        cc.director.loadScene("scenes/game")
            // }
    },


    btn_callback(sender, infm) {
        if (infm === "start") {
            cc.sys.localStorage.setItem('id', JSON.stringify(playerInfo.id))
            this.loadPlayer()
                // cc.director.loadScene("scenes/game")
        } else if (infm === "set") {
            this.setting.active = true;
        } else if (infm === "cross") {
            this.setting.active = false;
        } else if (infm === "add") {
            this.setting.active = false
            this.initPanel.active = true
        } else if (infm === "close") {
            this.initPanel.active = false
        } else if (infm === "init") {
            playerInfo.name = this.nameLabel.string
            const query = Bmob.Query('player');
            query.set("name", playerInfo.name)
            query.set("gold", playerInfo.gold)
            query.set("level", playerInfo.level)
            query.set("moodValue", playerInfo.moodValue)
            query.set("physicalValue", playerInfo.physicalValue)
            query.set("cleanValue", playerInfo.cleanValue)
                //保存新建玩家的数据
            query.save().then(res => {
                playerInfo.id = res.objectId
                myId = res.objectId
                cc.log(playerInfo)
                cc.log(res)
            }).catch(err => {
                console.log(err)
            })
            cc.director.loadScene("scenes/game")
        }
    },


    start() {

    },

    // update (dt) {},
});