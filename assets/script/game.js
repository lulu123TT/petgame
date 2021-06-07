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
        clean: cc.Label,
        physical: cc.Label,
        mood: cc.Label,
        button: cc.Node,
        gold: cc.Label,

        //mybag 预制资源
        goodPanel: cc.Node,
        myGood: cc.Prefab,
    },

    //背包资源预制
    // spawnGoods() {
    //     this.goodsArray = []
    //     for (var i = 0; i < 1; i++) {
    //         let good = cc.instantiate(this.myGoods)
    //         good.getComponent('myGoods').initInfo(shopMenu.GOODS[i])
    //         this.goodsArray.push(good)
    //         this.goodPanel.addChild(good)
    //         console.log(shopMenu.GOODS.length)
    //     }
    // },

    //bag btn
    bagBtn() {
        if (this.goodPanel.parent.active) {
            this.goodPanel.parent.active = false
        } else {
            this.goodPanel.parent.active = true
                // this.spawnGoods()
                // console.log('spawn success')
        }
    },

    btn_callback(sender, infm) {
        this.goldAdd()
        var anim = this.pet.getComponent(cc.Animation);
        if (infm === "eat") {
            anim.play('animEat')
            this.physicalValueAdd()
        } else if (infm === "drink") {
            anim.play('animDrink')
            this.physicalValueAdd()
        } else if (infm === "shower") {
            anim.play('animWash')
            this.cleanValueAdd()
        } else if (infm === "study") {
            anim.play('animStudy')
            this.moodvalueAdd()
            this.physicalValueSub()
        } else if (infm === "work") {
            anim.play('animWorking')
            this.moodvalueAdd()
            this.physicalValueSub()
        } else if (infm === "goToWork") {
            anim.play('animGoToWork')
            this.moodvalueAdd()
            this.physicalValueSub()
        }

        //允许单个动作进行
        this.button.active = false
        anim.on('finished', (msg) => {
            this.button.active = true;
        }, this)

        //存储数据
        var goldValue = this.goldValue
        this.gold.string = this.goldValue;
        cc.sys.localStorage.setItem('goldValue', JSON.stringify(this.goldValue));

        var moodValue = this.moodValue
        this.mood.string = "心情值：" + this.moodValue;
        cc.sys.localStorage.setItem('moodValue', JSON.stringify(this.moodValue));

        var cleanValue = this.cleanValue
        this.clean.string = "清洁值：" + this.cleanValue;
        cc.sys.localStorage.setItem('cleanValue', JSON.stringify(this.cleanValue));

        var physicalValue = this.physicalValue
        this.physical.string = "体力值：" + this.physicalValue;
        cc.sys.localStorage.setItem('physicalValue', JSON.stringify(this.physicalValue));
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        //全局化
        window.game = this

        //初始化属性值
        this.moodValue = 0
        this.cleanValue = 0
        this.physicalValue = 0
        this.goldValue = 0


        //读取用户数据
        this.goldValue = JSON.parse(cc.sys.localStorage.getItem('goldValue'))
        this.gold.string = this.goldValue

        this.moodValue = JSON.parse(cc.sys.localStorage.getItem('moodValue'))
        this.mood.string = "心情值：" + this.moodValue

        this.cleanValue = JSON.parse(cc.sys.localStorage.getItem('cleanValue'))
        this.clean.string = "清洁值：" + this.cleanValue

        this.physicalValue = JSON.parse(cc.sys.localStorage.getItem('physicalValue'))
        this.physical.string = "体力值：" + this.physicalValue


        this.bagBtn()
    },

    //gold value count
    goldAdd() {
        var goldValue
        this.goldValue += 10;
    },

    //mood value count
    moodvalueAdd() {
        this.moodValue += 1;
        this.mood.string = "心情值：" + this.moodValue;
    },
    moodvalueSub() {
        this.moodValue -= 1;
        this.mood.string = "心情值：" + this.moodValue;
    },

    //clean value count
    cleanValueAdd() {
        this.cleanValue += 1;
        this.clean.string = "清洁值：" + this.cleanValue;
    },
    cleanValueSub() {
        this.cleanValue -= 1;
        this.clean.string = "清洁值：" + this.cleanValue;
    },

    //physical value count
    physicalValueAdd() {
        this.physicalValue += 1;
        this.physical.string = "体力值：" + this.physicalValue;
    },
    physicalValueSub() {
        this.physicalValue -= 1;
        this.physical.string = "体力值：" + this.physicalValue;
    },

    start() {

    },

    // update (dt) {},
});