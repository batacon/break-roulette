(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{231:function(t,e,n){var content=n(233);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(117).default)("1b7833da",content,!0,{sourceMap:!1})},232:function(t,e,n){"use strict";n(231)},233:function(t,e,n){var o=n(116)(!1);o.push([t.i,".roulette{width:400px;margin:0 auto}",""]),t.exports=o},234:function(t,e,n){"use strict";n.r(e);var o=n(1),r=["散歩","音楽鑑賞","昼寝","ゲーム","映画鑑賞","アニメ鑑賞","買い物","料理","友達と電話","お絵描き","飲酒","おやつ","筋トレ","読書","マンガ","瞑想","歯磨き"],l=o.a.extend({data:function(){return{showBreak:!1,randomIndex:0}},computed:{selectedBreak:function(){return r[this.randomIndex]}},methods:{spinRoulette:function(){this.randomIndex=Math.floor(Math.random()*r.length),this.showBreak=!0}}}),c=(n(232),n(47)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"roulette"},[n("h1",[t._v("気分転換ルーレット")]),t._v(" "),n("p",[t._v("気分が乗らない...")]),t._v(" "),n("button",{on:{click:t.spinRoulette}},[t._v("そんな時は")]),t._v(" "),t.showBreak?n("h2",[t._v(t._s(t.selectedBreak)+"だ！")]):t._e()])}),[],!1,null,null,null);e.default=component.exports}}]);