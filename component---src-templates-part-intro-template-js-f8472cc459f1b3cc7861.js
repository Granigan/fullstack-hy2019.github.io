(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{130:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return b}),n.d(t,"partInfoQuery",function(){return w});n(73),n(274);var r=n(181),a=n.n(r),o=n(168),i=n.n(o),u=n(157),s=n.n(u),c=n(0),l=n.n(c),f=n(158),p=n(159),d=n(162),h=n(141),v=n(145),m=n(148),g=n(226);function b(e){var t=e.data.markdownRemark,n=t.frontmatter,r=t.html,o=n.mainImage,u=n.title,c=n.partColor,b=n.part,w=n.navigation,y={replace:function(e){var t=e.type,n=e.attribs,r=e.children;if("tag"===t&&"intro"===n.class)return l.a.createElement("div",{className:"col-7"},s()(r,y))}},T=w?w.split("@"):[];return l.a.createElement(m.a,null,l.a.createElement(d.a,{style:{backgroundImage:"url("+a.a.resolve(o.publicURL)+")",backgroundPosition:"center right",backgroundSize:"80%",backgroundRepeat:"no-repeat",backgroundColor:f[c]},className:"spacing spacing--after"},l.a.createElement(h.a,{className:"container"},l.a.createElement(p.a,{upperCase:!0,content:[{backgroundColor:f[c],text:"Fullstack",link:"/about"},{backgroundColor:"black",text:u}]}),l.a.createElement("div",{className:"part-intro col-7"},i()(r,y)),l.a.createElement(p.a,{className:"spacing",stack:!0,content:T.map(function(e){var t=e.split("|");return{letter:t[0],path:t[1],text:t[2]}})}))),l.a.createElement(g.a,{prev:b>0?b-1:void 0,next:b<8?b+1:void 0}),l.a.createElement(v.a,null))}var w="2519141011"},139:function(e,t,n){"use strict";var r=n(8);t.__esModule=!0,t.withPrefix=d,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var a=r(n(140)),o=r(n(160)),i=r(n(6)),u=r(n(46)),s=r(n(47)),c=r(n(4)),l=r(n(0)),f=n(19),p=n(138);function d(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var h={activeClassName:c.default.string,activeStyle:c.default.object},v=function(e){function t(t){var n;n=e.call(this)||this,(0,s.default)((0,u.default)((0,u.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,o.default)({},n.props.style,n.props.activeStyle)}:null});var r=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(r=!0),n.state={IOSupported:r},n.handleRef=n.handleRef.bind((0,u.default)((0,u.default)(n))),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,r,a=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,p.parsePath)(a.props.to).pathname)},(r=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t),r.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,r=t.getProps,i=void 0===r?this.defaultGetProps:r,u=t.onClick,s=t.onMouseEnter,c=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),h=t.replace,v=(0,a.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),m=d(n);return l.default.createElement(f.Link,(0,o.default)({to:m,state:c,getProps:i,innerRef:this.handleRef,onMouseEnter:function(e){s&&s(e),___loader.hovering((0,p.parsePath)(n).pathname)},onClick:function(t){return u&&u(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),g(n,{state:c,replace:h})),!0}},v))},t}(l.default.Component);v.propTypes=(0,o.default)({},h,{innerRef:c.default.func,onClick:c.default.func,to:c.default.string.isRequired,replace:c.default.bool});var m=v;t.default=m;var g=function(e,t){window.___navigate(d(e),t)};t.navigate=g;var b=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(d(e))};t.push=b;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(d(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),b(e)}},140:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}},149:function(e,t,n){var r=n(21),a=n(23),o=n(24),i=/"/g,u=function(e,t,n,r){var a=String(o(e)),u="<"+t;return""!==n&&(u+=" "+n+'="'+String(r).replace(i,"&quot;")+'"'),u+">"+a+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(u),r(r.P+r.F*a(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},160:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},163:function(e,t,n){"use strict";n(149)("small",function(e){return function(){return e(this,"small","","")}})},181:function(e,t,n){(function(e){function n(e,t){for(var n=0,r=e.length-1;r>=0;r--){var a=e[r];"."===a?e.splice(r,1):".."===a?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}var r=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,a=function(e){return r.exec(e).slice(1)};function o(e,t){if(e.filter)return e.filter(t);for(var n=[],r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n}t.resolve=function(){for(var t="",r=!1,a=arguments.length-1;a>=-1&&!r;a--){var i=a>=0?arguments[a]:e.cwd();if("string"!=typeof i)throw new TypeError("Arguments to path.resolve must be strings");i&&(t=i+"/"+t,r="/"===i.charAt(0))}return(r?"/":"")+(t=n(o(t.split("/"),function(e){return!!e}),!r).join("/"))||"."},t.normalize=function(e){var r=t.isAbsolute(e),a="/"===i(e,-1);return(e=n(o(e.split("/"),function(e){return!!e}),!r).join("/"))||r||(e="."),e&&a&&(e+="/"),(r?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(o(e,function(e,t){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e}).join("/"))},t.relative=function(e,n){function r(e){for(var t=0;t<e.length&&""===e[t];t++);for(var n=e.length-1;n>=0&&""===e[n];n--);return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var a=r(e.split("/")),o=r(n.split("/")),i=Math.min(a.length,o.length),u=i,s=0;s<i;s++)if(a[s]!==o[s]){u=s;break}var c=[];for(s=u;s<a.length;s++)c.push("..");return(c=c.concat(o.slice(u))).join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){var t=a(e),n=t[0],r=t[1];return n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."},t.basename=function(e,t){var n=a(e)[2];return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){return a(e)[3]};var i="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n(182))},182:function(e,t){var n,r,a=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function u(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var s,c=[],l=!1,f=-1;function p(){l&&s&&(l=!1,s.length?c=s.concat(c):f=-1,c.length&&d())}function d(){if(!l){var e=u(p);l=!0;for(var t=c.length;t;){for(s=c,c=[];++f<t;)s&&s[f].run();f=-1,t=c.length}s=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function v(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new h(e,t)),1!==c.length||l||u(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=v,a.addListener=v,a.once=v,a.off=v,a.removeListener=v,a.removeAllListeners=v,a.emit=v,a.prependListener=v,a.prependOnceListener=v,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},274:function(e,t,n){}}]);
//# sourceMappingURL=component---src-templates-part-intro-template-js-f8472cc459f1b3cc7861.js.map