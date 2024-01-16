System.register("chunks:///_virtual/Bird.ts",["./rollupPluginModLoBabelHelpers.js","cc","./SFXPlayer.ts"],(function(t){var e,n,o,i,r,a,l,s,d,p,u,c,f,h,y;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,o=t.initializerDefineProperty,i=t.assertThisInitialized},function(t){r=t.cclegacy,a=t._decorator,l=t.CCInteger,s=t.CCFloat,d=t.find,p=t.Collider2D,u=t.Contact2DType,c=t.director,f=t.Component},function(t){h=t.SFXPlayer,y=t.SoundType}],execute:function(){var C,S,g,m,v,F,_;r._RF.push({},"20d9aPyxONMD6jt2Tr9MuzT","Bird",void 0);var P=a.ccclass,b=a.property;t("Bird",(C=P("Bird"),S=b({type:l}),g=b({type:s}),C((F=e((v=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return e=t.call.apply(t,[this].concat(r))||this,o(e,"fallSpeedConstant",F,i(e)),o(e,"rotationSpeedConstant",_,i(e)),e.gameController=void 0,e.fallSpeed=0,e}n(e,t);var r=e.prototype;return r.start=function(){this.gameController=d("GameController").getComponent("GameController"),this.node.getComponent(p).on(u.BEGIN_CONTACT,this.onCollide,this)},r.update=function(t){if(!this.gameController.isIdle){var e=this.node.getPosition();this.fallSpeed-=2*this.fallSpeedConstant*t,e.y+=this.fallSpeed*t,e.y<=-200&&(e.y=-200),this.node.setPosition(e);var n=this.fallSpeed*this.rotationSpeedConstant;n>=30?n=30:n<=-90&&(n=-90),this.node.setRotationFromEuler(0,0,n)}},r.fly=function(){c.isPaused()||(h.Instance.playSFX(y.E_Sound_Fly),this.fallSpeed=this.fallSpeedConstant)},r.onCollide=function(t,e){0===e.tag&&(h.Instance.playSFX(y.E_Sound_Hit),h.Instance.playSFX(y.E_Sound_Die),this.gameController.gameOver())},r.reset=function(){this.fallSpeed=0;var t=this.node.getPosition();t.x=0,t.y=0,this.node.setPosition(t),this.node.setRotationFromEuler(0,0,0)},e}(f)).prototype,"fallSpeedConstant",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 300}}),_=e(v.prototype,"rotationSpeedConstant",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return.3}}),m=v))||m));r._RF.pop()}}}));

