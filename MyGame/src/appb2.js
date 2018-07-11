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
var val={x:0,y:0};
// var location={x:0.0,y:0.0,z:0.0};
var score=0;
var added=0;
var timer=3;
var score_once=false;

var touchdetect=-1;
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
                touchdetect=1;
                var location = touch.getLocation();

                var target = event.getCurrentTarget();
                var tag =target.getTag();
                //  if(tag==100)
                //      score++
                //  else
                // { var scene=new ExitScene();
                // cc.director.pushScene(scene); }
                //b 0,0


                if(val.x==0 && val.y==0 && score_once==false)
                {
                    if(location.x>=480 && location.x<1040 && location.y>=320 && location.y<640)
                    { score++;
                        score_once=true;

                    }
                    else
                    {//gameover
                        var scene=new ExitScene();
                        cc.director.pushScene(scene);

                    }}

                //g 0,1
                if(val.x==0 && val.y==1 && score_once==false)
                {
                    if(location.x>=480 && location.x<1040 && location.y>=0 && location.y<=319)
                    {score++;
                        score_inc=true;
                    }
                    else
                    {//gameover
                        var scene=new ExitScene();
                        cc.director.pushScene(scene);


                    }
                }
                //y 1,0
                if(val.x==1 && val.y==0 && score_once==false)
                {
                    if(location.x>=80 && location.x<480 && location.y>=320 && location.y<=640)
                    {score++;}
                    else
                    {//gameover
                        var scene=new ExitScene();
                        cc.director.pushScene(scene);

                    }

                }
                //p  1,1
                if(val.x==1 && val.y==1 && score_once==false)
                {
                    if(location.x>=80 && location.x<480 && location.y>=0 && location.y<=319)
                    {score++;
                    }
                    else
                    {//gameover
                        var scene=new ExitScene();
                        cc.director.pushScene(scene);

                    }
                }


                //cc.log("anchor:  "+val.x+" "+val.y);
                cc.log("score:  "+score);
                label2.setString("Score : " + score+ "");


            }
        }), this);


        //colouring set reqd
        sprite1= new cc.Sprite.create(res.b);
        sprite1.setPosition(cc.p(size.width/2,size.height/2));
        sprite1.setAnchorPoint(cc.p(0,0));
        sprite1.setTag(1);
        this.addChild(sprite1, 0);

        sprite2= new cc.Sprite.create(res.g);
        sprite2.setPosition(cc.p(size.width/2,size.height/2));
        sprite2.setAnchorPoint(cc.p(0,1));
        sprite1.setTag(2);
        this.addChild(sprite2, 0);

        sprite3= new cc.Sprite.create(res.y);
        sprite3.setPosition(cc.p(size.width/2,size.height/2));
        sprite3.setAnchorPoint(cc.p(1,0));
        sprite1.setTag(3);
        this.addChild(sprite3, 0);



        //add grey colour
        sprite5= new cc.Sprite.create(res.r);
        sprite5.setPosition(cc.p(size.width/2,size.height/2));
        sprite5.setAnchorPoint(cc.p(1,1));
        sprite5.setTag(100);

        //this.addChild(sprite5, 0);

        sprite4= new cc.Sprite.create(res.p);
        sprite4.setPosition(cc.p(size.width/2,size.height/2));
        sprite4.setAnchorPoint(cc.p(1,1));
        sprite1.setTag(4);
        this.addChild(sprite4, 0);

        var label2=cc.LabelTTF.create("Score : " + score+ "","Arial","28",cc.TEXT_ALIGNMENT_CENTER);
        label2.setPosition(cc.p(size.width*0.50, size.height*0.85));
        this.addChild(label2);
        //label2.setFontColor(cc.Color.b);
        //if(timer)
        //this.schedule(this.Timer,1);
        //if(timer==0)
        //cc.log("go on");
        this.schedule(this.randomcolor,1);




    },
    randomcolor:function() {
        var number= Math.floor((Math.random() * 4) + 1);
        //cc.log(val.x+"val"+val.y);

        score_once=false;

        // if(touchdetect==1 || touchdetect==-1 )
        {   touchdetect=0;
            cc.log("touchdetect:"+ touchdetect );
            switch(number) {
                case 1:
                    if(added==1)
                    { this.removeChildByTag(100);
                        added=0;
                    }
                    sprite5.setAnchorPoint(cc.p(0,0));
                    val.x=sprite5._getAnchorX();
                    val.y=sprite5._getAnchorY();
                    this.addChild(sprite5, 0);
                    added=1;


                    // cc.log( val.x+ " " + val.y+"helln" );

                    break;
                case 2:
                    if(added==1)
                    { this.removeChildByTag(100);
                        added=0;
                    }
                    sprite5.setAnchorPoint(cc.p(0,1));
                    val.x=sprite5._getAnchorX();
                    val.y=sprite5._getAnchorY();
                    this.addChild(sprite5, 0);
                    added=1;
                    break;
                case 3:
                    if(added==1)
                    { this.removeChildByTag(100);
                        added=0;
                    }
                    sprite5.setAnchorPoint(cc.p(1,0));
                    val.x=sprite5._getAnchorX();
                    val.y=sprite5._getAnchorY();
                    this.addChild(sprite5, 0);
                    added=1;
                    break;
                case 4:
                    if(added==1)
                    { this.removeChildByTag(100);
                        added=0;
                    }
                    sprite5.setAnchorPoint(cc.p(1,1));
                    val.x=sprite5._getAnchorX();
                    val.y=sprite5._getAnchorY();
                    this.addChild(sprite5, 0);
                    added=1;
                    break;

            } }
        // else{
        //   var scene=new ExitScene();
        // cc.director.pushScene(scene);
        //}

    },
    Timer:function () {
        timer--;
        cc.log(timer+" ");
    }




});



var ExitLayer = cc.Layer.extend({



    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();
        var size = cc.winSize;
        var label=cc.LabelTTF.create("Game ends","Arial","32",cc.TEXT_ALIGNMENT_LEFT);
        label.setPosition(cc.p(size.width/2,size.height/2));
        //  label.setAnchorPoint(0,0);
        var label2=cc.LabelTTF.create("Score :"+score +"","Arial","32",cc.TEXT_ALIGNMENT_CENTER);
        label2.setPosition(cc.p(size.width*0.50, size.height*0.70));
        var button=new ccui.Button();
        button.setTitleText("START");
        button.x=size.width/2;
        button.y=size.height*0.30;
        button.addTouchEventListener(this.touchEvent,this);

        // cc.log(score+"");
        this.addChild(label);
        this.addChild(label2);
        this.addChild(button);



    },

    touchEvent:function(sender,type)
    {switch(type)
    {
        case ccui.Widget.TOUCH_BEGAN:
            cc.log("touch down");
            break;

        case ccui.Widget.TOUCH_ENDED:
            cc.log("touch ended");
            score=0;
            touchdetect=-1;
            timer=3
            var scene=new HelloWorldScene();
            cc.director.pushScene(scene);
            break;

        case ccui.Widget.TOUCH_MOVED:
            cc.log("touch moved");
            break;


    }
    }



});

var HelloWorldScene = cc.Scene.extend({

    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);



    }


});
var ExitScene = cc.Scene.extend({

    onEnter:function () {
        this._super();
        var layer = new ExitLayer();
        this.addChild(layer);



    }


});
