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
    },

    btn_callback(sender, infm) {
        if (infm === "eat") {
            var anim = this.pet.getComponent(cc.Animation);
            anim.play('animEat')
            this.button.active = false
            anim.on('finished', this.animBeing(), this)
            this.physicalValueAdd()
        } else if (infm === "drink") {
            var anim = this.pet.getComponent(cc.Animation);
            anim.play('animDrink')
            this.physicalValueAdd()
        } else if (infm === "shower") {
            var anim = this.pet.getComponent(cc.Animation);
            anim.play('animWash')
            this.cleanValueAdd()
        } else if (infm === "study") {
            var anim = this.pet.getComponent(cc.Animation);
            anim.play('animStudy')
            this.moodvalueAdd()
            this.physicalValueSub()
        } else if (infm === "work") {
            var anim = this.pet.getComponent(cc.Animation);
            anim.play('animWorking')
            this.moodvalueAdd()
            this.physicalValueSub()
        } else if (infm === "goToWork") {
            var anim = this.pet.getComponent(cc.Animation);
            anim.play('animGoToWork')
            this.moodvalueAdd()
            this.physicalValueSub()
        }
    },

    animBeing() {
        this.button.active = true;
    },
    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.moodValue = 0
        this.cleanValue = 0
        this.physicalValue = 0
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
        this.physical.string = '体力值：' + this.physicalValue;
    },
    physicalValueSub() {
        this.physicalValue -= 1;
        this.physical.string = "体力值：" + this.physicalValue;
    },

    start() {

    },

    // update (dt) {},
});