System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Canvas,g=t.UITransform,h=t.instantiate,p=t.Label,c=t.Color,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[c.WHITE,c.BLACK,c.RED,c.GREEN,c.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(a)){var t=this.node.parent.getComponent(g),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=h(s);l.parent=this.node,l.name="Buttons";var r=h(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=h(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(p);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=c.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?h(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(p);this.labelComponentList[this.labelComponentList.length]=S;var x=h(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(p)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=h(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(p)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=h(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?h(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/GameController.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Ground.ts","./Bird.ts","./Pipe.ts","./Result.ts","./SFXPlayer.ts"],(function(t){var e,i,n,a,o,r,s,u,l,c,h,p,d,b,f,y,v,m;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,n=t.initializerDefineProperty,a=t.assertThisInitialized},function(t){o=t.cclegacy,r=t._decorator,s=t.Node,u=t.CCFloat,l=t.Label,c=t.director,h=t.UIOpacity,p=t.Component},function(t){d=t.Ground},function(t){b=t.Bird},function(t){f=t.Pipe},function(t){y=t.Result},function(t){v=t.SFXPlayer,m=t.SoundType}],execute:function(){var B,g,S,w,T,C,D,_,z,k,E,L,I,P,G,F,O,H,R,U,X,M,N,x,A,j,q,K,Z,J,Q,V,W,Y,$,tt,et,it,nt,at,ot;o._RF.push({},"737d5ojS/ZKLqH6Osxkopa+","GameController",void 0);var rt=r.ccclass,st=r.property;t("GameController",(B=rt("GameController"),g=st({type:d}),S=st({type:b}),w=st({type:b}),T=st({type:s}),C=st({type:f}),D=st({type:y}),_=st({type:u}),z=st({type:s}),k=st({type:s}),E=st({type:s}),L=st({type:s}),I=st({type:s}),P=st({type:u}),G=st({type:s}),F=st({type:s}),O=st({type:l}),H=st({type:s}),R=st({type:s}),U=st({type:l}),B((N=e((M=function(t){function e(){for(var e,i=arguments.length,o=new Array(i),r=0;r<i;r++)o[r]=arguments[r];return e=t.call.apply(t,[this].concat(o))||this,n(e,"ground",N,a(e)),n(e,"bird",x,a(e)),n(e,"birds",A,a(e)),n(e,"difficulties",j,a(e)),n(e,"pipe",q,a(e)),n(e,"result",K,a(e)),n(e,"baseSpeed",Z,a(e)),n(e,"startButton",J,a(e)),n(e,"pauseButton",Q,a(e)),n(e,"playButton",V,a(e)),n(e,"menuButton",W,a(e)),n(e,"background",Y,a(e)),n(e,"speedMultiplier",$,a(e)),n(e,"blackScreen",tt,a(e)),n(e,"birdButton",et,a(e)),n(e,"pauseLabel",it,a(e)),n(e,"camera",nt,a(e)),n(e,"hand",at,a(e)),n(e,"countdownLabel",ot,a(e)),e.deltaTimeCounter=void 0,e.speed=void 0,e.shakeDuration=void 0,e.isIdle=void 0,e.activeBird=void 0,e.activeDifficulty=void 0,e.countdownTime=void 0,e}i(e,t);var o=e.prototype;return o.start=function(){var t=this;c.pause(),this.activeBird=0;for(var e=1;e<this.birds.length;e++)this.birds[e].node.active=!1;this.activeDifficulty=0;for(var i=0;i<this.difficulties.length;i++)i!=this.activeDifficulty&&(this.difficulties[i].active=!1),this.difficulties[i].on(s.EventType.TOUCH_END,this.changeDifficulty,this);this.pipe.start(),this.deltaTimeCounter=0,this.speed=this.baseSpeed,this.node.on(s.EventType.TOUCH_START,(function(){t.bird.fly()})),this.startButton.on(s.EventType.TOUCH_END,this.startGame,this),this.pauseButton.on(s.EventType.TOUCH_START,(function(){t.pauseGame(),v.Instance.playSFX(m.E_Sound_Button)}),this),this.playButton.on(s.EventType.TOUCH_START,(function(){t.playGame(),v.Instance.playSFX(m.E_Sound_Button)}),this),this.menuButton.on(s.EventType.TOUCH_END,(function(){t.reset(),v.Instance.playSFX(m.E_Sound_Button)}),this),this.birdButton.on(s.EventType.TOUCH_END,this.changeBird,this),this.reset()},o.update=function(t){this.isIdle||(this.deltaTimeCounter+=t,this.deltaTimeCounter>=.5&&(this.speed*=this.speedMultiplier,this.deltaTimeCounter-=.5))},o.changeBird=function(){v.Instance.playSFX(m.E_Sound_Button),this.birds[this.activeBird].node.active=!1,this.activeBird=(this.activeBird+1)%this.birds.length,this.birds[this.activeBird].node.active=!0,this.bird=this.birds[this.activeBird]},o.changeDifficulty=function(){v.Instance.playSFX(m.E_Sound_Button),this.difficulties[this.activeDifficulty].active=!1,this.activeDifficulty=(this.activeDifficulty+1)%this.difficulties.length,this.difficulties[this.activeDifficulty].active=!0,this.pipe.changePrefab()},o.gameOver=function(){this.shakeDuration=.5,this.schedule(this.shakeScreen,.03,this.shakeDuration/.03),this.result.show(),this.pauseButton.active=!1,this.playButton.active=!1,this.blackScreen.getComponent(h).opacity=150},o.shakeScreen=function(){var t=this.camera.getPosition();this.shakeDuration>0?(t.x+=10*(Math.random()-.5),t.y+=10*(Math.random()-.5),this.shakeDuration-=.15,this.camera.setPosition(t)):(t.x=0,t.y=0,this.unschedule(this.shakeScreen),this.camera.setPosition(t),c.pause())},o.startGame=function(){this.startButton.active=!1,this.pauseButton.active=!0,this.playButton.active=!1,this.pauseLabel.node.active=!1,this.menuButton.active=!1,this.result.score.labelCurrentScorePlay.node.active=!0,v.Instance.playSFX(m.E_Sound_Swoosh),this.isIdle=!1,this.birdButton.active=!1,this.difficulties[this.activeDifficulty].active=!1,this.hand.active=!1},o.reset=function(){this.pipe.reset(),this.result.reset(),this.result.hide(),this.bird.reset(),this.result.score.labelCurrentScorePlay.node.active=!1,this.pauseButton.active=!1,this.playButton.active=!1,this.pauseLabel.node.active=!1,this.countdownLabel.node.active=!1,this.speed=this.baseSpeed,this.startButton.active=!0,this.blackScreen.getComponent(h).opacity=0,this.menuButton.active=!1,this.shakeDuration=1,this.isIdle=!0,this.birdButton.active=!0,this.difficulties[this.activeDifficulty].active=!0,this.hand.active=!0,c.resume()},o.pauseGame=function(){c.pause(),this.pauseButton.active=!1,this.pauseLabel.node.active=!0,this.playButton.active=!0,this.menuButton.active=!0,this.blackScreen.getComponent(h).opacity=150,this.result.showScoreBoard()},o.playGame=function(){this.playButton.active=!1,this.pauseLabel.node.active=!1,this.menuButton.active=!1,this.result.hideScoreBoard(),this.result.score.labelCurrentScorePlay.node.active=!1,this.countdownTime=3,this.countdownLabel.string="Ready?",this.countdownLabel.node.active=!0,this.schedule(this.countdown,1,this.countdownTime+1),this.isIdle=!0,c.resume()},o.countdown=function(){this.countdownLabel.string=this.countdownTime.toString(),this.countdownTime--,this.countdownTime<0&&(this.unschedule(this.countdown),this.countdownLabel.node.active=!1,this.blackScreen.getComponent(h).opacity=0,this.result.score.labelCurrentScorePlay.node.active=!0,this.pauseButton.active=!0,this.isIdle=!1)},e}(p)).prototype,"ground",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),x=e(M.prototype,"bird",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),A=e(M.prototype,"birds",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),j=e(M.prototype,"difficulties",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),q=e(M.prototype,"pipe",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),K=e(M.prototype,"result",[D],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Z=e(M.prototype,"baseSpeed",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 150}}),J=e(M.prototype,"startButton",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Q=e(M.prototype,"pauseButton",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),V=e(M.prototype,"playButton",[E],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),W=e(M.prototype,"menuButton",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Y=e(M.prototype,"background",[I],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),$=e(M.prototype,"speedMultiplier",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1.05}}),tt=e(M.prototype,"blackScreen",[G],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),et=e(M.prototype,"birdButton",[F],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),it=e(M.prototype,"pauseLabel",[O],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),nt=e(M.prototype,"camera",[H],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),at=e(M.prototype,"hand",[R],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ot=e(M.prototype,"countdownLabel",[U],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),X=M))||X));o._RF.pop()}}}));

System.register("chunks:///_virtual/Ground.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,o,r,n,i,a,l,s,c,u,p,d;return{setters:[function(e){t=e.applyDecoratedDescriptor,o=e.inheritsLoose,r=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){i=e.cclegacy,a=e._decorator,l=e.Node,s=e.find,c=e.director,u=e.Canvas,p=e.UITransform,d=e.Component}],execute:function(){var f,g,h,m,C;i._RF.push({},"b5c6czCG/1MXLfU/fAuQEEs","Ground",void 0);var v=a.ccclass,y=a.property;e("Ground",(f=v("Ground"),g=y({type:l}),f((C=t((m=function(e){function t(){for(var t,o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return t=e.call.apply(e,[this].concat(i))||this,r(t,"ground",C,n(t)),t.gameController=void 0,t}o(t,e);var i=t.prototype;return i.start=function(){this.gameController=s("GameController").getComponent("GameController")},i.update=function(e){if(!this.gameController.isIdle){var t=c.getScene().getComponentInChildren(u).getComponent(p).width,o=this.gameController.speed,r=this.node.getPosition();r.x-=o*e,r.x<=-t&&(r.x+=t),this.node.setPosition(r)}},t}(d)).prototype,"ground",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),h=m))||h));i._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./Bird.ts","./GameController.ts","./Ground.ts","./Pipe.ts","./Result.ts","./SFXPlayer.ts","./Score.ts"],(function(){return{setters:[null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/Pipe.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var i,t,s,r,n,o,p,a,h,c,l,f,u,P,v,d;return{setters:[function(e){i=e.applyDecoratedDescriptor,t=e.inheritsLoose,s=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){n=e.cclegacy,o=e._decorator,p=e.Prefab,a=e.find,h=e.instantiate,c=e.Vec3,l=e.randomRangeInt,f=e.director,u=e.Canvas,P=e.UITransform,v=e.randomRange,d=e.Component}],execute:function(){var b,g,m,C,y;n._RF.push({},"909ebfSdstDdYljzF7whuKh","Pipe",void 0);var D=o.ccclass,R=o.property;e("Pipe",(b=D("Pipe"),g=R({type:p}),b((y=i((C=function(e){function i(){for(var i,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return i=e.call.apply(e,[this].concat(n))||this,s(i,"prefabPipe",y,r(i)),i.activePrefab=void 0,i.gameController=void 0,i.pipes=[],i.pipeCount=3,i.pipeDistance=150,i.type=void 0,i}t(i,e);var n=i.prototype;return n.start=function(){this.gameController=a("GameController").getComponent("GameController"),this.activePrefab=0;for(var e=0;e<this.pipeCount;e++){var i=h(this.prefabPipe[this.activePrefab]);i.setPosition(new c(200+(e+1)*this.pipeDistance,l(-120,120),0)),this.pipes.push(i),this.node.addChild(this.pipes[e])}},n.changePrefab=function(){this.activePrefab=(this.activePrefab+1)%this.prefabPipe.length,this.pipes=[];for(var e=0;e<this.pipeCount;e++){var i=h(this.prefabPipe[this.activePrefab]);0==this.activePrefab?i.setPosition(new c(200+(e+1)*this.pipeDistance,l(-250,-150),0)):i.setPosition(new c(200+(e+1)*this.pipeDistance,l(-120,120),0)),this.pipes.push(i),this.node.addChild(this.pipes[e])}},n.update=function(e){if(!this.gameController.isIdle)for(var i=f.getScene().getComponentInChildren(u).getComponent(P).width,t=0;t<this.pipes.length;t++){var s=this.pipes[t].getPosition();s.x-=this.gameController.speed*e,s.x<=-200&&(s.x+=i+this.pipeDistance,0==this.activePrefab?v(0,1)<=.5?(s.y=l(-310,-130),this.pipes[t].setRotationFromEuler(0,0,0)):(s.y=l(170,310),this.pipes[t].setRotationFromEuler(0,0,180)):s.y=l(-100,100)),this.pipes[t].setPosition(s)}},n.reset=function(){for(var e=0;e<this.pipeCount;e++){var i=this.pipes[e].getPosition();i.x=200+(e+1)*this.pipeDistance,0==this.activePrefab?v(0,1)<=.5?(i.y=l(-310,-130),this.pipes[e].setRotationFromEuler(0,0,0)):(i.y=l(170,310),this.pipes[e].setRotationFromEuler(0,0,180)):i.y=l(-100,100),this.pipes[e].setPosition(i)}},i}(d)).prototype,"prefabPipe",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),m=C))||m));n._RF.pop()}}}));

System.register("chunks:///_virtual/Result.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Score.ts","./SFXPlayer.ts"],(function(e){var t,r,o,n,i,a,s,c,l,u,p,h;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,o=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){i=e.cclegacy,a=e._decorator,s=e.Node,c=e.find,l=e.Component},function(e){u=e.Score},function(e){p=e.SFXPlayer,h=e.SoundType}],execute:function(){var v,d,f,S,y,b,m,g,B;i._RF.push({},"acb7eJV02hBA52XsQAfAmEb","Result",void 0);var O=a.ccclass,C=a.property;e("Result",(v=O("Result"),d=C({type:u}),f=C({type:s}),S=C({type:s}),v((m=t((b=function(e){function t(){for(var t,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return t=e.call.apply(e,[this].concat(i))||this,o(t,"score",m,n(t)),o(t,"spGameOver",g,n(t)),o(t,"buttonStartOver",B,n(t)),t.gameController=void 0,t}r(t,e);var i=t.prototype;return i.start=function(){var e=this;this.gameController=c("GameController").getComponent("GameController"),this.buttonStartOver.on(s.EventType.TOUCH_END,(function(){e.gameController.reset(),p.Instance.playSFX(h.E_Sound_Button)}),this.gameController)},i.reset=function(){this.score.reset()},i.show=function(){this.showScoreBoard(),this.spGameOver.active=!0,this.buttonStartOver.active=!0},i.hide=function(){this.score.hideScoreBoard(),this.spGameOver.active=!1,this.buttonStartOver.active=!1},i.showScoreBoard=function(){this.score.updateScoreBoard(),this.score.showScoreBoard()},i.hideScoreBoard=function(){this.score.hideScoreBoard()},t}(l)).prototype,"score",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=t(b.prototype,"spGameOver",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),B=t(b.prototype,"buttonStartOver",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=b))||y));i._RF.pop()}}}));

System.register("chunks:///_virtual/Score.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var r,t,i,o,l,n,a,c,s,u;return{setters:[function(e){r=e.applyDecoratedDescriptor,t=e.inheritsLoose,i=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){l=e.cclegacy,n=e._decorator,a=e.Node,c=e.Label,s=e.find,u=e.Component}],execute:function(){var h,S,b,g,d,p,v,y,C,f,m,w,H,M,z,P,T;l._RF.push({},"c833fFAMotF5oWChwv/V/Vo","Score",void 0);var B=n.ccclass,F=n.property;e("Score",(h=B("Score"),S=F({type:a}),b=F({type:c}),g=F({type:c}),d=F({type:c}),p=F({type:a}),v=F({type:a}),y=F({type:a}),h((m=r((f=function(e){function r(){for(var r,t=arguments.length,l=new Array(t),n=0;n<t;n++)l[n]=arguments[n];return r=e.call.apply(e,[this].concat(l))||this,i(r,"scoreboard",m,o(r)),i(r,"labelCurrentScorePlay",w,o(r)),i(r,"labelCurrentScore",H,o(r)),i(r,"labelHighScore",M,o(r)),i(r,"silverMedal",z,o(r)),i(r,"goldMedal",P,o(r)),i(r,"newHighScore",T,o(r)),r.currentScore=void 0,r.highScore=void 0,r.deltaTimeCounter=void 0,r.gameController=void 0,r}t(r,e);var l=r.prototype;return l.start=function(){this.currentScore=0,this.highScore=0,this.deltaTimeCounter=0,this.labelCurrentScorePlay.string=this.currentScore.toString(),this.labelHighScore.string=this.highScore.toString(),this.gameController=s("GameController").getComponent("GameController")},l.update=function(e){this.gameController.isIdle||(this.deltaTimeCounter+=e,this.deltaTimeCounter>=.5&&(this.currentScore++,this.deltaTimeCounter-=.5,this.labelCurrentScorePlay.string=this.currentScore.toString()))},l.reset=function(){this.currentScore=0,this.labelCurrentScorePlay.string=this.currentScore.toString()},l.updateScoreBoard=function(){this.labelCurrentScore.string=this.currentScore.toString(),this.currentScore>this.highScore&&(this.highScore=this.currentScore,this.labelHighScore.string=this.labelCurrentScore.string,this.newHighScore.active=!0)},l.showScoreBoard=function(){this.scoreboard.active=!0,this.labelCurrentScore.node.active=!0,this.labelHighScore.node.active=!0,this.currentScore>=20?this.goldMedal.active=!0:this.currentScore>=10&&(this.silverMedal.active=!0),this.labelCurrentScorePlay.node.active=!1},l.hideScoreBoard=function(){this.scoreboard.active=!1,this.labelCurrentScore.node.active=!1,this.labelHighScore.node.active=!1,this.silverMedal.active=!1,this.goldMedal.active=!1,this.newHighScore.active=!1,this.labelCurrentScorePlay.node.active=!0},r}(u)).prototype,"scoreboard",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),w=r(f.prototype,"labelCurrentScorePlay",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),H=r(f.prototype,"labelCurrentScore",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),M=r(f.prototype,"labelHighScore",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),z=r(f.prototype,"silverMedal",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),P=r(f.prototype,"goldMedal",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),T=r(f.prototype,"newHighScore",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),C=f))||C));l._RF.pop()}}}));

System.register("chunks:///_virtual/SFXPlayer.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(n){var o,t,e,r,i,u,s,c,a;return{setters:[function(n){o=n.applyDecoratedDescriptor,t=n.inheritsLoose,e=n.initializerDefineProperty,r=n.assertThisInitialized},function(n){i=n.cclegacy,u=n._decorator,s=n.AudioClip,c=n.AudioSource,a=n.Component}],execute:function(){var l,_,p,S,d,y;i._RF.push({},"c234fd1Qr1EHYZjlXzeuRJP","SFXPlayer",void 0);var f=u.ccclass,h=u.property;n("SoundType",function(n){return n[n.E_Sound_Fly=0]="E_Sound_Fly",n[n.E_Sound_Die=1]="E_Sound_Die",n[n.E_Sound_Hit=2]="E_Sound_Hit",n[n.E_Sound_Swoosh=3]="E_Sound_Swoosh",n[n.E_Sound_Point=4]="E_Sound_Point",n[n.E_Sound_Button=5]="E_Sound_Button",n}({})),n("SFXPlayer",(l=f("SFXComponent"),_=h({type:s}),l(((y=function(n){function o(){for(var o,t=arguments.length,i=new Array(t),u=0;u<t;u++)i[u]=arguments[u];return o=n.call.apply(n,[this].concat(i))||this,e(o,"sfx",d,r(o)),o.source=void 0,o}t(o,n);var i=o.prototype;return i.start=function(){o.Instance=this,this.source=this.getComponent(c)},i.playSFX=function(n){this.source.playOneShot(this.sfx[n])},o}(a)).Instance=null,d=o((S=y).prototype,"sfx",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),p=S))||p));i._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});