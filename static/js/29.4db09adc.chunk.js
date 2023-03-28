"use strict";(self.webpackChunktest_app=self.webpackChunktest_app||[]).push([[29],{75029:function(t,e,r){r.r(e),r.d(e,{Pack:function(){return S}});var n=r(1413),a=r(97326),s=r(60136),c=r(29388),o=r(37762),i=r(74165),u=r(15861),p=r(15671),d=r(43144),l=r(42659),f=r(77117),h=JSON.parse('[{"inputs":[{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]'),v=r(27761),y=r(2257),k=r(19601),w=r(68624),m=r(60874),g=(r(80518),r(25025),r(70332),r(8455),r(49242),r(59189),r(26219),r(68834),r(65660),r(61303),r(71497),r(56880),r(94317),r(13670),r(79120),r(97604),r(8187),r(19362),r(59190),r(54730),r(36250),r(85725),r(38730),r(48507),r(38398),r(2090),r(86841),r(49561),r(80580),r(40246),r(54253),r(91559),r(40553),r(26),r(69392),r(29526),r(24601),r(46878),r(77033),r(87033),r(5158),r(20583),r(92355),r(84194),r(51121),r(32484),r(78435),r(66315),r(84255),r(98528),r(62555),r(73211),r(82037),r(20737),r(78262),r(34161),r(50266),r(98839),r(65815),r(52378),r(55173),r(51375),r(43320),m.z.object({contractAddress:f.af})),b=g.extend({quantity:l.A}),Z=g.extend({tokenId:f.ad}),x=g.extend({tokenId:f.ad,quantity:f.ad}),R=b.omit({quantity:!0}).extend({quantityPerReward:l.A}),A=Z,T=x.omit({quantity:!0}).extend({quantityPerReward:f.ad}),W=R.extend({totalRewards:f.ad.default("1")}),C=A,P=T.extend({totalRewards:f.ad.default("1")});m.z.object({erc20Rewards:m.z.array(R).default([]),erc721Rewards:m.z.array(A).default([]),erc1155Rewards:m.z.array(T).default([])});var I=m.z.object({erc20Rewards:m.z.array(W).default([]),erc721Rewards:m.z.array(C).default([]),erc1155Rewards:m.z.array(P).default([])}),_=I.extend({packMetadata:l.N,rewardsPerPack:f.ad.default("1"),openStartTime:f.ag.default(new Date)}),O=function(){function t(e,r,n,a,s){(0,p.Z)(this,t);var c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:new f.cV(e,r,v,a);(0,l._)(this,"featureName",f.da.name),(0,l._)(this,"contractWrapper",void 0),(0,l._)(this,"storage",void 0),(0,l._)(this,"chainId",void 0),(0,l._)(this,"events",void 0),this.contractWrapper=c,this.storage=n,this.chainId=s,this.events=new f.a_(this.contractWrapper)}return(0,d.Z)(t,[{key:"onNetworkUpdated",value:function(t){this.contractWrapper.updateSignerOrProvider(t)}},{key:"getAddress",value:function(){return this.contractWrapper.readContract.address}},{key:"open",value:function(){var t=(0,u.Z)((0,i.Z)().mark((function t(e){var r,n,a,s,c=arguments;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=c.length>1&&void 0!==c[1]?c[1]:1,t.next=3,this.contractWrapper.sendTransaction("openPack",[e,r],{gasLimit:5e5});case 3:n=t.sent,a=y.O$.from(0);try{s=this.contractWrapper.parseLogs("PackOpenRequested",null===n||void 0===n?void 0:n.logs),a=s[0].args.requestId}catch(o){}return t.abrupt("return",{receipt:n,id:a});case 7:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"claimRewards",value:function(){var t=(0,u.Z)((0,i.Z)().mark((function t(){var e,r,n;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.contractWrapper.sendTransaction("claimRewards",[],{gasLimit:5e5});case 2:if(e=t.sent,0!==(r=this.contractWrapper.parseLogs("PackOpened",null===e||void 0===e?void 0:e.logs)).length){t.next=6;break}throw new Error("PackOpened event not found");case 6:return n=r[0].args.rewardUnitsDistributed,t.abrupt("return",this.parseRewards(n));case 8:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"parseRewards",value:function(){var t=(0,u.Z)((0,i.Z)().mark((function t(e){var r,n,a,s,c,u,p;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=[],n=[],a=[],s=(0,o.Z)(e),t.prev=4,s.s();case 6:if((c=s.n()).done){t.next=22;break}u=c.value,t.t0=u.tokenType,t.next=0===t.t0?11:1===t.t0?16:2===t.t0?18:20;break;case 11:return t.next=13,(0,f.bd)(this.contractWrapper.getProvider(),u.assetContract);case 13:return p=t.sent,r.push({contractAddress:u.assetContract,quantityPerReward:k.formatUnits(u.totalAmount,p.decimals).toString()}),t.abrupt("break",20);case 16:return n.push({contractAddress:u.assetContract,tokenId:u.tokenId.toString()}),t.abrupt("break",20);case 18:return a.push({contractAddress:u.assetContract,tokenId:u.tokenId.toString(),quantityPerReward:u.totalAmount.toString()}),t.abrupt("break",20);case 20:t.next=6;break;case 22:t.next=27;break;case 24:t.prev=24,t.t1=t.catch(4),s.e(t.t1);case 27:return t.prev=27,s.f(),t.finish(27);case 30:return t.abrupt("return",{erc20Rewards:r,erc721Rewards:n,erc1155Rewards:a});case 31:case"end":return t.stop()}}),t,this,[[4,24,27,30]])})));return function(e){return t.apply(this,arguments)}}()},{key:"addPackOpenEventListener",value:function(){var t=(0,u.Z)((0,i.Z)().mark((function t(e){var r=this;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.events.addEventListener("PackOpened",function(){var t=(0,u.Z)((0,i.Z)().mark((function t(n){return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.t1=n.data.packId.toString(),t.t2=n.data.opener,t.next=5,r.parseRewards(n.data.rewardUnitsDistributed);case 5:t.t3=t.sent,(0,t.t0)(t.t1,t.t2,t.t3);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 1:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"canClaimRewards",value:function(){var t=(0,u.Z)((0,i.Z)().mark((function t(e){var r;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=e,t.t0){t.next=5;break}return t.next=4,this.contractWrapper.getSignerAddress();case 4:t.t0=t.sent;case 5:return r=t.t0,t.next=8,this.contractWrapper.readContract.canClaimRewards(r);case 8:return t.abrupt("return",t.sent);case 9:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"openAndClaim",value:function(){var t=(0,u.Z)((0,i.Z)().mark((function t(e){var r,n,a,s,c,o=arguments;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=o.length>1&&void 0!==o[1]?o[1]:1,n=o.length>2&&void 0!==o[2]?o[2]:5e5,t.next=4,this.contractWrapper.sendTransaction("openPackAndClaimRewards",[e,r,n],{gasLimit:y.O$.from(5e5)});case 4:a=t.sent,s=y.O$.from(0);try{c=this.contractWrapper.parseLogs("PackOpenRequested",null===a||void 0===a?void 0:a.logs),s=c[0].args.requestId}catch(i){}return t.abrupt("return",{receipt:a,id:s});case 8:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"getLinkBalance",value:function(){var t=(0,u.Z)((0,i.Z)().mark((function t(){return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.getLinkContract().balanceOf(this.contractWrapper.readContract.address));case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"transferLink",value:function(){var t=(0,u.Z)((0,i.Z)().mark((function t(e){return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getLinkContract().transfer(this.contractWrapper.readContract.address,e);case 2:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"getLinkContract",value:function(){var t=f.cl[this.chainId];if(!t)throw new Error("No LINK token address found for chainId ".concat(this.chainId));var e=new f.cV(this.contractWrapper.getSignerOrProvider(),t,h,this.contractWrapper.options);return new f.au(e,this.storage,this.chainId)}}]),t}(),S=function(t){(0,s.Z)(r,t);var e=(0,c.Z)(r);function r(t,s,c){var o;(0,p.Z)(this,r);var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},u=arguments.length>4?arguments[4]:void 0,d=arguments.length>5?arguments[5]:void 0,h=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new f.cV(t,s,u,i.gasless&&"openzeppelin"in i.gasless?(0,n.Z)((0,n.Z)({},i),{},{gasless:{openzeppelin:(0,n.Z)((0,n.Z)({},i.gasless.openzeppelin),{},{useEOAForwarder:!0})}}):i);return o=e.call(this,h,c,d),(0,l._)((0,a.Z)(o),"abi",void 0),(0,l._)((0,a.Z)(o),"metadata",void 0),(0,l._)((0,a.Z)(o),"app",void 0),(0,l._)((0,a.Z)(o),"roles",void 0),(0,l._)((0,a.Z)(o),"encoder",void 0),(0,l._)((0,a.Z)(o),"events",void 0),(0,l._)((0,a.Z)(o),"estimator",void 0),(0,l._)((0,a.Z)(o),"royalties",void 0),(0,l._)((0,a.Z)(o),"interceptor",void 0),(0,l._)((0,a.Z)(o),"erc1155",void 0),(0,l._)((0,a.Z)(o),"owner",void 0),(0,l._)((0,a.Z)(o),"_vrf",void 0),o.abi=u,o.erc1155=new f.aL(o.contractWrapper,o.storage,d),o.metadata=new f.am(o.contractWrapper,f.db,o.storage),o.app=new f.b4(o.contractWrapper,o.metadata,o.storage),o.roles=new f.an(o.contractWrapper,r.contractRoles),o.royalties=new f.ao(o.contractWrapper,o.metadata),o.encoder=new f.al(o.contractWrapper),o.estimator=new f.aZ(o.contractWrapper),o.events=new f.a_(o.contractWrapper),o.interceptor=new f.a$(o.contractWrapper),o.owner=new f.b2(o.contractWrapper),o._vrf=o.detectVrf(),o}return(0,d.Z)(r,[{key:"vrf",get:function(){return(0,f.c1)(this._vrf,f.da)}},{key:"onNetworkUpdated",value:function(t){var e;this.contractWrapper.updateSignerOrProvider(t),null===(e=this._vrf)||void 0===e||e.onNetworkUpdated(t)}},{key:"getAddress",value:function(){return this.contractWrapper.readContract.address}},{key:"get",value:function(){var t=(0,u.Z)((0,i.Z)().mark((function t(e){return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.erc1155.get(e));case 1:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"getAll",value:function(){var t=(0,u.Z)((0,i.Z)().mark((function t(e){return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.erc1155.getAll(e));case 1:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"getOwned",value:function(){var t=(0,u.Z)((0,i.Z)().mark((function t(e){return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.erc1155.getOwned(e));case 1:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"getTotalCount",value:function(){var t=(0,u.Z)((0,i.Z)().mark((function t(){return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.erc1155.totalCount());case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"isTransferRestricted",value:function(){var t=(0,u.Z)((0,i.Z)().mark((function t(){var e;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.contractWrapper.readContract.hasRole((0,f.bG)("transfer"),w.d);case 2:return e=t.sent,t.abrupt("return",!e);case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getPackContents",value:function(){var t=(0,u.Z)((0,i.Z)().mark((function t(e){var r,n,a,s,c,o,u,p,d,l,h;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.contractWrapper.readContract.getPackContents(e);case 2:r=t.sent,n=r.contents,a=r.perUnitAmounts,s=[],c=[],o=[],u=0;case 9:if(!(u<n.length)){t.next=28;break}p=n[u],d=a[u],t.t0=p.tokenType,t.next=0===t.t0?15:1===t.t0?21:2===t.t0?23:25;break;case 15:return t.next=17,(0,f.bd)(this.contractWrapper.getProvider(),p.assetContract);case 17:return l=t.sent,h=k.formatUnits(p.totalAmount,l.decimals),s.push({contractAddress:p.assetContract,quantityPerReward:d.toString(),totalRewards:y.O$.from(h).div(d).toString()}),t.abrupt("break",25);case 21:return c.push({contractAddress:p.assetContract,tokenId:p.tokenId.toString()}),t.abrupt("break",25);case 23:return o.push({contractAddress:p.assetContract,tokenId:p.tokenId.toString(),quantityPerReward:d.toString(),totalRewards:y.O$.from(p.totalAmount).div(d).toString()}),t.abrupt("break",25);case 25:u++,t.next=9;break;case 28:return t.abrupt("return",{erc20Rewards:s,erc721Rewards:c,erc1155Rewards:o});case 29:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"create",value:function(){var t=(0,u.Z)((0,i.Z)().mark((function t(e){var r;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.contractWrapper.getSignerAddress();case 2:return r=t.sent,t.abrupt("return",this.createTo(r,e));case 4:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"addPackContents",value:function(){var t=(0,u.Z)((0,i.Z)().mark((function t(e,r){var n,a,s,c,o,u,p,d,l=this;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.contractWrapper.getSignerAddress();case 2:return n=t.sent,a=I.parse(r),t.next=6,this.toPackContentArgs(a);case 6:return s=t.sent,c=s.contents,o=s.numOfRewardUnits,t.next=11,this.contractWrapper.sendTransaction("addPackContents",[e,c,o,n]);case 11:if(u=t.sent,0!==(p=this.contractWrapper.parseLogs("PackUpdated",null===u||void 0===u?void 0:u.logs)).length){t.next=15;break}throw new Error("PackUpdated event not found");case 15:return d=p[0].args.packId,t.abrupt("return",{id:d,receipt:u,data:function(){return l.erc1155.get(d)}});case 17:case"end":return t.stop()}}),t,this)})));return function(e,r){return t.apply(this,arguments)}}()},{key:"createTo",value:function(){var t=(0,u.Z)((0,i.Z)().mark((function t(e,r){var n,a,s,c,o,u,p,d,l,h,v,y,k=this;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,f.d4)(r.packMetadata,this.storage);case 2:return n=t.sent,a=_.parse(r),s=a.erc20Rewards,c=a.erc721Rewards,o=a.erc1155Rewards,u={erc20Rewards:s,erc721Rewards:c,erc1155Rewards:o},t.next=8,this.toPackContentArgs(u);case 8:return p=t.sent,d=p.contents,l=p.numOfRewardUnits,t.next=13,this.contractWrapper.sendTransaction("createPack",[d,l,n,a.openStartTime,a.rewardsPerPack,e]);case 13:if(h=t.sent,0!==(v=this.contractWrapper.parseLogs("PackCreated",null===h||void 0===h?void 0:h.logs)).length){t.next=17;break}throw new Error("PackCreated event not found");case 17:return y=v[0].args.packId,t.abrupt("return",{id:y,receipt:h,data:function(){return k.erc1155.get(y)}});case 19:case"end":return t.stop()}}),t,this)})));return function(e,r){return t.apply(this,arguments)}}()},{key:"open",value:function(){var t=(0,u.Z)((0,i.Z)().mark((function t(e){var r,n,a,s,c,u,p,d,l,h,v,y=arguments;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=y.length>1&&void 0!==y[1]?y[1]:1,!this._vrf){t.next=3;break}throw new Error("This contract is using Chainlink VRF, use `contract.vrf.open()` or `contract.vrf.openAndClaim()` instead");case 3:return t.next=5,this.contractWrapper.sendTransaction("openPack",[e,r],{gasLimit:5e5});case 5:if(n=t.sent,0!==(a=this.contractWrapper.parseLogs("PackOpened",null===n||void 0===n?void 0:n.logs)).length){t.next=9;break}throw new Error("PackOpened event not found");case 9:s=a[0].args.rewardUnitsDistributed,c=[],u=[],p=[],d=(0,o.Z)(s),t.prev=14,d.s();case 16:if((l=d.n()).done){t.next=32;break}h=l.value,t.t0=h.tokenType,t.next=0===t.t0?21:1===t.t0?26:2===t.t0?28:30;break;case 21:return t.next=23,(0,f.bd)(this.contractWrapper.getProvider(),h.assetContract);case 23:return v=t.sent,c.push({contractAddress:h.assetContract,quantityPerReward:k.formatUnits(h.totalAmount,v.decimals).toString()}),t.abrupt("break",30);case 26:return u.push({contractAddress:h.assetContract,tokenId:h.tokenId.toString()}),t.abrupt("break",30);case 28:return p.push({contractAddress:h.assetContract,tokenId:h.tokenId.toString(),quantityPerReward:h.totalAmount.toString()}),t.abrupt("break",30);case 30:t.next=16;break;case 32:t.next=37;break;case 34:t.prev=34,t.t1=t.catch(14),d.e(t.t1);case 37:return t.prev=37,d.f(),t.finish(37);case 40:return t.abrupt("return",{erc20Rewards:c,erc721Rewards:u,erc1155Rewards:p});case 41:case"end":return t.stop()}}),t,this,[[14,34,37,40]])})));return function(e){return t.apply(this,arguments)}}()},{key:"toPackContentArgs",value:function(){var t=(0,u.Z)((0,i.Z)().mark((function t(e){var r,n,a,s,c,u,p,d,l,h,v,k,w,m,g,b,Z,x;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=[],n=[],a=e.erc20Rewards,s=e.erc721Rewards,c=e.erc1155Rewards,u=this.contractWrapper.getProvider(),t.next=6,this.contractWrapper.getSignerAddress();case 6:p=t.sent,d=(0,o.Z)(a),t.prev=8,d.s();case 10:if((l=d.n()).done){t.next=25;break}return h=l.value,t.next=14,(0,f.be)(u,h.quantityPerReward,h.contractAddress);case 14:return v=t.sent,k=v.mul(h.totalRewards),t.next=18,(0,f.d5)(this.contractWrapper,h.contractAddress,k);case 18:if(t.sent){t.next=21;break}throw new Error('ERC20 token with contract address "'.concat(h.contractAddress,'" does not have enough allowance to transfer.\n\nYou can set allowance to the multiwrap contract to transfer these tokens by running:\n\nawait sdk.getToken("').concat(h.contractAddress,'").setAllowance("').concat(this.getAddress(),'", ').concat(k,");\n\n"));case 21:n.push(h.totalRewards),r.push({assetContract:h.contractAddress,tokenType:0,totalAmount:k,tokenId:0});case 23:t.next=10;break;case 25:t.next=30;break;case 27:t.prev=27,t.t0=t.catch(8),d.e(t.t0);case 30:return t.prev=30,d.f(),t.finish(30);case 33:w=(0,o.Z)(s),t.prev=34,w.s();case 36:if((m=w.n()).done){t.next=47;break}return g=m.value,t.next=40,(0,f.d6)(this.contractWrapper.getProvider(),this.getAddress(),g.contractAddress,g.tokenId,p);case 40:if(t.sent){t.next=43;break}throw new Error('ERC721 token "'.concat(g.tokenId,'" with contract address "').concat(g.contractAddress,'" is not approved for transfer.\n\nYou can give approval the multiwrap contract to transfer this token by running:\n\nawait sdk.getNFTCollection("').concat(g.contractAddress,'").setApprovalForToken("').concat(this.getAddress(),'", ').concat(g.tokenId,");\n\n"));case 43:n.push("1"),r.push({assetContract:g.contractAddress,tokenType:1,totalAmount:1,tokenId:g.tokenId});case 45:t.next=36;break;case 47:t.next=52;break;case 49:t.prev=49,t.t1=t.catch(34),w.e(t.t1);case 52:return t.prev=52,w.f(),t.finish(52);case 55:b=(0,o.Z)(c),t.prev=56,b.s();case 58:if((Z=b.n()).done){t.next=69;break}return x=Z.value,t.next=62,(0,f.d6)(this.contractWrapper.getProvider(),this.getAddress(),x.contractAddress,x.tokenId,p);case 62:if(t.sent){t.next=65;break}throw new Error('ERC1155 token "'.concat(x.tokenId,'" with contract address "').concat(x.contractAddress,'" is not approved for transfer.\n\nYou can give approval the multiwrap contract to transfer this token by running:\n\nawait sdk.getEdition("').concat(x.contractAddress,'").setApprovalForAll("').concat(this.getAddress(),'", true);\n\n'));case 65:n.push(x.totalRewards),r.push({assetContract:x.contractAddress,tokenType:2,totalAmount:y.O$.from(x.quantityPerReward).mul(y.O$.from(x.totalRewards)),tokenId:x.tokenId});case 67:t.next=58;break;case 69:t.next=74;break;case 71:t.prev=71,t.t2=t.catch(56),b.e(t.t2);case 74:return t.prev=74,b.f(),t.finish(74);case 77:return t.abrupt("return",{contents:r,numOfRewardUnits:n});case 78:case"end":return t.stop()}}),t,this,[[8,27,30,33],[34,49,52,55],[56,71,74,77]])})));return function(e){return t.apply(this,arguments)}}()},{key:"prepare",value:function(){var t=(0,u.Z)((0,i.Z)().mark((function t(e,r,n){return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",f.b3.fromContractWrapper({contractWrapper:this.contractWrapper,method:e,args:r,overrides:n}));case 1:case"end":return t.stop()}}),t,this)})));return function(e,r,n){return t.apply(this,arguments)}}()},{key:"call",value:function(){var t=(0,u.Z)((0,i.Z)().mark((function t(e){var r,n,a,s,c=arguments;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(n=c.length,a=new Array(n>1?n-1:0),s=1;s<n;s++)a[s-1]=c[s];return t.abrupt("return",(r=this.contractWrapper).call.apply(r,[e].concat(a)));case 2:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"detectVrf",value:function(){if((0,f.c2)(this.contractWrapper,"PackVRF"))return new O(this.contractWrapper.getSignerOrProvider(),this.contractWrapper.readContract.address,this.storage,this.contractWrapper.options,this.chainId)}}]),r}(f.aS);(0,l._)(S,"contractRoles",["admin","minter","asset","transfer"])}}]);
//# sourceMappingURL=29.4db09adc.chunk.js.map