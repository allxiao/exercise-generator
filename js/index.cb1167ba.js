(function(){"use strict";var e={6011:function(e,t,n){var a=n(5130),r=n(6768),i=n(4232);const o={class:"navbar navbar-expand-lg bg-body-tertiary d-print-none",id:"main-nav"},s={class:"container-fluid"},u={class:"collapse navbar-collapse",id:"navbarSupportedContent"},l={class:"navbar-nav me-auto mb-2 mb-lg-0"},c={class:"nav-item"},p={class:"form-check nav-checkbox-control"},d={class:"d-flex ms-auto",role:"form",id:"config"},v={class:"input-group"},m=["value"],f={class:"input-group"},h=["value"],b={class:"input-group"},g=["value"],x={class:"input-group"},k=["value"],M={class:"container-fluid d-flex align-items-center justify-content-center"},y={id:"main-page",class:"shadow-lg rounded"},L={class:"container",id:"page-content-area"},S={class:"text-center m-4"};function N(e,t,n,N,E,C){const _=(0,r.g2)("NavItem"),F=(0,r.g2)("ExerciseGrid");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.Lk)("nav",o,[(0,r.Lk)("div",s,[t[12]||(t[12]=(0,r.Lk)("a",{class:"navbar-brand",href:"#"},"练习题生成器",-1)),t[13]||(t[13]=(0,r.Lk)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,r.Lk)("span",{class:"navbar-toggler-icon"})],-1)),(0,r.Lk)("div",u,[(0,r.Lk)("ul",l,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(e.operations,(e=>((0,r.uX)(),(0,r.Wv)(_,{op:e,key:e},null,8,["op"])))),128)),(0,r.Lk)("li",c,[(0,r.Lk)("div",p,[(0,r.bo)((0,r.Lk)("input",{type:"checkbox",class:"form-check-input me-2 col-1",id:"input-mixed-question",name:"mixed-question","aria-label":"求任意值","onUpdate:modelValue":t[0]||(t[0]=t=>e.randomQuestion=t)},null,512),[[a.lH,e.randomQuestion]]),t[7]||(t[7]=(0,r.Lk)("label",{class:"form-check-label",for:"input-mixed-question"},"求任意值",-1))])])]),(0,r.Lk)("form",d,[(0,r.Lk)("div",v,[t[8]||(t[8]=(0,r.Lk)("label",{class:"input-group-text",for:"input-min-value"},"最小值",-1)),(0,r.Lk)("input",{value:e.min,onInput:t[1]||(t[1]=(...t)=>e.updateMin&&e.updateMin(...t)),class:"form-control me-2 col-1",id:"input-min-value",name:"input-min-value",type:"number",min:"0",max:"100","aria-label":"最小值"},null,40,m)]),(0,r.Lk)("div",f,[t[9]||(t[9]=(0,r.Lk)("label",{class:"input-group-text",for:"input-max-value"},"最大值",-1)),(0,r.Lk)("input",{value:e.max,onInput:t[2]||(t[2]=(...t)=>e.updateMax&&e.updateMax(...t)),class:"form-control me-2 col-1",id:"input-max-value",name:"input-max-value",type:"number",min:"0",max:"100","aria-label":"最大值"},null,40,h)]),(0,r.Lk)("div",b,[t[10]||(t[10]=(0,r.Lk)("label",{class:"input-group-text",for:"input-result-min-value"},"结果下限",-1)),(0,r.Lk)("input",{value:e.resultMin,onInput:t[3]||(t[3]=(...t)=>e.updateResultMin&&e.updateResultMin(...t)),class:"form-control me-2 col-1",id:"input-result-min-value",name:"input-result-min-value",type:"number","aria-label":"结果下限"},null,40,g)]),(0,r.Lk)("div",x,[t[11]||(t[11]=(0,r.Lk)("label",{class:"input-group-text",for:"input-result-max-value"},"结果上限",-1)),(0,r.Lk)("input",{value:e.resultMax,onInput:t[4]||(t[4]=(...t)=>e.updateResultMax&&e.updateResultMax(...t)),class:"form-control me-2 col-1",id:"input-result-max-value",name:"input-result-max-value",type:"number","aria-label":"结果上限"},null,40,k)]),(0,r.Lk)("button",{class:"btn btn-outline-success",onClick:t[5]||(t[5]=(0,a.D$)(((...t)=>e.shuffle&&e.shuffle(...t)),["prevent"]))},"生成"),(0,r.Lk)("button",{class:"btn btn-outline-success ms-2",onClick:t[6]||(t[6]=(0,a.D$)(((...t)=>e.print&&e.print(...t)),["prevent"]))},"打印")])])])]),(0,r.Lk)("div",M,[(0,r.Lk)("div",y,[(0,r.Lk)("div",L,[t[14]||(t[14]=(0,r.Lk)("div",{class:"mt-5"},null,-1)),(0,r.Lk)("h2",S,(0,i.v_)(e.operationName)+"练习题",1),t[15]||(t[15]=(0,r.Lk)("div",{id:"student-info",class:"row my-4 mx-1 px-2"},[(0,r.Lk)("div",{class:"col-2"},"姓名："),(0,r.Lk)("div",{class:"col-6"}),(0,r.Lk)("div",{class:"col-4 text-end"},"  年  月  日")],-1)),(0,r.bF)(F)])])])],64)}n(8077);var E=n(782);const C="MIN",_="MAX",F="RESULT_MIN",I="RESULT_MAX",w="OPERATION",A="SHUFFLE",O="RANDOM_QUESTION",Q={class:"nav-item"},P=["aria-current"];function X(e,t,n,o,s,u){return(0,r.uX)(),(0,r.CE)("li",Q,[(0,r.Lk)("a",{onClick:t[0]||(t[0]=(0,a.D$)(((...t)=>e.updatePage&&e.updatePage(...t)),["prevent"])),class:(0,i.C4)(["nav-link",{active:e.active}]),"aria-current":e.active?"page":void 0,href:"#"},(0,i.v_)(e.operation),11,P)])}var $,T=n(1114);(function(e){e["Plus"]="加法",e["Minus"]="减法",e["Multiply"]="乘法",e["Divide"]="除法",e["Mixed"]="混合"})($||($={}));class q{constructor(e,t){(0,T.A)(this,"type",void 0),(0,T.A)(this,"symbol",void 0),this.type=e,this.symbol=t}}const R=[$.Plus,$.Minus,$.Multiply,$.Divide,$.Mixed];class j extends q{constructor(){super($.Plus,"＋")}calculate(e,t){return e+t}}class D extends q{constructor(){super($.Minus,"－")}calculate(e,t){return e-t}}class V extends q{constructor(){super($.Multiply,"×")}calculate(e,t){return e*t}}class U extends q{constructor(){super($.Divide,"÷")}calculate(e,t){const n=e/t;return!isFinite(n)||isNaN(n)||Math.floor(n)!==n?NaN:n}}class H extends q{constructor(){const e=new([j,D][Math.floor(2*Math.random())]);super($.Mixed,e.symbol),(0,T.A)(this,"delegate",void 0),this.delegate=e}calculate(e,t){return this.delegate.calculate(e,t)}}const K={[$.Plus]:j,[$.Minus]:D,[$.Multiply]:V,[$.Divide]:U,[$.Mixed]:H};var G=(0,r.pM)({name:"NavItem",props:{op:String},computed:{operation(){return this.op||$.Plus},active(){return this.$store.state.operation===this.operation}},methods:{updatePage(){this.$store.commit(w,this.operation)}}}),W=n(1241);const B=(0,W.A)(G,[["render",X]]);var z=B;const J={key:0,class:"container"};function Y(e,t,n,a,i,o){const s=(0,r.g2)("SingleQuestion");return e.questionTable.length>0?((0,r.uX)(),(0,r.CE)("div",J,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(e.questionTable,(t=>((0,r.uX)(),(0,r.CE)("div",{class:"row questions-row",key:t},[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(t,(t=>((0,r.uX)(),(0,r.Wv)(s,{key:t,"left-value":t.lhs,"right-value":t.rhs,operation:t.op.symbol,result:t.result(),"random-question":e.randomQuestion},null,8,["left-value","right-value","operation","result","random-question"])))),128))])))),128))])):(0,r.Q3)("",!0)}n(4114);const Z={class:"question col-3 d-flex"};function ee(e,t,n,a,o,s){const u=(0,r.g2)("SingleValue");return(0,r.uX)(),(0,r.CE)("div",Z,[(0,r.bF)(u,{value:"lhs"===e.blankField?void 0:e.leftValue},null,8,["value"]),(0,r.Lk)("div",null,(0,i.v_)(e.operation),1),(0,r.bF)(u,{value:"rhs"===e.blankField?void 0:e.rightValue},null,8,["value"]),t[0]||(t[0]=(0,r.Lk)("div",null,"=",-1)),(0,r.bF)(u,{value:"result"===e.blankField?void 0:e.result},null,8,["value"])])}const te={key:0,class:"blank-box"},ne={key:1};function ae(e,t,n,a,o,s){return void 0===e.value?((0,r.uX)(),(0,r.CE)("div",te)):((0,r.uX)(),(0,r.CE)("div",ne,(0,i.v_)(e.value),1))}var re=(0,r.pM)({name:"SingleValue",props:{value:Number}});const ie=(0,W.A)(re,[["render",ae],["__scopeId","data-v-23dcb175"]]);var oe=ie,se=(0,r.pM)({name:"SingleQuestion",props:{leftValue:Number,rightValue:Number,operation:String,result:Number,randomQuestion:Boolean},computed:{blankField(){return this.randomQuestion?["lhs","rhs","result"][Math.floor(3*Math.random())]:"result"}},components:{SingleValue:oe}});const ue=(0,W.A)(se,[["render",ee],["__scopeId","data-v-79185f94"]]);var le=ue,ce=(0,r.pM)({name:"ExerciseGrid",props:{title:String,pairs:{type:Array}},computed:{...(0,E.aH)(["randomQuestion"]),questionTable(){const e=[],t=this.$store.state.numberSeries;for(let n=0;n<14;n++){const a=4*n+4;if(a<=t.length){const a=t.slice(4*n,4*n+4);e.push(a)}}return e}},components:{SingleQuestion:le}});const pe=(0,W.A)(ce,[["render",Y],["__scopeId","data-v-5ecde580"]]);var de=pe;function ve(e){try{const t=parseInt(e);if(isNaN(t)||!isFinite(t))return;return t}catch{}}var me=(0,r.pM)({name:"App",components:{NavItem:z,ExerciseGrid:de},data(){return{operations:R}},computed:{...(0,E.aH)(["min","max","resultMin","resultMax"]),...(0,E.L8)(["operationName"]),randomQuestion:{get(){return this.$store.state.randomQuestion},set(e){this.$store.commit(O,e)}}},methods:{updateMin(e){this.$store.commit(C,ve(e.target.value))},updateMax(e){this.$store.commit(_,ve(e.target.value))},updateResultMin(e){this.$store.commit(F,ve(e.target.value))},updateResultMax(e){this.$store.commit(I,ve(e.target.value))},shuffle(){this.$store.commit(A)},print(){window.print()}}});const fe=(0,W.A)(me,[["render",N]]);var he=fe;class be{constructor(e,t,n){(0,T.A)(this,"lhs",void 0),(0,T.A)(this,"rhs",void 0),(0,T.A)(this,"op",void 0),this.lhs=e,this.rhs=t,this.op=n}inScope(e,t,n,a){if(this.lhs<e||this.lhs>t)return!1;if(this.rhs<e||this.rhs>t)return!1;const r=this.op.calculate(this.lhs,this.rhs);return!(isNaN(r)||!isFinite(r)||Math.floor(r)!==r)&&!(r<n||r>a)}result(){return this.op.calculate(this.lhs,this.rhs)}}function ge(e,t,n,a,r){const i=[],o=K[n];for(let s=e;s<=t;s++)for(let n=e;n<=t;n++){const u=new be(s,n,new o);u.inScope(e,t,a,r)&&i.push(u)}return xe(i)}function xe(e){for(let t=0;t<e.length;t++){const n=t+Math.floor(Math.random()*(e.length-t)),a=e[t];e[t]=e[n],e[n]=a}return e}function ke(e){if(void 0!==e.min&&void 0!==e.max){const t=ge(e.min,e.max,e.operation,e.resultMin,e.resultMax);e.numberSeries.splice(0,e.numberSeries.length,...t)}else e.numberSeries.length=0}var Me=(0,E.y$)({state(){const e={min:1,max:20,resultMin:0,resultMax:100,operation:$.Plus,numberSeries:[],randomQuestion:!1};return e.numberSeries=ge(e.min,e.max,e.operation,e.resultMin,e.resultMax),e},getters:{operationName(e){return e.operation}},mutations:{[C](e,t){e.min!==t&&(e.min=t,ke(e))},[_](e,t){e.max!==t&&(e.max=t,ke(e))},[F](e,t){void 0===t&&(t=0),e.resultMin!==t&&(e.resultMin=t,ke(e))},[I](e,t){void 0===t&&(t=100),e.resultMax!==t&&(e.resultMax=t,ke(e))},[w](e,t){e.operation!==t&&(e.operation=t,ke(e))},[A](e){ke(e)},[O](e,t){e.randomQuestion!==t&&(e.randomQuestion=t)}}});(0,a.Ef)(he).use(Me).mount("#app")}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var i=t[a]={exports:{}};return e[a].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,a,r,i){if(!a){var o=1/0;for(c=0;c<e.length;c++){a=e[c][0],r=e[c][1],i=e[c][2];for(var s=!0,u=0;u<a.length;u++)(!1&i||o>=i)&&Object.keys(n.O).every((function(e){return n.O[e](a[u])}))?a.splice(u--,1):(s=!1,i<o&&(o=i));if(s){e.splice(c--,1);var l=r();void 0!==l&&(t=l)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[a,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={57:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var r,i,o=a[0],s=a[1],u=a[2],l=0;if(o.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(u)var c=u(n)}for(t&&t(a);l<o.length;l++)i=o[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},a=self["webpackChunkexercise_generator"]=self["webpackChunkexercise_generator"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[504],(function(){return n(6011)}));a=n.O(a)})();
//# sourceMappingURL=index.cb1167ba.js.map