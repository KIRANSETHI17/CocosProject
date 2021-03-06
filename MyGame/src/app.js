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
var score=0;
var touchdetect=-1;



var HelloWorldLayer = cc.Layer.extend({

    sprite1:null,
    sprite2:null,
    sprite3:null,
    sprite4:null,
    sprite5:null,
    labeltimer:null,
    label2:null,
    timer:4,
    added:0,
    prevnumber:1,
    size:null,
    
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();
        size = cc.winSize;
        cc.log(size.width/2 + " " +size.height/2);

        //arrange all the components to be present on the entering scene.
        this.setMYscene();

        //check if touch event occurs and accordingly increase score or forces the game over.
        this.getTouch();

        //generates random color red box  every 1 sec by calling randomcolor func
        this.schedule(this.randomcolor,1);

    },

    setMYscene:function(){
        //adding sprites for the four colored boxes
        sprite1= new cc.Sprite.create(res.b);
        sprite1.setPosition(cc.p(size.width/2,size.height/2));
        sprite1.setAnchorPoint(cc.p(0,0));
        sprite1.setTag(1);
        this.addChild(sprite1, 0);

        sprite2= new cc.Sprite.create(res.g);
        sprite2.setPosition(cc.p(size.width/2,size.height/2));
        sprite2.setAnchorPoint(cc.p(0,1));
        sprite2.setTag(2);
        this.addChild(sprite2, 0);

        sprite3= new cc.Sprite.create(res.y);
        sprite3.setPosition(cc.p(size.width/2,size.height/2));
        sprite3.setAnchorPoint(cc.p(1,0));
        sprite3.setTag(3);
        this.addChild(sprite3, 0);


        sprite5= new cc.Sprite.create(res.r);
        sprite5.setPosition(cc.p(size.width/2,size.height/2));
        sprite5.setAnchorPoint(cc.p(1,1));
        sprite5.setTag(100);

        sprite4= new cc.Sprite.create(res.p);
        sprite4.setPosition(cc.p(size.width/2,size.height/2));
        sprite4.setAnchorPoint(cc.p(1,1));
        sprite4.setTag(4);
        this.addChild(sprite4, 0);

        label2=cc.LabelTTF.create("Score : " + score+ "","Arial","28",cc.TEXT_ALIGNMENT_CENTER);
        label2.setPosition(cc.p(size.width*0.50, size.height*0.85));
        label2.setColor(new cc.Color(0,0,255,255));
        this.addChild(label2);

        labeltimer=cc.LabelTTF.create(this.timer-1 +"","Arial","45",cc.TEXT_ALIGNMENT_CENTER);
        labeltimer.setPosition(cc.p(size.width*0.50, size.height*0.39));
        labeltimer.setColor(new cc.Color(0,0,0,255));
        this.addChild(labeltimer);
    },
    randomcolor:function() {

        if(this.timer>0)
        { labeltimer.setString(this.timer-1 +"");
          if((this.timer-1)==0)
          labeltimer.setString("");
          this.timer--;

            }
        if(this.timer==0)
        {   if(this.added==0)

           {this.addChild(sprite5, 0);
            this.added=1;}

            if(touchdetect==-1||touchdetect==1)
        {   touchdetect=0;
            var number = this.prevnumber;

            while(this.prevnumber==number)
            {
                 number= Math.floor((Math.random() * 4) + 1);
            }
            this.prevnumber = number;

            switch(number)
            {
                    case 1:

                        sprite5.setAnchorPoint(cc.p(0,0));
                        val.x=sprite5.getAnchorPoint().x;
                        val.y=sprite5.getAnchorPoint().y;
                        break;

                    case 2:

                        sprite5.setAnchorPoint(cc.p(0,1));
                        val.x=sprite5.getAnchorPoint().x;
                        val.y=sprite5.getAnchorPoint().y;
                        break;

                    case 3:

                        sprite5.setAnchorPoint(cc.p(1,0));
                        val.x=sprite5.getAnchorPoint().x;
                        val.y=sprite5.getAnchorPoint().y;
                        break;

                    case 4:

                        sprite5.setAnchorPoint(cc.p(1,1));
                        val.x=sprite5.getAnchorPoint().x;
                        val.y=sprite5.getAnchorPoint().y;
                        break;

                }}
            else
            {var scene=new ExitScene();
            cc.director.pushScene(scene);}}
            cc.log("touchdetect:random "+ touchdetect );



        },
    getTouch:function () {
        cc.eventManager.addListener(cc.EventListener.create({
            event: cc.EventListener.TOUCH_ALL_AT_ONCE,
            onTouchesEnded: function (touches, event) {

                var touch = touches[0];

                var location = this.convertToNodeSpace(touch.getLocation());
                cc.log("touchdetect:touchfun "+ touchdetect );

                //b 0,0


                if(val.x==0 && val.y==0 )
                { if(touchdetect==0)
                { if(location.x>=size.width/2 && location.x<size.width*(13/12) && location.y>=size.height/2 && location.y<size.height)
                { score++;
                }
                else
                {//gameover
                    var scene=new ExitScene();
                    cc.director.pushScene(scene);

                }}}

                //g 0,1
                if(val.x==0 && val.y==1 )
                {   if(touchdetect==0)
                { if(location.x>=size.width/2 && location.x<size.width*(13/12) && location.y>=0 && location.y<size.height/2)
                {score++;

                }
                else
                {//gameover
                    var scene=new ExitScene();
                    cc.director.pushScene(scene);


                }      }

                }
                //y 1,0
                if(val.x==1 && val.y==0 )
                {  if(touchdetect==0) { if(location.x>=size.width/12 && location.x<size.width/2 && location.y>=size.height/2  && location.y<=size.height)
                {score++;}
                else
                {//gameover
                    var scene=new ExitScene();
                    cc.director.pushScene(scene);

                }}


                }
                //p  1,1
                if(val.x==1 && val.y==1 )
                {    if(touchdetect==0) { if(location.x>=size.width/12&& location.x<size.width/2 && location.y>=0 && location.y<size.height/2 )
                {score++;
                }
                else
                {//gameover
                    var scene=new ExitScene();
                    cc.director.pushScene(scene);

                }}

                }


                //cc.log("anchor:  "+val.x+" "+val.y);
                cc.log("score:  "+score);
                label2.setString("Score : " + score+ "");
                touchdetect=1;

            }.bind(this)


        }), this);

    },

});



var ExitLayer = cc.Layer.extend({
    //layer:null,

    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();
      //  layer=new HelloWorldLayer();
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

    touchEvent:function(sender,type)  //detect the touchevent
    {switch(type)
    {
        case ccui.Widget.TOUCH_BEGAN:
            cc.log("touch down");
            break;

        case ccui.Widget.TOUCH_ENDED:
            cc.log("touch ended");
            score=0;
            touchdetect=-1;
            HelloWorldLayer.timer=4;
            HelloWorldLayer.added=0;
            var scene=new HelloWorldScene();
            cc.director.pushScene(scene);
            break;

        case ccui.Widget.TOUCH_MOVED:
            cc.log("touch moved");
            break;


    }
    }


});

//scene which runs on game enter
var HelloWorldScene = cc.Scene.extend({

    onEnter:function ()
    {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);


    }


});

//scene which runs on game exit
var ExitScene = cc.Scene.extend({

    onEnter:function ()
    {
        this._super();
        var layer = new ExitLayer();
        this.addChild(layer);

    }


});
