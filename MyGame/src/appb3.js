/****************************************************************************
 Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.

 http://www.cocos2d-x.org

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/


var HelloWorldLayer = cc.Layer.extend({

    sprite1:null,
    sprite2:null,
    sprite3:null,
    sprite4:null,
    sprite5:null,


    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        var size = cc.winSize;
        cc.eventManager.addListener(cc.EventListener.create({
            event: cc.EventListener.TOUCH_ALL_AT_ONCE,
            onTouchesEnded: function (touches, event) {
                var touch = touches[0];
                var location = touch.getLocation();

                cc.log( location.x + " " + location.y+"\n" );

            }
        }), this);

        //colouring set reqd
        sprite1= new cc.Sprite.create(res.b);
        sprite1.setPosition(cc.p(size.width/2,size.height/2));
        sprite1.setAnchorPoint(cc.p(0,0));
        this.addChild(sprite1, 0);

        sprite2= new cc.Sprite.create(res.g);
        sprite2.setPosition(cc.p(size.width/2,size.height/2));
        sprite2.setAnchorPoint(cc.p(0,1));
        this.addChild(sprite2, 0);

        sprite3= new cc.Sprite.create(res.y);
        sprite3.setPosition(cc.p(size.width/2,size.height/2));
        sprite3.setAnchorPoint(cc.p(1,0));
        this.addChild(sprite3, 0);

        sprite4= new cc.Sprite.create(res.p);
        sprite4.setPosition(cc.p(size.width/2,size.height/2));
        sprite4.setAnchorPoint(cc.p(1,1));
        this.addChild(sprite4, 0);

        //add grey colour
        sprite5= new cc.Sprite.create(res.p);
        sprite5.setPosition(cc.p(size.width/2,size.height/2));
        sprite5.setAnchorPoint(cc.p(1,1));
        this.addChild(sprite5, 0);
        this.schedule(this.randomNumber,1);
        //cc.log( val.x+ " " + val.y+"helln" );




    },
    randomNumber:function() {
        var number= Math.floor((Math.random() * 4) + 1);
        cc.log(val.x+"val"+val.y);
        switch(number) {
            case 1:
                sprite5.setAnchorPoint(cc.p(0,0));
                val.x=sprite5._getAnchorX();
                val.y=sprite5._getAnchorY();
                // cc.log( val.x+ " " + val.y+"helln" );

                break;
            case 2:
                sprite5.setAnchorPoint(cc.p(0,1));
                val.x=sprite5._getAnchorX();
                val.y=sprite5._getAnchorY();
                break;
            case 3:
                sprite5.setAnchorPoint(cc.p(1,0));
                val.x=sprite5._getAnchorX();
                val.y=sprite5._getAnchorY();
                break;
            case 4:
                sprite5.setAnchorPoint(cc.p(1,1));
                val.x=sprite5._getAnchorX();
                val.y=sprite5._getAnchorY();
                break;

        }},




                });





var HelloWorldScene = cc.Scene.extend({

    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);



    }


});
var val={x:0,y:0};
