
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/pengyouquan/pengyouquan","pages/xiaoxi/xiaoxi","pages/wode/wode","pages/faburenwu/faburenwu"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"页面","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8","navigationStyle":"custom"},"tabBar":{"selectedColor":"#000000","list":[{"text":"首页","pagePath":"pages/index/index","iconPath":"static/icon/shouye.png","selectedIconPath":"static/icon/shouye1.png"},{"text":"朋友圈","pagePath":"pages/pengyouquan/pengyouquan","iconPath":"static/icon/pengyouquan.png","selectedIconPath":"static/icon/pengyouquan1.png"},{"text":"发布任务","pagePath":"pages/faburenwu/faburenwu","iconPath":"static/icon/jiahao.png","selectedIconPath":"static/icon/jiahao1.png"},{"text":"消息","pagePath":"pages/xiaoxi/xiaoxi","iconPath":"static/icon/xiaoxi.png","selectedIconPath":"static/icon/xiaoxi1.png"},{"text":"我的","pagePath":"pages/wode/wode","iconPath":"static/icon/wode.png","selectedIconPath":"static/icon/wode1.png"}],"backgroundColor":"#FDFDFD","fontSize":"15px"},"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":false,"autoclose":true},"appname":"顺手","compilerVersion":"3.2.3","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"首页"}},{"path":"/pages/pengyouquan/pengyouquan","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"朋友圈","enablePullDownRefresh":false}},{"path":"/pages/xiaoxi/xiaoxi","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"消息","enablePullDownRefresh":false}},{"path":"/pages/wode/wode","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的","enablePullDownRefresh":false}},{"path":"/pages/faburenwu/faburenwu","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"发布任务","enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
