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
        pet: cc.Node,
        bg: cc.Node,
        petIcon: cc.Sprite, //头像
        myBody: cc.Node,

        addFriendId: cc.Label,
        clean: cc.Label,
        physical: cc.Label,
        star: cc.Label,
        mood: cc.Label,
        button: cc.Node,
        gold: cc.Label,
        petname: cc.Label,
        id: cc.Label,

        dishType: cc.Node, //食物种类面板
        goodPanel: cc.Node, //背包货物面板
        friendPanel: cc.Node, //好友面板 总
        realfriendPanel: cc.Node, //好友面板中单面板精灵
        addFriendPanel: cc.Node, //添加好友面板


        food: cc.Prefab, //食物预制体
        foodnum: cc.Prefab, //食物数量预制体
        buySuccess: cc.Prefab, //购买成功反馈预制体
        friend: cc.Prefab, //好友预制体

        foodAtlas: cc.SpriteAtlas, //图集
        bgAtlas: cc.SpriteAtlas, //图集
        bodyAtalas: cc.SpriteAtlas, //图集
    },


    //背包资源预制s
    spawnGoods(goodName) {
        if (this.goodNameNum[goodName] === 0) {
            let good = cc.instantiate(this.food)
            let numberLabel = cc.instantiate(this.foodnum)

            //good setting
            this.goodPanel.addChild(good)
            good.getComponent(cc.Sprite).spriteFrame = this.foodAtlas.getSpriteFrame(goodName)
            good.setPosition(this.setGoodPosition())

            //food num label setting
            good.addChild(numberLabel)
            numberLabel.setPosition(cc.v2(90, 90))

            //修改this.food生成的节点good的name,便于查找
            good.name = goodName
        }

        //购买成功预制体
        let buySuccessLabel = cc.instantiate(this.buySuccess)
        this.dishType.getChildByName(goodName).addChild(buySuccessLabel)
        buySuccessLabel.setPosition(cc.v2(0, 0))
        buySuccessLabel.getComponent(cc.Label).string = goodName + "+1"
            // 计时器
        this.scheduleOnce(function() {
            buySuccessLabel.destroy()
        }, 1);

        this.goodNameNum[goodName] += 1
        this.setLabel(goodName) //设置背包数量Label
        this.saveGold() //保存gold
        console.log('spawn success') //spawn 成功
        this.saveFood(goodName)
    },



    //更改背包食物数量
    saveFood(info) {
        //更改背包记录
        const query = Bmob.Query('player');
        query.set('id', playerInfo.id) //需要修改的objectId
        if (info === "icecream") {
            playerInfo.icecream = this.goodNameNum[info]
            query.set(info, playerInfo.icecream)
        } else if (info === "coka") {
            playerInfo.coka = this.goodNameNum[info]
            query.set(info, playerInfo.coka)
        } else if (info === "bearCookies") {
            playerInfo.bearCookies = this.goodNameNum[info]
            query.set(info, playerInfo.bearCookies)
        } else if (info === "strawberryCookie") {
            playerInfo.strawberryCookie = this.goodNameNum[info]
            query.set(info, playerInfo.strawberryCookie)
        }
        query.save().then(res => {
            console.log(res)
            console.log(playerInfo)
        }).catch(err => {
            console.log(err)
        })
    },

    //改变mygood的label属性
    setLabel(str) {
        let savedgood = this.goodPanel.getChildByName(str)
        let savedgoodLabel = savedgood.getChildByName("foodnum") //this.foodname的默认name即为foodname
        savedgoodLabel.getComponent(cc.Label).string = "x" + this.goodNameNum[str]
        cc.log(savedgoodLabel)
        cc.log(savedgoodLabel.parent)
    },

    setGoodPosition() {
        this.goodNum += 1
        if (this.goodNum === 1) {
            return cc.v2(-130, 200)
        } else if (this.goodNum === 2) {
            return cc.v2(130, 200)
        } else if (this.goodNum === 3) {
            return cc.v2(-130, -90)
        } else if (this.goodNum === 4) {
            return cc.v2(130, -90)
        }
        cc.log(this.goodNum)
        cc.log("position")
    },




    //bag btn
    bagBtn(sender, comm) {
        if (comm === "open") {
            this.goodPanel.active = true
        } else if (comm === "cross") {
            this.goodPanel.active = false
            if (this.eatFlag && this.isChose) {
                this.pet.getComponent(cc.Animation).play('animEat')
                this.physicalValueAdd()
                this.cleanValueSub()
                this.button.active = false
                this.eatFlag = 0
                this.isChose = 0
            }
        }
    },


    backHome() {
        this.initValue(playerInfo, playerInfo)
    },
    visitBtn(sender, info) {
        if (info === "visit") {
            this.friendPanel.active = true
        } else if (info === "cross") {
            this.friendPanel.active = false
        } else if (info === "myFriend") {
            this.realfriendPanel.active = true
            this.addFriendPanel.active = false
        } else if (info === "addFriend") {
            this.realfriendPanel.active = false
            this.addFriendPanel.active = true
            cc.log("nonono")
        } else if (info === "add") {
            const query = Bmob.Query('player')
            if (this.addFriendId.string != "") {
                cc.log("string 不为空")
                query.get(this.addFriendId.string).then(res => {
                    console.log(res)
                    let existPlayer = cc.instantiate(this.buySuccess)
                    this.addFriendPanel.addChild(existPlayer)
                    existPlayer.setPosition(cc.v2(0, -200))
                    existPlayer.getComponent(cc.Label).string = "玩家" + res.objectId + "存在"
                    this.scheduleOnce(function() {
                        existPlayer.destroy()
                    }, 2);
                    cc.log("存在该玩家")
                    this.destroyFriend()
                    playerInfo.friend = [...playerInfo.friend, this.addFriendId.string]
                        // playerInfo.friendsNum += 1
                    this.saveself(playerInfo)
                    this.initFriend()


                }).catch(err => {
                    cc.log(err.code)
                    if (err.code != 415) {
                        cc.log("不存在该玩家")
                        let existPlayer = cc.instantiate(this.buySuccess)
                        this.addFriendPanel.addChild(existPlayer)
                        existPlayer.setPosition(cc.v2(0, -200))
                        existPlayer.getComponent(cc.Label).string = "该玩家不存在"
                        this.scheduleOnce(function() {
                            existPlayer.destroy()
                        }, 2);
                    }
                    console.log(err)
                })
            }
        }
    },



    btn_callback(sender, infm) {
        var anim = this.pet.getComponent(cc.Animation);
        if (infm === "eat") {
            this.eatFlag = 1
            this.isEat = 1 //判断是否销毁eatfood

            this.goodPanel.active = true
            cc.log("activeInHierarchy: " + this.goodPanel.activeInHierarchy);
        } else if (infm === "shower") {
            anim.play('animWash')
            this.cleanValueAdd()
            this.physicalValueSub()
        } else if (infm === "study") {
            anim.play('animStudy')
            this.moodvalueAdd()
            this.physicalValueSub()
            this.cleanValueSub()
        } else if (infm === "work") {
            anim.play('animWorking')
            this.goldAdd()
            this.physicalValueSub()
            this.moodvalueAdd()
            this.cleanValueSub()
        }

        //允许单个动作进行
        this.button.active = false
        anim.on('finished', (msg) => {
            this.button.active = true;

            if (this.isEat === 1) {
                let food = this.pet.getChildByName("eatfood") //销毁食物
                food.destroy()
                this.isEat = 0
            }
        }, this)

        var sum = this.cleanValue + this.physicalValue + this.moodValue;
        if ((sum > 15) && (this.goldValue > 100)) {
            this.starAdd()
        }
        if (this.physicalValue < 0) {
            cc.log(this.physicalValue)
            let existPlayer = cc.instantiate(this.buySuccess)
            this.bg.addChild(existPlayer)
            existPlayer.setPosition(cc.v2(0, -200))
            existPlayer.getComponent(cc.Label).string = "您的宠物体力值不足"
            this.scheduleOnce(function() {
                existPlayer.destroy()
            }, 2);
        }

        //存储数据
        this.saveGold()

        playerInfo.moodValue = this.moodValue //更新playerInfo对应的值
        playerInfo.cleanValue = this.cleanValue
        playerInfo.physicalValue = this.physicalValue
        playerInfo.starValue = this.starValue

        //更改记录
        this.saveself(playerInfo)
        this.saveself(friendInfo)
    },

    saveself(info) {
        const query = Bmob.Query('player');
        query.set('id', info.id) //需要修改的objectId
        query.set("moodValue", info.moodValue)
        query.set("physicalValue", info.physicalValue)
        query.set("cleanValue", info.cleanValue)
        query.set("level", info.level)
        query.set('icecream', info.icecream)
        query.set('coka', info.coka)
        query.set('bearCookies', info.bearCookies)
        query.set('strawberryCookie', info.strawberryCookie)
        query.set('gold', info.gold)
        query.set('friend', info.friend)
            // query.set('friendsNum', info.friendsNum)
        query.save().then(res => {
            console.log(res)
            cc.log("self save success")
        }).catch(err => {
            console.log(err)
        })
    },

    //删除孩子节点

    removeChildren(pnode) {
        let childs = pnode.childNodes;
        for (let i = childs.length - 1; i >= 0; i--) {
            pnode.removeChild(childs.item(i));
        }
    },

    // LIFE-CYCLE CALLBACKS:
    saveGold() {
        playerInfo.gold = this.goldValue
        this.gold.string = this.goldValue;
        // cc.sys.localStorage.setItem('goldValue', JSON.stringify(this.goldValue))
        cc.log("save gold success")

        //更改金币记录
        const query = Bmob.Query('player');
        query.set('id', playerInfo.id) //需要修改的objectId
        query.set('gold', playerInfo.gold)
        query.save().then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    },


    onLoad() {
        //全局化
        window.game = this
            //吃饭flag
        this.eatFlag = 0
            //已经选择
        this.isChose = 0
        this.isEat = 0
        this.count = 0 //更换背景参数

        //初始化属性值
        this.moodValue = 0
        this.cleanValue = 0
        this.physicalValue = 0
        this.goldValue = 0
        this.starValue = 0
        this.petname.string = 0

        this.timer = 0 //计时器
        this.isBuy = 0

        //数据库
        let Bmob = require('../script/bmob')
        Bmob.initialize("c22c521ba019610a", "011217")
        const query = Bmob.Query('player')
        query.get(playerInfo.id).then(res => {
            cc.log(res)
        }).catch(err => {
            console.log(err)
        })

        this.goodNum = 0 //商品setposition时给定的参数值
        this.foodNum = [this.icecream, this.coka, this.bearCookies, this.strawberryCookie]
        this.goodTitle = ["icecream", "coka", "bearCookies", "strawberryCookie"]

        this.goodNameNum = {
            "icecream": 0,
            "coka": 0,
            "bearCookies": 0,
            "strawberryCookie": 0,
        }

        this.initValue(playerInfo, playerInfo) //playerInfo属性值渲染
        this.initBag() //playerInfo背包资源渲染
        this.initFriend() //playerInfo好友资源渲染
        cc.log("load success")
    },

    initValue(info1, info2) {
        this.moodValue = info2.moodValue
        this.cleanValue = info2.cleanValue
        this.physicalValue = info2.physicalValue
        this.goldValue = info1.gold
        this.petname.string = info2.name
        this.starValue = info2.level
        this.petIcon.getComponent(cc.Sprite).spriteFrame = this.foodAtlas.getSpriteFrame('dog')

        this.changeImg(this.count % 4 + 1)
        this.count++;

        this.gold.string = this.goldValue
        this.mood.string = "心情值：" + this.moodValue
        this.clean.string = "清洁值：" + this.cleanValue
        this.physical.string = "体力值：" + this.physicalValue
        this.id.string = "id: " + info2.id
        cc.log("数值保存成功")

        this.goodNameNum = {
            "icecream": info1.icecream,
            "coka": info1.coka,
            "bearCookies": info1.bearCookies,
            "strawberryCookie": info1.strawberryCookie,
        }
        cc.log("初始化value")
        cc.log(this.physicalValue)
    },

    //更换图像
    changeImg(num) {
        this.bg.getComponent(cc.Sprite).spriteFrame = this.bgAtlas.getSpriteFrame(num)
            // this.myBody.getComponent(cc.Sprite).spriteFrame = this.bodyAtalas.getSpriteFrame(num)
            // cc.log("ohohoh")
    },

    //初始化背包资源
    initBag() {
        // this.gameNum = 0 //位置计数改为零

        // let myGoods = this.node.getChildByName("petProperty").getChildByName("petPropertyPanel").getChildByName("mygoods")
        for (let i = 0; i < 4; i++) {

            let initGood = this.goodTitle[i]
            if (this.goodNameNum[initGood] > 0) {
                cc.log(this.goodNameNum[initGood])
                let good = cc.instantiate(this.food)
                let numberLabel = cc.instantiate(this.foodnum)

                //good setting
                this.goodPanel.addChild(good)
                good.getComponent(cc.Sprite).spriteFrame = this.foodAtlas.getSpriteFrame(initGood)
                good.setPosition(this.setGoodPosition())

                //food num label setting
                good.addChild(numberLabel)
                numberLabel.setPosition(cc.v2(90, 90))

                //修改this.food生成的节点good的name,便于查找
                good.name = initGood
                this.setLabel(initGood) //背包数量Label
            }
        }
        cc.log("背包资源保存成功")
    },

    //渲染好友资源
    initFriend() {
        let y = 180
        for (let i = 0; i < playerInfo.friend.length; i++) {
            const query = Bmob.Query('player')
            cc.log(playerInfo.friend[i])
            query.get(playerInfo.friend[i]).then(res => {
                let name = res.name
                let friend = cc.instantiate(this.friend)
                this.realfriendPanel.addChild(friend)
                friend.getComponent(cc.Label).string = name
                friend.setPosition(cc.v2(-50, y))
                y -= 90
                friend.name = name
                cc.log(name)
            }).catch(err => {
                console.log(err)
            })
        }
        cc.log("好友资源保存成功")
    },

    destroyFriend() {
        this.realfriendPanel.removeAllChildren();
        cc.log("remove success")
    },

    //gold value count
    goldAdd() {
        this.goldValue += 10;
    },

    starAdd() {
        this.starValue += 1;
        this.star.string = this.starValue;
    },

    //mood value count
    moodvalueAdd() {
        this.moodValue += 2;
        this.mood.string = "心情值：" + this.moodValue;
    },
    moodvalueSub() {
        this.moodValue -= 1;
        this.mood.string = "心情值：" + this.moodValue;
    },

    //clean value count
    cleanValueAdd() {
        this.cleanValue += 2;
        this.clean.string = "清洁值：" + this.cleanValue;
    },
    cleanValueSub() {
        this.cleanValue -= 1;
        this.clean.string = "清洁值：" + this.cleanValue;
    },

    //physical value count
    physicalValueAdd() {
        this.physicalValue += 2;
        this.physical.string = "体力值：" + this.physicalValue;
    },
    physicalValueSub() {
        this.physicalValue -= 1;
        this.physical.string = "体力值：" + this.physicalValue;
    },

    start() {

    },

    update(dt) {},
});