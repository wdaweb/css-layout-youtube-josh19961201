(function(g){var window=this;'use strict';var H6a=function(a){g.X.call(this,{D:"div",K:"ytp-miniplayer-ui"});this.wf=!1;this.player=a;this.T(a,"minimized",this.ih);this.T(a,"onStateChange",this.KL)},O6=function(a){g.mO.call(this,a);
this.j=new H6a(this.player);this.j.hide();g.IN(this.player,this.j.element,4);a.Ff()&&(this.load(),g.O(a.getRootNode(),"ytp-player-minimized",!0));this.player.V().N("web_rounded_containers")&&g.O(a.getRootNode(),"ytp-rounded-miniplayer",!0)};
g.v(H6a,g.X);g.k=H6a.prototype;
g.k.cJ=function(){this.tooltip=new g.mS(this.player,this);g.N(this,this.tooltip);g.IN(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.Kc=new g.gP(this.player);g.N(this,this.Kc);this.Di=new g.X({D:"div",K:"ytp-miniplayer-scrim"});g.N(this,this.Di);this.Di.Ca(this.element);this.T(this.Di.element,"click",this.kE);var a=new g.X({D:"button",Ga:["ytp-miniplayer-close-button","ytp-button"],X:{"aria-label":"\u95dc\u9589"},W:[g.jL()]});g.N(this,a);a.Ca(this.Di.element);this.T(a.element,"click",
this.Rk);a=new g.M2(this.player,this);g.N(this,a);a.Ca(this.Di.element);this.Hs=new g.X({D:"div",K:"ytp-miniplayer-controls"});g.N(this,this.Hs);this.Hs.Ca(this.Di.element);this.T(this.Hs.element,"click",this.kE);var b=new g.X({D:"div",K:"ytp-miniplayer-button-container"});g.N(this,b);b.Ca(this.Hs.element);a=new g.X({D:"div",K:"ytp-miniplayer-play-button-container"});g.N(this,a);a.Ca(this.Hs.element);var c=new g.X({D:"div",K:"ytp-miniplayer-button-container"});g.N(this,c);c.Ca(this.Hs.element);this.JS=
new g.IQ(this.player,this,!1);g.N(this,this.JS);this.JS.Ca(b.element);b=new g.GQ(this.player,this);g.N(this,b);b.Ca(a.element);this.nextButton=new g.IQ(this.player,this,!0);g.N(this,this.nextButton);this.nextButton.Ca(c.element);this.Gi=new g.ZR(this.player,this);g.N(this,this.Gi);this.Gi.Ca(this.Di.element);this.Cc=new g.TQ(this.player,this);g.N(this,this.Cc);g.IN(this.player,this.Cc.element,4);this.aE=new g.X({D:"div",K:"ytp-miniplayer-buttons"});g.N(this,this.aE);g.IN(this.player,this.aE.element,
4);a=new g.X({D:"button",Ga:["ytp-miniplayer-close-button","ytp-button"],X:{"aria-label":"\u95dc\u9589"},W:[g.jL()]});g.N(this,a);a.Ca(this.aE.element);this.T(a.element,"click",this.Rk);a=new g.X({D:"button",Ga:["ytp-miniplayer-replay-button","ytp-button"],X:{"aria-label":"\u95dc\u9589"},W:[g.qL()]});g.N(this,a);a.Ca(this.aE.element);this.T(a.element,"click",this.F3);this.T(this.player,"presentingplayerstatechange",this.Vc);this.T(this.player,"appresize",this.Bb);this.T(this.player,"fullscreentoggled",
this.Bb);this.Bb()};
g.k.show=function(){this.Le=new g.$n(this.Jt,null,this);this.Le.start();this.wf||(this.cJ(),this.wf=!0);0!==this.player.getPlayerState()&&g.X.prototype.show.call(this);this.Cc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.Le&&(this.Le.dispose(),this.Le=void 0);g.X.prototype.hide.call(this);this.player.Ff()||(this.wf&&this.Cc.hide(),this.player.loadModule("annotations_module"))};
g.k.ra=function(){this.Le&&(this.Le.dispose(),this.Le=void 0);g.X.prototype.ra.call(this)};
g.k.Rk=function(){this.player.stopVideo();this.player.Pa("onCloseMiniplayer")};
g.k.F3=function(){this.player.playVideo()};
g.k.kE=function(a){if(a.target===this.Di.element||a.target===this.Hs.element)this.player.V().N("kevlar_miniplayer_play_pause_on_scrim")?g.gK(this.player.Fb())?this.player.pauseVideo():this.player.playVideo():this.player.Pa("onExpandMiniplayer")};
g.k.ih=function(){g.O(this.player.getRootNode(),"ytp-player-minimized",this.player.Ff())};
g.k.ge=function(){this.Cc.jc();this.Gi.jc()};
g.k.Jt=function(){this.ge();this.Le&&this.Le.start()};
g.k.Vc=function(a){g.W(a.state,32)&&this.tooltip.hide()};
g.k.Bb=function(){g.lR(this.Cc,0,this.player.gb().getPlayerSize().width,!1);g.WQ(this.Cc)};
g.k.KL=function(a){this.player.Ff()&&(0===a?this.hide():this.show())};
g.k.xc=function(){return this.tooltip};
g.k.Ef=function(){return!1};
g.k.Lg=function(){return!1};
g.k.aj=function(){return!1};
g.k.Mk=function(){return!1};
g.k.fh=function(){return!1};
g.k.ZA=function(){};
g.k.zo=function(){};
g.k.jw=function(){};
g.k.Um=function(){return null};
g.k.Fz=function(){return null};
g.k.Kk=function(){return new g.Bl(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.St=function(a,b,c,d,e){var f=0,h=d=0,l=g.Pl(a);if(b){c=g.jo(b,"ytp-prev-button")||g.jo(b,"ytp-next-button");var m=g.jo(b,"ytp-play-button"),n=g.jo(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.Nl(b,this.element),h=b.x,f=b.y-12):n&&(h=g.jo(b,"ytp-miniplayer-button-top-left"),f=g.Nl(b,this.element),b=g.Pl(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.gb().getPlayerSize().width;e=f+(e||0);l=g.Hg(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.Nn=function(){};
g.k.Hk=function(){return!1};
g.k.aB=function(){};
g.k.Ax=function(){};
g.k.ip=function(){};
g.k.kC=function(){};
g.k.Zp=function(){};g.v(O6,g.mO);O6.prototype.create=function(){};
O6.prototype.Tj=function(){return!1};
O6.prototype.load=function(){this.player.hideControls();this.j.show()};
O6.prototype.unload=function(){this.player.showControls();this.j.hide()};g.lO("miniplayer",O6);})(_yt_player);
