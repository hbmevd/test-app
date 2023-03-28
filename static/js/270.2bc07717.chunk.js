"use strict";(self.webpackChunktest_app=self.webpackChunktest_app||[]).push([[270],{65270:function(r,t,e){e.r(t),e.d(t,{NFTCollection:function(){return d}});var n=e(74165),a=e(15861),c=e(15671),o=e(43144),p=e(97326),i=e(60136),u=e(29388),s=e(42659),f=e(77117),v=e(68624),d=(e(80518),e(25025),e(70332),e(8455),e(49242),e(59189),e(26219),e(68834),e(65660),e(61303),e(71497),e(56880),e(94317),e(13670),e(79120),e(97604),e(8187),e(19362),e(59190),e(54730),e(36250),e(85725),e(38730),e(48507),e(38398),e(2090),e(86841),e(49561),e(80580),e(40246),e(54253),e(91559),e(40553),e(26),e(69392),e(29526),e(24601),e(46878),e(77033),e(87033),e(5158),e(27761),e(20583),e(92355),e(84194),e(51121),e(32484),e(78435),e(66315),e(84255),e(98528),e(62555),e(73211),e(82037),e(20737),e(78262),e(34161),e(50266),e(98839),e(65815),e(52378),e(55173),e(51375),e(43320),function(r){(0,i.Z)(e,r);var t=(0,u.Z)(e);function e(r,o,i){var u;(0,c.Z)(this,e);var v=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},d=arguments.length>4?arguments[4]:void 0,Z=arguments.length>5?arguments[5]:void 0,h=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new f.cV(r,o,d,v);return u=t.call(this,h,i,Z),(0,s._)((0,p.Z)(u),"abi",void 0),(0,s._)((0,p.Z)(u),"metadata",void 0),(0,s._)((0,p.Z)(u),"app",void 0),(0,s._)((0,p.Z)(u),"roles",void 0),(0,s._)((0,p.Z)(u),"encoder",void 0),(0,s._)((0,p.Z)(u),"estimator",void 0),(0,s._)((0,p.Z)(u),"events",void 0),(0,s._)((0,p.Z)(u),"sales",void 0),(0,s._)((0,p.Z)(u),"platformFees",void 0),(0,s._)((0,p.Z)(u),"royalties",void 0),(0,s._)((0,p.Z)(u),"owner",void 0),(0,s._)((0,p.Z)(u),"signature",void 0),(0,s._)((0,p.Z)(u),"interceptor",void 0),(0,s._)((0,p.Z)(u),"erc721",void 0),(0,s._)((0,p.Z)(u),"mint",(0,f.cW)(function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",u.erc721.mint.prepare(t));case 1:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}())),(0,s._)((0,p.Z)(u),"mintTo",(0,f.cW)(function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t,e){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",u.erc721.mintTo.prepare(t,e));case 1:case"end":return r.stop()}}),r)})));return function(t,e){return r.apply(this,arguments)}}())),(0,s._)((0,p.Z)(u),"mintBatch",(0,f.cW)(function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",u.erc721.mintBatch.prepare(t));case 1:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}())),(0,s._)((0,p.Z)(u),"mintBatchTo",(0,f.cW)(function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t,e){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",u.erc721.mintBatchTo.prepare(t,e));case 1:case"end":return r.stop()}}),r)})));return function(t,e){return r.apply(this,arguments)}}())),(0,s._)((0,p.Z)(u),"burn",(0,f.cW)((function(r){return u.erc721.burn.prepare(r)}))),u.abi=d,u.metadata=new f.am(u.contractWrapper,f.d7,u.storage),u.app=new f.b4(u.contractWrapper,u.metadata,u.storage),u.roles=new f.an(u.contractWrapper,e.contractRoles),u.royalties=new f.ao(u.contractWrapper,u.metadata),u.sales=new f.ap(u.contractWrapper),u.encoder=new f.al(u.contractWrapper),u.estimator=new f.aZ(u.contractWrapper),u.events=new f.a_(u.contractWrapper),u.platformFees=new f.b0(u.contractWrapper),u.interceptor=new f.a$(u.contractWrapper),u.erc721=new f.aB(u.contractWrapper,u.storage,Z),u.signature=new f.aE(u.contractWrapper,u.storage),u.owner=new f.b2(u.contractWrapper),u}return(0,o.Z)(e,[{key:"onNetworkUpdated",value:function(r){this.contractWrapper.updateSignerOrProvider(r)}},{key:"getAddress",value:function(){return this.contractWrapper.readContract.address}},{key:"isTransferRestricted",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(){var t;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.contractWrapper.readContract.hasRole((0,f.bG)("transfer"),v.d);case 2:return t=r.sent,r.abrupt("return",!t);case 4:case"end":return r.stop()}}),r,this)})));return function(){return r.apply(this,arguments)}}()},{key:"getMintTransaction",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t,e){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.erc721.getMintTransaction(t,e));case 1:case"end":return r.stop()}}),r,this)})));return function(t,e){return r.apply(this,arguments)}}()},{key:"prepare",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t,e,a){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",f.b3.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:e,overrides:a}));case 1:case"end":return r.stop()}}),r,this)})));return function(t,e,n){return r.apply(this,arguments)}}()},{key:"call",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t){var e,a,c,o,p=arguments;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:for(a=p.length,c=new Array(a>1?a-1:0),o=1;o<a;o++)c[o-1]=p[o];return r.abrupt("return",(e=this.contractWrapper).call.apply(e,[t].concat(c)));case 2:case"end":return r.stop()}}),r,this)})));return function(t){return r.apply(this,arguments)}}()}]),e}(f.aK));(0,s._)(d,"contractRoles",["admin","minter","transfer"])}}]);
//# sourceMappingURL=270.2bc07717.chunk.js.map