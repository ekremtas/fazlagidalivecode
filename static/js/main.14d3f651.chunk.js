(this.webpackJsonpfazlagidalivecode=this.webpackJsonpfazlagidalivecode||[]).push([[0],{117:function(t,e,a){"use strict";a.r(e);var r=a(0),n=a.n(r),c=a(50),o=a.n(c),l=a(19),i=(a(95),a(96),a(118)),s=Object(l.b)((function(t){var e=t.chartsReducer;return{loading:e.loading,tracks:e.tracks,title:e.title}}),null)((function(t){return n.a.createElement(n.a.Fragment,null,t.loading.ArtistsPage?n.a.createElement(i.a,{animation:"border",role:"status"}):0!==t.tracks.length?n.a.createElement(h,{data:{data:t.tracks,chart:"column",title:t.title.track,name:"Tracks",xAxisType:"category",yAxisTitle:"Total percent market share"}}):n.a.createElement("h1",null,t.title.track))})),u=Object(l.b)((function(t){var e=t.chartsReducer;return{loading:e.loading,artists:e.artists,title:e.title}}),null)((function(t){return n.a.createElement(n.a.Fragment,null,t.loading.ArtistsPage?n.a.createElement(i.a,{animation:"border",role:"status"}):0!==t.artists.length?n.a.createElement(h,{data:{data:t.artists,chart:"column",title:t.title.artist,name:"Artist",xAxisType:"category",yAxisTitle:"Total percent market share"}}):n.a.createElement("h1",null,t.title.artist))})),m=a(66),d=a.n(m),p=a(80),b=a.n(p),h=function(t){var e=t.data,a={chart:{type:e.chart},title:{text:e.title},xAxis:{type:e.xAxisType},yAxis:{title:{text:e.yAxisTitle}},legend:{enabled:!1},plotOptions:{series:{borderWidth:0,dataLabels:{enabled:!0,format:"{point.y:.1f}"}}},tooltip:{headerFormat:'<span style="font-size:11px">{series.name}</span><br>',pointFormat:'<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}</b> of total<br/>'},series:[{name:e.name,colorByPoint:!0,data:e.data}]};return n.a.createElement("div",null,n.a.createElement(b.a,{highcharts:d.a,options:a}))},g=a(59),f=a(119),y=a(120),T=a(121),O=a(122),E=a(48),j=a(64),A=a(98),v="https://ws.audioscrobbler.com/2.0/",k="97cee60fe2193b383cd8377301901a80",S=j.b().shape({country:j.c().required("Country is a required field").min(2),topnumber:j.a().positive().integer().required("Topnumber is a required field")}),R={setArtTraForm:function(t){return function(e){e({type:"SET_ART_TRA_FORM",payload:t})}}},x=Object(l.b)(null,R)((function(t){return n.a.createElement(E.b,{initialValues:{country:"TURKEY",topnumber:"10"},validationSchema:S,onSubmit:function(e,a){(0,a.setSubmitting)(!0),t.setArtTraForm(e)}},(function(t){t.values,t.errors,t.touched;var e=t.isSubmitting,a=t.handleChange,r=(t.setFieldValue,t.resetForm,t.setSubmitting);return n.a.createElement(E.a,{className:"m-5"},n.a.createElement("h1",{className:"mb-4 display-2"},"Highchart Challenge"),n.a.createElement(y.a,null,n.a.createElement(T.a,{md:"6"},n.a.createElement(I,{name:"country",type:"text",label:"Country Name :",placeholder:"Enter Country Name",onChange:function(t){a(t),r(!1)}})),n.a.createElement(T.a,{md:"6"},n.a.createElement(I,{name:"topnumber",type:"text",label:"Top Number :",placeholder:"Enter Top Number",onChange:function(t){a(t),r(!1)}}))),n.a.createElement(O.a,{color:"success",disabled:e,type:"submit"},"Submit"))}))})),_=a(86),N=a(123),C=a(124),G=a(125),w=a(126),I=function(t){var e=t.label,a=t.example,r=Object(_.a)(t,["label","example"]),c=Object(E.c)(r),o=Object(g.a)(c,2),l=o[0],i=o[1];return n.a.createElement(N.a,null,n.a.createElement(C.a,null,e),n.a.createElement(f.a,Object.assign({},l,r,{invalid:i.error,valid:!i.error&&l.value})),n.a.createElement(G.a,{invalid:i.error,valid:!i.error&&l.value},i.error),a?n.a.createElement(w.a,null,a):null)},F=a(127),P={getTracks:function(t,e){return function(a){a({type:"TRACKS_LOADING"}),A.get("".concat(v,"?method=geo.gettoptracks&country=").concat(t,"&api_key=").concat(k,"&format=json&limit=").concat(e)).then((function(r){void 0!==r.data.tracks?a({type:"GET_TRACKS",payload:{data:r.data.tracks.track,title:"Top ".concat(e," Tracks in ").concat(t.toUpperCase())}}):a({type:"GET_TRACKS",payload:{data:[],title:'No track for country of "'.concat(t.toUpperCase(),'"')}})})).catch((function(t){console.log(t)}))}},getArtists:function(t,e){return function(a){a({type:"ARTISTS_LOADING"}),A.get("".concat(v,"?method=geo.gettopartists&country=").concat(t,"&api_key=").concat(k,"&format=json&limit=").concat(e)).then((function(r){void 0!==r.data.topartists?a({type:"GET_ARTISTS",payload:{data:r.data.topartists.artist,title:"Top ".concat(e," Artist in ").concat(t.toUpperCase())}}):a({type:"GET_ARTISTS",payload:{data:[],title:'No artist for country of "'.concat(t.toUpperCase(),'"')}})})).catch((function(t){console.log(t)}))}}},L=Object(l.b)((function(t){return{highchartform:t.chartsReducer.highchartform}}),P)((function(t){return Object(r.useEffect)((function(){t.getTracks(t.highchartform.country,t.highchartform.topnumber),t.getArtists(t.highchartform.country,t.highchartform.topnumber)}),[t]),n.a.createElement(F.a,null,n.a.createElement(x,null),n.a.createElement("hr",null),n.a.createElement(s,null),n.a.createElement("hr",null),n.a.createElement(u,null))}));var D=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(L,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var K=a(29),U=a(84),q=a(5),W={loading:{},tracks:[],title:{},artists:[],highchartform:{country:"turkey",topnumber:10}},z=a(85),B=Object(K.combineReducers)({chartsReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"PAGE_LOADING":return Object(q.a)(Object(q.a)({},t),{},{loading:Object(q.a)(Object(q.a)({},t.loading),{},{LastfmPage:!0})});case"ARTISTS_LOADING":return Object(q.a)(Object(q.a)({},t),{},{loading:Object(q.a)(Object(q.a)({},t.loading),{},{ArtistsPage:!0})});case"TRACKS_LOADING":return Object(q.a)(Object(q.a)({},t),{},{loading:Object(q.a)(Object(q.a)({},t.loading),{},{TracksPage:!0})});case"GET_TRACKS":return Object(q.a)(Object(q.a)({},t),{},{tracks:e.payload.data.map((function(t){return{name:t.name,y:Number(t.listeners)}})),title:Object(q.a)(Object(q.a)({},t.title),{},{track:e.payload.title}),loading:Object(q.a)(Object(q.a)({},t.loading),{},{TracksPage:!1})});case"GET_ARTISTS":return Object(q.a)(Object(q.a)({},t),{},{artists:e.payload.data.map((function(t){return{name:t.name,y:Number(t.listeners)}})),title:Object(q.a)(Object(q.a)({},t.title),{},{artist:e.payload.title}),loading:Object(q.a)(Object(q.a)({},t.loading),{},{ArtistsPage:!1})});case"SET_ART_TRA_FORM":return Object(q.a)(Object(q.a)({},t),{},{highchartform:Object(q.a)(Object(q.a)({},t.highchartform),{},{country:e.payload.country,topnumber:Number(e.payload.topnumber)})});default:return t}}}),M=Object(K.createStore)(B,Object(z.composeWithDevTools)(Object(K.applyMiddleware)(U.a)));a(116);o.a.render(n.a.createElement(l.a,{store:M},n.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},87:function(t,e,a){t.exports=a(117)},95:function(t,e,a){},96:function(t,e,a){}},[[87,1,2]]]);
//# sourceMappingURL=main.14d3f651.chunk.js.map