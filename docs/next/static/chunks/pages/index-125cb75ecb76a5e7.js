(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5658)}])},5658:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return R}});var r=n(5893),i=n(9008),a=n(214),l=n.n(a),o=n(9750),s=n(1849),u=n(9349),c=n.n(u),h=n(594),f=n(4416),v=n(4794),d=n(8945),p=n.n(d),m=n(7294),_=function(e){var t=e.options,n=e.defaultValue,i=void 0===n?t[0].value:n,a=e.title,l=e.onChange,o=(0,m.useState)(i),s=o[0],u=o[1],c=String(Math.round(1e6*Math.random()));return(0,r.jsxs)("label",{className:p().dropdown,htmlFor:c,children:[(0,r.jsx)("label",{className:p().title,children:a}),(0,r.jsx)("select",{name:c,id:c,value:s,onChange:function(e){u(e.target.value),l&&l(e)},children:t.map((function(e){return(0,r.jsx)("option",{value:e.value,children:e.label},e.value)}))})]})};function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Array,n=this;E(this,e),this.QUEUE_SIZE=0,this.LAST_ELEMENT=null,this.FIRST_ELEMENT=null,t.forEach((function(e){return n.push(e)}))}var t,n,r;return t=e,(n=[{key:"size",get:function(){return this.QUEUE_SIZE}},{key:"empty",get:function(){return 0==this.size}},{key:"front",get:function(){return null===this.FIRST_ELEMENT?(console.warn("Unable to access element from Empty Queue"),null):this.FIRST_ELEMENT.value}},{key:"push",value:function(e){var t={value:e,next:null};return 0===this.size||null===this.LAST_ELEMENT||null===this.FIRST_ELEMENT?(this.FIRST_ELEMENT=t,this.LAST_ELEMENT=t,this.QUEUE_SIZE=1,this.size):(this.LAST_ELEMENT.next=t,this.LAST_ELEMENT=t,this.QUEUE_SIZE++,this.size)}},{key:"pop",value:function(){if(null===this.FIRST_ELEMENT)return console.warn("Unable to pop element from empty queue"),null;var e=this.FIRST_ELEMENT.value;return this.FIRST_ELEMENT=this.FIRST_ELEMENT.next,this.QUEUE_SIZE--,e}}])&&g(t.prototype,n),r&&g(t,r),e}(),b=n(6289),w=[{value:"dfs",label:"Depth First Search"},{value:"bfs",label:"Breadth First Search"}],x=(0,f.$j)((function(e){return{visible:e.sideNav.visible}}),{closeSideNav:function(){return{type:v.f9,visible:!1}},createWithQueue:function(){return{type:v.eM,Store:y}},createWithStack:function(){return{type:v.eM,Store:b.Z}}})((function(e){var t=e.visible,n=void 0===t||t,i=e.closeSideNav,a=e.createWithQueue,l=e.createWithStack,o=[c().sidenav];n&&o.push(c().visible);return(0,r.jsxs)("nav",{className:o.join(" "),children:[(0,r.jsx)("button",{className:c().toggleButton,onClick:i,children:(0,r.jsx)(h.Z,{})}),(0,r.jsx)("div",{className:c().header,children:"Online Maze Game"}),(0,r.jsx)("br",{}),(0,r.jsx)(_,{options:w,defaultValue:"dfs",title:"Algorithm",onChange:function(e){"dfs"===e.target.value?l():a()}})]})})),N=n(492),S=n.n(N);function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var T=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.x=t,this.y=n,this.walls={top:!0,bottom:!0,left:!0,right:!0}}var t,n,r;return t=e,(n=[{key:"right",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return e||!this.walls.right?{x:this.x+1,y:this.y}:null}},{key:"left",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return e||!this.walls.left?{x:this.x-1,y:this.y}:null}},{key:"top",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return e||!this.walls.top?{x:this.x,y:this.y-1}:null}},{key:"bottom",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return e||!this.walls.top?{x:this.x,y:this.y+1}:null}},{key:"rightWall",set:function(e){this.walls.right=e}},{key:"leftWall",set:function(e){this.walls.left=e}},{key:"topWall",set:function(e){this.walls.top=e}},{key:"bottomWall",set:function(e){this.walls.bottom=e}}])&&j(t.prototype,n),r&&j(t,r),e}();var k=function(e,t,n){for(var r=new Array,i=0;i<t;i++){for(var a=new Array,l=0;l<e;l++)a.push(n);r.push(a)}return r};var M=function(e){for(var t,n=e.length;0!=n;){var r;t=Math.floor(Math.random()*n),n--,r=[e[t],e[n]],e[n]=r[0],e[t]=r[1]}return e};function W(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function z(e){switch(e){case"left":return"rightWall";case"right":return"leftWall";case"top":return"bottomWall";case"bottom":return"topWall"}}function L(e){switch(e){case"left":return"leftWall";case"right":return"rightWall";case"top":return"topWall";case"bottom":return"bottomWall"}}var C=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.width=t,this.height=n,this.maze=new Array;for(var r=0;r<n;r++){for(var i=new Array,a=0;a<t;a++)i.push(new T(a,r));this.maze.push(i)}this.maze[0][0].leftWall=!1,this.maze[n-1][t-1].rightWall=!1}var t,n,r;return t=e,(n=[{key:"toVisit",value:function(e,t){var n=e.x,r=e.y;return!(n<0||r<0||n>=this.width||r>=this.height)&&!t[r][n]}},{key:"gridAt",value:function(e){var t=e.x,n=e.y;return this.maze[n][t]}},{key:"build",value:function(e){var t=k(this.width,this.height,!1),n=new e;for(n.push(this.maze[0][0]),t[0][0]=!0;!n.empty;){var r=n.pop();if(null==r)return void console.error("Something Went Wrong While Building Maze");for(var i=M(["left","top","bottom","right"]),a=0;a<4;a++){var l=i[a],o=r[l](!0);if(null!==o&&this.toVisit(o,t)){t[o.y][o.x]=!0;var s=this.gridAt(o),u=L(l),c=z(l);r[u]=!1,s[c]=!1,n.push(r),n.push(s);break}}}}},{key:"result",get:function(){return this.maze.map((function(e){return e.map((function(e){return e.walls}))}))}}])&&W(t.prototype,n),r&&W(t,r),e}();function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var A=function(e){var t=e.top,n=e.left,i=e.right,a=e.bottom,l=e.x,o=e.y,s=[S().block];t&&s.push(S().topWall),n&&s.push(S().leftWall),i&&s.push(S().rightWall),a&&s.push(S().bottomWall);var u={top:36*o+"px",left:36*l+"px"};return(0,r.jsx)("div",{className:s.join(" "),style:u,onClick:function(e){e.target.classList.toggle(S().selected)}})},O=(0,f.$j)((function(e){return{screenWidth:e.screen.width,screenHeight:e.screen.height,ID:"".concat(e.screen.refreshCount,":").concat(e.mazeBuild.id),Store:e.mazeBuild.Store}}),{viewportResize:function(){return{type:v.PJ,width:window.innerWidth,height:window.innerHeight}}})((function(e){var t=e.ID,n=e.screenWidth,i=e.screenHeight,a=e.viewportResize,l=e.Store;(0,m.useEffect)((function(){a(),window.addEventListener("resize",a)}),[]);t+=Math.floor(1e9*Math.random());var o=Math.floor((n-100)/36),s=Math.floor((i-100)/36),u=new C(o,s);u.build(l);var c=u.result,h={height:36*s+"px",width:36*o+"px"};return(0,r.jsx)("div",{className:S().mazeContainer,children:(0,r.jsx)("div",{className:S().maze,style:h,children:c.map((function(e,n){return e.map((function(e,i){return(0,r.jsx)(A,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){I(e,t,n[t])}))}return e}({x:i,y:n},e),"".concat(t,":").concat(i,":").concat(n))}))}))},t)})})),R=(0,f.$j)(null,{openSideNav:function(){return{type:v.f9,visible:!0}},refreshMaze:function(){return{type:v.a8}}})((function(e){var t=e.openSideNav,n=e.refreshMaze;return(0,r.jsxs)("div",{className:l().container,children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:"Online Maze Game powered by AI | By Suraj Jha"}),(0,r.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)("button",{className:l().sideNavToggleButton,onClick:t,children:(0,r.jsx)(o.Z,{})}),(0,r.jsx)("button",{className:l().refreshButton,onClick:n,children:(0,r.jsx)(s.Z,{})}),(0,r.jsx)(x,{}),(0,r.jsx)(O,{})]})}))},214:function(e){e.exports={sideNavToggleButton:"Home_sideNavToggleButton__MCLVv",refreshButton:"Home_refreshButton__N0QXD"}},8945:function(e){e.exports={dropdown:"DropDown_dropdown___2jPR",title:"DropDown_title__H1k4T"}},492:function(e){e.exports={mazeContainer:"MazeElement_mazeContainer__5gudJ",maze:"MazeElement_maze__pmXR0",block:"MazeElement_block___ghWA",selected:"MazeElement_selected__QfRYG",topWall:"MazeElement_topWall__GZPTo",leftWall:"MazeElement_leftWall__FZ4U7",rightWall:"MazeElement_rightWall__1oARD",bottomWall:"MazeElement_bottomWall__0OxEp"}},9349:function(e){e.exports={sidenav:"SideNav_sidenav__FFgfP",header:"SideNav_header__hkWsa",visible:"SideNav_visible__GH0RT",toggleButton:"SideNav_toggleButton___XJGj"}}},function(e){e.O(0,[468,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);