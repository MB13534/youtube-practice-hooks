(this.webpackJsonpvideos=this.webpackJsonpvideos||[]).push([[0],{22:function(e,t,i){},42:function(e,t,i){"use strict";i.r(t);var c=i(0),n=i(1),s=i.n(n),a=i(14),r=i.n(a),d=i(3),o=function(e){var t=e.onFormSubmit,i=Object(n.useState)(""),s=Object(d.a)(i,2),a=s[0],r=s[1];return Object(c.jsx)("div",{className:"ui segment search-bar",children:Object(c.jsx)("form",{className:"ui form",onSubmit:function(e){e.preventDefault(),t(a),r("")},children:Object(c.jsxs)("div",{className:"field",children:[Object(c.jsx)("label",{children:"Video Search"}),Object(c.jsx)("input",{type:"text",placeholder:"Search...",value:a,onChange:function(e){return r(e.target.value)}})]})})})},u=(i(22),function(e){var t=e.video,i=e.onVideoSelect;return Object(c.jsxs)("div",{className:"item video-item",onClick:function(){return i(t)},children:[Object(c.jsx)("img",{src:t.snippet.thumbnails.medium.url,alt:t.snippet.title,className:"ui image"}),Object(c.jsx)("div",{className:"content",children:Object(c.jsx)("div",{className:"header",children:t.snippet.title})})]})}),l=function(e){var t=e.videos,i=e.onVideoSelect,n=t.map((function(e){return Object(c.jsx)(u,{onVideoSelect:i,video:e},e.id.videoId)}));return Object(c.jsx)("div",{className:"ui relaxed divided list",children:n})},j=function(e){var t=e.video;if(!t)return Object(c.jsx)("div",{children:"Loading..."});var i="https://youtube.com/embed/".concat(t.id.videoId);return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"ui embed",children:Object(c.jsx)("iframe",{title:"Video Player",src:i})}),Object(c.jsxs)("div",{className:"ui segment",children:[Object(c.jsx)("h4",{className:"ui header",children:t.snippet.title}),Object(c.jsx)("p",{children:t.snippet.description})]})]})},b=i(5),m=i.n(b),v=i(15),h=i(16),p=i.n(h).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",maxResults:5,key:"AIzaSyDFKoEXadQSmGSXGP3Vxlc7N3NUHd6InhI"}}),O=function(e){var t=Object(n.useState)([]),i=Object(d.a)(t,2),c=i[0],s=i[1];Object(n.useEffect)((function(){a(e)}),[e]);var a=function(){var e=Object(v.a)(m.a.mark((function e(t){var i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get("/search",{params:{q:t}});case 2:i=e.sent,s(i.data.items);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return[c,a]},x=function(){var e=s.a.useState(null),t=Object(d.a)(e,2),i=t[0],n=t[1],a=O("newfoundland dogs"),r=Object(d.a)(a,2),u=r[0],b=r[1];return s.a.useEffect((function(){n(u[0])}),[u]),Object(c.jsxs)("div",{className:"ui container",children:[Object(c.jsx)(o,{onFormSubmit:b}),Object(c.jsx)("div",{className:"ui grid",children:Object(c.jsxs)("div",{className:"ui row",children:[Object(c.jsx)("div",{className:"eleven wide column",children:Object(c.jsx)(j,{video:i})}),Object(c.jsx)("div",{className:"five wide column",children:Object(c.jsx)(l,{videos:u,onVideoSelect:n})})]})})]})};r.a.render(Object(c.jsx)(x,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.73e419e3.chunk.js.map