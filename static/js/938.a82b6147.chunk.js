"use strict";(self.webpackChunktest_app=self.webpackChunktest_app||[]).push([[938],{78938:function(r,t,e){e.r(t),e.d(t,{TokenDrop:function(){return v}});var n=e(74165),a=e(15861),c=e(15671),o=e(43144),u=e(97326),s=e(60136),p=e(29388),i=e(42659),f=e(77117),l=e(68624),v=(e(80518),e(25025),e(70332),e(8455),e(49242),e(59189),e(26219),e(68834),e(65660),e(61303),e(71497),e(56880),e(94317),e(13670),e(79120),e(97604),e(8187),e(19362),e(59190),e(54730),e(36250),e(85725),e(38730),e(48507),e(38398),e(2090),e(86841),e(49561),e(80580),e(40246),e(54253),e(91559),e(40553),e(26),e(69392),e(29526),e(24601),e(46878),e(77033),e(87033),e(5158),e(27761),e(20583),e(92355),e(84194),e(51121),e(32484),e(78435),e(66315),e(84255),e(98528),e(62555),e(73211),e(82037),e(20737),e(78262),e(34161),e(50266),e(98839),e(65815),e(52378),e(55173),e(51375),e(43320),function(r){(0,s.Z)(e,r);var t=(0,p.Z)(e);function e(r,o,s){var p,l;(0,c.Z)(this,e);var v=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},d=arguments.length>4?arguments[4]:void 0,Z=arguments.length>5?arguments[5]:void 0,h=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new f.cV(r,o,d,v);return p=t.call(this,h,s,Z),l=(0,u.Z)(p),(0,i._)((0,u.Z)(p),"abi",void 0),(0,i._)((0,u.Z)(p),"metadata",void 0),(0,i._)((0,u.Z)(p),"app",void 0),(0,i._)((0,u.Z)(p),"roles",void 0),(0,i._)((0,u.Z)(p),"encoder",void 0),(0,i._)((0,u.Z)(p),"estimator",void 0),(0,i._)((0,u.Z)(p),"sales",void 0),(0,i._)((0,u.Z)(p),"platformFees",void 0),(0,i._)((0,u.Z)(p),"events",void 0),(0,i._)((0,u.Z)(p),"claimConditions",void 0),(0,i._)((0,u.Z)(p),"interceptor",void 0),(0,i._)((0,u.Z)(p),"claim",(0,f.cW)(function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t){var e,a=arguments;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=!(a.length>1&&void 0!==a[1])||a[1],r.t0=l.claimTo,r.next=4,l.contractWrapper.getSignerAddress();case 4:return r.t1=r.sent,r.t2=t,r.t3=e,r.abrupt("return",r.t0.prepare.call(r.t0,r.t1,r.t2,r.t3));case 8:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}())),(0,i._)((0,u.Z)(p),"claimTo",(0,f.cW)(function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t,e){var a,c=arguments;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=!(c.length>2&&void 0!==c[2])||c[2],r.abrupt("return",l.erc20.claimTo.prepare(t,e,{checkERC20Allowance:a}));case 2:case"end":return r.stop()}}),r)})));return function(t,e){return r.apply(this,arguments)}}())),(0,i._)((0,u.Z)(p),"delegateTo",(0,f.cW)(function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",f.b3.fromContractWrapper({contractWrapper:p.contractWrapper,method:"delegate",args:[t]}));case 1:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}())),(0,i._)((0,u.Z)(p),"burnTokens",(0,f.cW)(function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",p.erc20.burn.prepare(t));case 1:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}())),(0,i._)((0,u.Z)(p),"burnFrom",(0,f.cW)(function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t,e){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",p.erc20.burnFrom.prepare(t,e));case 1:case"end":return r.stop()}}),r)})));return function(t,e){return r.apply(this,arguments)}}())),p.abi=d,p.metadata=new f.am(p.contractWrapper,f.dd,p.storage),p.app=new f.b4(p.contractWrapper,p.metadata,p.storage),p.roles=new f.an(p.contractWrapper,e.contractRoles),p.encoder=new f.al(p.contractWrapper),p.estimator=new f.aZ(p.contractWrapper),p.events=new f.a_(p.contractWrapper),p.sales=new f.ap(p.contractWrapper),p.platformFees=new f.b0(p.contractWrapper),p.interceptor=new f.a$(p.contractWrapper),p.claimConditions=new f.ar(p.contractWrapper,p.metadata,p.storage),p}return(0,o.Z)(e,[{key:"getVoteBalance",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.t0=this,r.next=3,this.contractWrapper.getSignerAddress();case 3:return r.t1=r.sent,r.next=6,r.t0.getVoteBalanceOf.call(r.t0,r.t1);case 6:return r.abrupt("return",r.sent);case 7:case"end":return r.stop()}}),r,this)})));return function(){return r.apply(this,arguments)}}()},{key:"getVoteBalanceOf",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.t0=this.erc20,r.next=3,this.contractWrapper.readContract.getVotes(t);case 3:return r.t1=r.sent,r.next=6,r.t0.getValue.call(r.t0,r.t1);case 6:return r.abrupt("return",r.sent);case 7:case"end":return r.stop()}}),r,this)})));return function(t){return r.apply(this,arguments)}}()},{key:"getDelegation",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.t0=this,r.next=3,this.contractWrapper.getSignerAddress();case 3:return r.t1=r.sent,r.next=6,r.t0.getDelegationOf.call(r.t0,r.t1);case 6:return r.abrupt("return",r.sent);case 7:case"end":return r.stop()}}),r,this)})));return function(){return r.apply(this,arguments)}}()},{key:"getDelegationOf",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.contractWrapper.readContract.delegates(t);case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}}),r,this)})));return function(t){return r.apply(this,arguments)}}()},{key:"isTransferRestricted",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(){var t;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.contractWrapper.readContract.hasRole((0,f.bG)("transfer"),l.d);case 2:return t=r.sent,r.abrupt("return",!t);case 4:case"end":return r.stop()}}),r,this)})));return function(){return r.apply(this,arguments)}}()},{key:"prepare",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t,e,a){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",f.b3.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:e,overrides:a}));case 1:case"end":return r.stop()}}),r,this)})));return function(t,e,n){return r.apply(this,arguments)}}()},{key:"call",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t){var e,a,c,o,u=arguments;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:for(a=u.length,c=new Array(a>1?a-1:0),o=1;o<a;o++)c[o-1]=u[o];return r.abrupt("return",(e=this.contractWrapper).call.apply(e,[t].concat(c)));case 2:case"end":return r.stop()}}),r,this)})));return function(t){return r.apply(this,arguments)}}()}]),e}(f.aA));(0,i._)(v,"contractRoles",["admin","transfer"])}}]);
//# sourceMappingURL=938.a82b6147.chunk.js.map