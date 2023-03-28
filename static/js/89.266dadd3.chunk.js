"use strict";(self.webpackChunktest_app=self.webpackChunktest_app||[]).push([[89],{64089:function(r,t,e){e.r(t),e.d(t,{SignatureDrop:function(){return v}});var n=e(74165),a=e(15861),c=e(15671),o=e(43144),u=e(97326),i=e(60136),p=e(29388),s=e(42659),l=e(77117),f=e(2257),d=e(68624),v=(e(80518),e(25025),e(70332),e(8455),e(49242),e(59189),e(26219),e(68834),e(65660),e(61303),e(71497),e(56880),e(94317),e(13670),e(79120),e(97604),e(8187),e(19362),e(59190),e(54730),e(36250),e(85725),e(38730),e(48507),e(38398),e(2090),e(86841),e(49561),e(80580),e(40246),e(54253),e(91559),e(40553),e(26),e(69392),e(29526),e(24601),e(46878),e(77033),e(87033),e(5158),e(27761),e(20583),e(92355),e(84194),e(51121),e(32484),e(78435),e(66315),e(84255),e(98528),e(62555),e(73211),e(82037),e(20737),e(78262),e(34161),e(50266),e(98839),e(65815),e(52378),e(55173),e(51375),e(43320),function(r){(0,i.Z)(e,r);var t=(0,p.Z)(e);function e(r,o,i){var p;(0,c.Z)(this,e);var f=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},d=arguments.length>4?arguments[4]:void 0,v=arguments.length>5?arguments[5]:void 0,m=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new l.cV(r,o,d,f);return p=t.call(this,m,i,v),(0,s._)((0,u.Z)(p),"abi",void 0),(0,s._)((0,u.Z)(p),"erc721",void 0),(0,s._)((0,u.Z)(p),"owner",void 0),(0,s._)((0,u.Z)(p),"encoder",void 0),(0,s._)((0,u.Z)(p),"estimator",void 0),(0,s._)((0,u.Z)(p),"metadata",void 0),(0,s._)((0,u.Z)(p),"app",void 0),(0,s._)((0,u.Z)(p),"sales",void 0),(0,s._)((0,u.Z)(p),"platformFees",void 0),(0,s._)((0,u.Z)(p),"events",void 0),(0,s._)((0,u.Z)(p),"roles",void 0),(0,s._)((0,u.Z)(p),"interceptor",void 0),(0,s._)((0,u.Z)(p),"royalties",void 0),(0,s._)((0,u.Z)(p),"claimConditions",void 0),(0,s._)((0,u.Z)(p),"revealer",void 0),(0,s._)((0,u.Z)(p),"signature",void 0),(0,s._)((0,u.Z)(p),"checkout",void 0),(0,s._)((0,u.Z)(p),"createBatch",(0,l.cW)(function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t,e){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",p.erc721.lazyMint.prepare(t,e));case 1:case"end":return r.stop()}}),r)})));return function(t,e){return r.apply(this,arguments)}}())),(0,s._)((0,u.Z)(p),"claimTo",(0,l.cW)(function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t,e,a){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",p.erc721.claimTo.prepare(t,e,a));case 1:case"end":return r.stop()}}),r)})));return function(t,e,n){return r.apply(this,arguments)}}())),(0,s._)((0,u.Z)(p),"claim",(0,l.cW)(function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t,e){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",p.erc721.claim.prepare(t,e));case 1:case"end":return r.stop()}}),r)})));return function(t,e){return r.apply(this,arguments)}}())),(0,s._)((0,u.Z)(p),"burn",(0,l.cW)(function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",p.erc721.burn.prepare(t));case 1:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}())),p.abi=d,p.metadata=new l.am(p.contractWrapper,l.d8,p.storage),p.app=new l.b4(p.contractWrapper,p.metadata,p.storage),p.roles=new l.an(p.contractWrapper,e.contractRoles),p.royalties=new l.ao(p.contractWrapper,p.metadata),p.sales=new l.ap(p.contractWrapper),p.encoder=new l.al(p.contractWrapper),p.estimator=new l.aZ(p.contractWrapper),p.events=new l.a_(p.contractWrapper),p.platformFees=new l.b0(p.contractWrapper),p.interceptor=new l.a$(p.contractWrapper),p.erc721=new l.aB(p.contractWrapper,p.storage,v),p.claimConditions=new l.ar(p.contractWrapper,p.metadata,p.storage),p.signature=new l.aE(p.contractWrapper,p.storage),p.revealer=new l.aq(p.contractWrapper,p.storage,l.d9.name,(function(){return p.erc721.nextTokenIdToMint()})),p.signature=new l.aE(p.contractWrapper,p.storage),p.owner=new l.b2(p.contractWrapper),p.checkout=new l.cS(p.contractWrapper),p}return(0,o.Z)(e,[{key:"onNetworkUpdated",value:function(r){this.contractWrapper.updateSignerOrProvider(r)}},{key:"getAddress",value:function(){return this.contractWrapper.readContract.address}},{key:"totalSupply",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(){var t,e;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.totalClaimedSupply();case 2:return t=r.sent,r.next=5,this.totalUnclaimedSupply();case 5:return e=r.sent,r.abrupt("return",t.add(e));case 7:case"end":return r.stop()}}),r,this)})));return function(){return r.apply(this,arguments)}}()},{key:"getAllClaimed",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t){var e,a,c,o=this;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=f.O$.from((null===t||void 0===t?void 0:t.start)||0).toNumber(),a=f.O$.from((null===t||void 0===t?void 0:t.count)||s.c).toNumber(),r.t0=Math,r.next=5,this.totalClaimedSupply();case 5:return r.t1=r.sent.toNumber(),r.t2=e+a,c=r.t0.min.call(r.t0,r.t1,r.t2),r.next=10,Promise.all(Array.from(Array(c).keys()).map((function(r){return o.get(r.toString())})));case 10:return r.abrupt("return",r.sent);case 11:case"end":return r.stop()}}),r,this)})));return function(t){return r.apply(this,arguments)}}()},{key:"getAllUnclaimed",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t){var e,a,c,o,u=this;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=f.O$.from((null===t||void 0===t?void 0:t.start)||0).toNumber(),a=f.O$.from((null===t||void 0===t?void 0:t.count)||s.c).toNumber(),r.t0=f.O$,r.t1=Math,r.next=6,this.totalClaimedSupply();case 6:return r.t2=r.sent.toNumber(),r.t3=e,r.t4=r.t1.max.call(r.t1,r.t2,r.t3),c=r.t0.from.call(r.t0,r.t4),r.t5=f.O$,r.t6=Math,r.next=14,this.contractWrapper.readContract.nextTokenIdToMint();case 14:return r.t7=r.sent.toNumber(),r.t8=c.toNumber()+a,r.t9=r.t6.min.call(r.t6,r.t7,r.t8),o=r.t5.from.call(r.t5,r.t9),r.next=20,Promise.all(Array.from(Array(o.sub(c).toNumber()).keys()).map((function(r){return u.erc721.getTokenMetadata(c.add(r).toString())})));case 20:return r.abrupt("return",r.sent);case 21:case"end":return r.stop()}}),r,this)})));return function(t){return r.apply(this,arguments)}}()},{key:"totalClaimedSupply",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.erc721.totalClaimedSupply());case 1:case"end":return r.stop()}}),r,this)})));return function(){return r.apply(this,arguments)}}()},{key:"totalUnclaimedSupply",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.erc721.totalUnclaimedSupply());case 1:case"end":return r.stop()}}),r,this)})));return function(){return r.apply(this,arguments)}}()},{key:"isTransferRestricted",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(){var t;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.contractWrapper.readContract.hasRole((0,l.bG)("transfer"),d.d);case 2:return t=r.sent,r.abrupt("return",!t);case 4:case"end":return r.stop()}}),r,this)})));return function(){return r.apply(this,arguments)}}()},{key:"getClaimTransaction",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t,e,a){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.erc721.getClaimTransaction(t,e,a));case 1:case"end":return r.stop()}}),r,this)})));return function(t,e,n){return r.apply(this,arguments)}}()},{key:"prepare",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t,e,a){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",l.b3.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:e,overrides:a}));case 1:case"end":return r.stop()}}),r,this)})));return function(t,e,n){return r.apply(this,arguments)}}()},{key:"call",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t){var e,a,c,o,u=arguments;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:for(a=u.length,c=new Array(a>1?a-1:0),o=1;o<a;o++)c[o-1]=u[o];return r.abrupt("return",(e=this.contractWrapper).call.apply(e,[t].concat(c)));case 2:case"end":return r.stop()}}),r,this)})));return function(t){return r.apply(this,arguments)}}()}]),e}(l.aK));(0,s._)(v,"contractRoles",["admin","minter","transfer"])}}]);
//# sourceMappingURL=89.266dadd3.chunk.js.map