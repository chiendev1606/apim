(self.webpackChunkqldp=self.webpackChunkqldp||[]).push([[644],{4545:(e,n,t)=>{"use strict";t.d(n,{Z:()=>c});var r=t(1413),o=t(7294);const i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"};var l=t(76),a=function(e,n){return o.createElement(l.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:n,icon:i}))};a.displayName="EllipsisOutlined";const c=o.forwardRef(a)},6529:(e,n,t)=>{"use strict";t.d(n,{J:()=>a,Z:()=>c});var r=t(7462),o=t(7294),i=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t},l=o.createContext(null),a=function(e){var n=e.children,t=i(e,["children"]),a=o.useContext(l),c=o.useMemo((function(){return(0,r.Z)((0,r.Z)({},a),t)}),[a,t.prefixCls,t.mode,t.selectable]);return o.createElement(l.Provider,{value:c},n)};const c=l},2644:(e,n,t)=>{"use strict";t.d(n,{Z:()=>mn});var r=t(5671),o=t(3144),i=t(136),l=t(4062),a=t(7462),c=t(4545),u=t(4184),s=t.n(u),f=t(4942),d=t(1413),v=t(3433),p=t(9439),m=t(5987),E=t(7294),y=t(6774),C=t.n(y),Z=t(1770),h=t(334),b=t(9214),N=t(5105),g=t(8423),I=t(6982),M=["children","locked"],S=E.createContext(null);function O(e){var n=e.children,t=e.locked,r=(0,m.Z)(e,M),o=E.useContext(S),i=(0,I.Z)((function(){return e=o,n=r,t=(0,d.Z)({},e),Object.keys(n).forEach((function(e){var r=n[e];void 0!==r&&(t[e]=r)})),t;var e,n,t}),[o,r],(function(e,n){return!(t||e[0]===n[0]&&C()(e[1],n[1]))}));return E.createElement(S.Provider,{value:i},n)}function P(e,n,t,r){var o=E.useContext(S),i=o.activeKey,l=o.onActive,a=o.onInactive,c={active:i===e};return n||(c.onMouseEnter=function(n){null==t||t({key:e,domEvent:n}),l(e)},c.onMouseLeave=function(n){null==r||r({key:e,domEvent:n}),a(e)}),c}var x=["item"];function R(e){var n=e.item,t=(0,m.Z)(e,x);return Object.defineProperty(t,"item",{get:function(){return(0,h.ZP)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),n}}),t}function T(e){var n=e.icon,t=e.props,r=e.children;return("function"==typeof n?E.createElement(n,(0,d.Z)({},t)):n)||r||null}function w(e){var n=E.useContext(S),t=n.mode,r=n.rtl,o=n.inlineIndent;if("inline"!==t)return null;return r?{paddingRight:e*o}:{paddingLeft:e*o}}var K=[],A=E.createContext(null);function _(){return E.useContext(A)}var k=E.createContext(K);function L(e){var n=E.useContext(k);return E.useMemo((function(){return void 0!==e?[].concat((0,v.Z)(n),[e]):n}),[n,e])}var U=E.createContext(null),D=E.createContext(null);function F(e,n){return void 0===e?null:"".concat(e,"-").concat(n)}function j(e){return F(E.useContext(D),e)}const H=E.createContext({});var z=["title","attribute","elementRef"],V=["style","className","eventKey","warnKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"],W=["active"],G=function(e){(0,i.Z)(t,e);var n=(0,l.Z)(t);function t(){return(0,r.Z)(this,t),n.apply(this,arguments)}return(0,o.Z)(t,[{key:"render",value:function(){var e=this.props,n=e.title,t=e.attribute,r=e.elementRef,o=(0,m.Z)(e,z),i=(0,g.Z)(o,["eventKey"]);return(0,h.ZP)(!t,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),E.createElement(b.Z.Item,(0,a.Z)({},t,{title:"string"==typeof n?n:void 0},i,{ref:r}))}}]),t}(E.Component),B=function(e){var n,t=e.style,r=e.className,o=e.eventKey,i=(e.warnKey,e.disabled),l=e.itemIcon,c=e.children,u=e.role,p=e.onMouseEnter,y=e.onMouseLeave,C=e.onClick,Z=e.onKeyDown,h=e.onFocus,b=(0,m.Z)(e,V),g=j(o),I=E.useContext(S),M=I.prefixCls,O=I.onItemClick,x=I.disabled,K=I.overflowDisabled,A=I.itemIcon,_=I.selectedKeys,k=I.onActive,U=E.useContext(H)._internalRenderMenuItem,D="".concat(M,"-item"),F=E.useRef(),z=E.useRef(),B=x||i,Q=L(o);var Y=function(e){return{key:o,keyPath:(0,v.Z)(Q).reverse(),item:F.current,domEvent:e}},X=l||A,q=P(o,B,p,y),$=q.active,J=(0,m.Z)(q,W),ee=_.includes(o),ne=w(Q.length),te={};"option"===e.role&&(te["aria-selected"]=ee);var re=E.createElement(G,(0,a.Z)({ref:F,elementRef:z,role:null===u?"none":u||"menuitem",tabIndex:i?null:-1,"data-menu-id":K&&g?null:g},b,J,te,{component:"li","aria-disabled":i,style:(0,d.Z)((0,d.Z)({},ne),t),className:s()(D,(n={},(0,f.Z)(n,"".concat(D,"-active"),$),(0,f.Z)(n,"".concat(D,"-selected"),ee),(0,f.Z)(n,"".concat(D,"-disabled"),B),n),r),onClick:function(e){if(!B){var n=Y(e);null==C||C(R(n)),O(n)}},onKeyDown:function(e){if(null==Z||Z(e),e.which===N.Z.ENTER){var n=Y(e);null==C||C(R(n)),O(n)}},onFocus:function(e){k(o),null==h||h(e)}}),c,E.createElement(T,{props:(0,d.Z)((0,d.Z)({},e),{},{isSelected:ee}),icon:X}));return U&&(re=U(re,e,{selected:ee})),re};const Q=function(e){var n=e.eventKey,t=_(),r=L(n);return E.useEffect((function(){if(t)return t.registerPath(n,r),function(){t.unregisterPath(n,r)}}),[r]),t?null:E.createElement(B,e)};var Y=t(1002),X=t(344),q=["label","children","key","type"];function $(e,n){return(0,X.Z)(e).map((function(e,t){if(E.isValidElement(e)){var r,o,i=e.key,l=null!==(r=null===(o=e.props)||void 0===o?void 0:o.eventKey)&&void 0!==r?r:i;null==l&&(l="tmp_key-".concat([].concat((0,v.Z)(n),[t]).join("-")));var a={key:l,eventKey:l};return E.cloneElement(e,a)}return e}))}function J(e){return(e||[]).map((function(e,n){if(e&&"object"===(0,Y.Z)(e)){var t=e.label,r=e.children,o=e.key,i=e.type,l=(0,m.Z)(e,q),c=null!=o?o:"tmp-".concat(n);return r||"group"===i?"group"===i?E.createElement(We,(0,a.Z)({key:c},l,{title:t}),J(r)):E.createElement(Ze,(0,a.Z)({key:c},l,{title:t}),J(r)):"divider"===i?E.createElement(Ge,(0,a.Z)({key:c},l)):E.createElement(Q,(0,a.Z)({key:c},l),t)}return null})).filter((function(e){return e}))}function ee(e,n,t){var r=e;return n&&(r=J(n)),$(r,t)}function ne(e){var n=E.useRef(e);n.current=e;var t=E.useCallback((function(){for(var e,t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return null===(e=n.current)||void 0===e?void 0:e.call.apply(e,[n].concat(r))}),[]);return e?t:void 0}var te=["className","children"],re=function(e,n){var t=e.className,r=e.children,o=(0,m.Z)(e,te),i=E.useContext(S),l=i.prefixCls,c=i.mode,u=i.rtl;return E.createElement("ul",(0,a.Z)({className:s()(l,u&&"".concat(l,"-rtl"),"".concat(l,"-sub"),"".concat(l,"-").concat("inline"===c?"inline":"vertical"),t)},o,{"data-menu-list":!0,ref:n}),r)},oe=E.forwardRef(re);oe.displayName="SubMenuList";const ie=oe;var le=t(2306),ae=t(5164),ce={adjustX:1,adjustY:1},ue={topLeft:{points:["bl","tl"],overflow:ce,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:ce,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:ce,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:ce,offset:[4,0]}},se={topLeft:{points:["bl","tl"],overflow:ce,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:ce,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:ce,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:ce,offset:[4,0]}};function fe(e,n,t){return n||(t?t[e]||t.other:void 0)}var de={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function ve(e){var n=e.prefixCls,t=e.visible,r=e.children,o=e.popup,i=e.popupClassName,l=e.popupOffset,a=e.disabled,c=e.mode,u=e.onVisibleChange,v=E.useContext(S),m=v.getPopupContainer,y=v.rtl,C=v.subMenuOpenDelay,Z=v.subMenuCloseDelay,h=v.builtinPlacements,b=v.triggerSubMenuAction,N=v.forceSubMenuRender,g=v.rootClassName,I=v.motion,M=v.defaultMotions,O=E.useState(!1),P=(0,p.Z)(O,2),x=P[0],R=P[1],T=y?(0,d.Z)((0,d.Z)({},se),h):(0,d.Z)((0,d.Z)({},ue),h),w=de[c],K=fe(c,I,M),A=(0,d.Z)((0,d.Z)({},K),{},{leavedClassName:"".concat(n,"-hidden"),removeOnLeave:!1,motionAppear:!0}),_=E.useRef();return E.useEffect((function(){return _.current=(0,ae.Z)((function(){R(t)})),function(){ae.Z.cancel(_.current)}}),[t]),E.createElement(le.Z,{prefixCls:n,popupClassName:s()("".concat(n,"-popup"),(0,f.Z)({},"".concat(n,"-rtl"),y),i,g),stretch:"horizontal"===c?"minWidth":null,getPopupContainer:m,builtinPlacements:T,popupPlacement:w,popupVisible:x,popup:o,popupAlign:l&&{offset:l},action:a?[]:[b],mouseEnterDelay:C,mouseLeaveDelay:Z,onPopupVisibleChange:u,forceRender:N,popupMotion:A},r)}var pe=t(3441);function me(e){var n=e.id,t=e.open,r=e.keyPath,o=e.children,i="inline",l=E.useContext(S),c=l.prefixCls,u=l.forceSubMenuRender,s=l.motion,f=l.defaultMotions,v=l.mode,m=E.useRef(!1);m.current=v===i;var y=E.useState(!m.current),C=(0,p.Z)(y,2),Z=C[0],h=C[1],b=!!m.current&&t;E.useEffect((function(){m.current&&h(!1)}),[v]);var N=(0,d.Z)({},fe(i,s,f));r.length>1&&(N.motionAppear=!1);var g=N.onVisibleChanged;return N.onVisibleChanged=function(e){return m.current||e||h(!0),null==g?void 0:g(e)},Z?null:E.createElement(O,{mode:i,locked:!m.current},E.createElement(pe.Z,(0,a.Z)({visible:b},N,{forceRender:u,removeOnLeave:!1,leavedClassName:"".concat(c,"-hidden")}),(function(e){var t=e.className,r=e.style;return E.createElement(ie,{id:n,className:t,style:r},o)})))}var Ee=["style","className","title","eventKey","warnKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"],ye=["active"],Ce=function(e){var n,t=e.style,r=e.className,o=e.title,i=e.eventKey,l=(e.warnKey,e.disabled),c=e.internalPopupClose,u=e.children,v=e.itemIcon,y=e.expandIcon,C=e.popupClassName,Z=e.popupOffset,h=e.onClick,N=e.onMouseEnter,g=e.onMouseLeave,I=e.onTitleClick,M=e.onTitleMouseEnter,x=e.onTitleMouseLeave,K=(0,m.Z)(e,Ee),A=j(i),_=E.useContext(S),k=_.prefixCls,D=_.mode,F=_.openKeys,z=_.disabled,V=_.overflowDisabled,W=_.activeKey,G=_.selectedKeys,B=_.itemIcon,Q=_.expandIcon,Y=_.onItemClick,X=_.onOpenChange,q=_.onActive,$=E.useContext(H)._internalRenderSubMenuItem,J=E.useContext(U).isSubPathKey,ee=L(),te="".concat(k,"-submenu"),re=z||l,oe=E.useRef(),le=E.useRef();var ae=v||B,ce=y||Q,ue=F.includes(i),se=!V&&ue,fe=J(G,i),de=P(i,re,M,x),pe=de.active,Ce=(0,m.Z)(de,ye),Ze=E.useState(!1),he=(0,p.Z)(Ze,2),be=he[0],Ne=he[1],ge=function(e){re||Ne(e)},Ie=E.useMemo((function(){return pe||"inline"!==D&&(be||J([W],i))}),[D,pe,W,be,i,J]),Me=w(ee.length),Se=ne((function(e){null==h||h(R(e)),Y(e)})),Oe=A&&"".concat(A,"-popup"),Pe=E.createElement("div",(0,a.Z)({role:"menuitem",style:Me,className:"".concat(te,"-title"),tabIndex:re?null:-1,ref:oe,title:"string"==typeof o?o:null,"data-menu-id":V&&A?null:A,"aria-expanded":se,"aria-haspopup":!0,"aria-controls":Oe,"aria-disabled":re,onClick:function(e){re||(null==I||I({key:i,domEvent:e}),"inline"===D&&X(i,!ue))},onFocus:function(){q(i)}},Ce),o,E.createElement(T,{icon:"horizontal"!==D?ce:null,props:(0,d.Z)((0,d.Z)({},e),{},{isOpen:se,isSubMenu:!0})},E.createElement("i",{className:"".concat(te,"-arrow")}))),xe=E.useRef(D);if("inline"!==D&&(xe.current=ee.length>1?"vertical":D),!V){var Re=xe.current;Pe=E.createElement(ve,{mode:Re,prefixCls:te,visible:!c&&se&&"inline"!==D,popupClassName:C,popupOffset:Z,popup:E.createElement(O,{mode:"horizontal"===Re?"vertical":Re},E.createElement(ie,{id:Oe,ref:le},u)),disabled:re,onVisibleChange:function(e){"inline"!==D&&X(i,e)}},Pe)}var Te=E.createElement(b.Z.Item,(0,a.Z)({role:"none"},K,{component:"li",style:t,className:s()(te,"".concat(te,"-").concat(D),r,(n={},(0,f.Z)(n,"".concat(te,"-open"),se),(0,f.Z)(n,"".concat(te,"-active"),Ie),(0,f.Z)(n,"".concat(te,"-selected"),fe),(0,f.Z)(n,"".concat(te,"-disabled"),re),n)),onMouseEnter:function(e){ge(!0),null==N||N({key:i,domEvent:e})},onMouseLeave:function(e){ge(!1),null==g||g({key:i,domEvent:e})}}),Pe,!V&&E.createElement(me,{id:Oe,open:se,keyPath:ee},u));return $&&(Te=$(Te,e,{selected:fe,active:Ie,open:se,disabled:re})),E.createElement(O,{onItemClick:Se,mode:"horizontal"===D?"vertical":D,itemIcon:ae,expandIcon:ce},Te)};function Ze(e){var n,t=e.eventKey,r=e.children,o=L(t),i=$(r,o),l=_();return E.useEffect((function(){if(l)return l.registerPath(t,o),function(){l.unregisterPath(t,o)}}),[o]),n=l?i:E.createElement(Ce,e,i),E.createElement(k.Provider,{value:o},n)}var he=t(8603),be=N.Z.LEFT,Ne=N.Z.RIGHT,ge=N.Z.UP,Ie=N.Z.DOWN,Me=N.Z.ENTER,Se=N.Z.ESC,Oe=N.Z.HOME,Pe=N.Z.END,xe=[ge,Ie,be,Ne];function Re(e,n){return(0,he.tS)(e,!0).filter((function(e){return n.has(e)}))}function Te(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if(!e)return null;var o=Re(e,n),i=o.length,l=o.findIndex((function(e){return t===e}));return r<0?-1===l?l=i-1:l-=1:r>0&&(l+=1),o[l=(l+i)%i]}function we(e,n,t,r,o,i,l,a,c,u){var s=E.useRef(),d=E.useRef();d.current=n;var v=function(){ae.Z.cancel(s.current)};return E.useEffect((function(){return function(){v()}}),[]),function(p){var m=p.which;if([].concat(xe,[Me,Se,Oe,Pe]).includes(m)){var E,y,C,Z=function(){return E=new Set,y=new Map,C=new Map,i().forEach((function(e){var n=document.querySelector("[data-menu-id='".concat(F(r,e),"']"));n&&(E.add(n),C.set(n,e),y.set(e,n))})),E};Z();var h=function(e,n){for(var t=e||document.activeElement;t;){if(n.has(t))return t;t=t.parentElement}return null}(y.get(n),E),b=C.get(h),N=function(e,n,t,r){var o,i,l,a,c="prev",u="next",s="children",d="parent";if("inline"===e&&r===Me)return{inlineTrigger:!0};var v=(o={},(0,f.Z)(o,ge,c),(0,f.Z)(o,Ie,u),o),p=(i={},(0,f.Z)(i,be,t?u:c),(0,f.Z)(i,Ne,t?c:u),(0,f.Z)(i,Ie,s),(0,f.Z)(i,Me,s),i),m=(l={},(0,f.Z)(l,ge,c),(0,f.Z)(l,Ie,u),(0,f.Z)(l,Me,s),(0,f.Z)(l,Se,d),(0,f.Z)(l,be,t?s:d),(0,f.Z)(l,Ne,t?d:s),l);switch(null===(a={inline:v,horizontal:p,vertical:m,inlineSub:v,horizontalSub:m,verticalSub:m}["".concat(e).concat(n?"":"Sub")])||void 0===a?void 0:a[r]){case c:return{offset:-1,sibling:!0};case u:return{offset:1,sibling:!0};case d:return{offset:-1,sibling:!1};case s:return{offset:1,sibling:!1};default:return null}}(e,1===l(b,!0).length,t,m);if(!N&&m!==Oe&&m!==Pe)return;(xe.includes(m)||[Oe,Pe].includes(m))&&p.preventDefault();var g=function(e){if(e){var n=e,t=e.querySelector("a");(null==t?void 0:t.getAttribute("href"))&&(n=t);var r=C.get(e);a(r),v(),s.current=(0,ae.Z)((function(){d.current===r&&n.focus()}))}};if([Oe,Pe].includes(m)||N.sibling||!h){var I,M,S=Re(I=h&&"inline"!==e?function(e){for(var n=e;n;){if(n.getAttribute("data-menu-list"))return n;n=n.parentElement}return null}(h):o.current,E);M=m===Oe?S[0]:m===Pe?S[S.length-1]:Te(I,E,h,N.offset),g(M)}else if(N.inlineTrigger)c(b);else if(N.offset>0)c(b,!0),v(),s.current=(0,ae.Z)((function(){Z();var e=h.getAttribute("aria-controls"),n=Te(document.getElementById(e),E);g(n)}),5);else if(N.offset<0){var O=l(b,!0),P=O[O.length-2],x=y.get(P);c(P,!1),g(x)}}null==u||u(p)}}var Ke=Math.random().toFixed(5).toString().slice(2),Ae=0;var _e="__RC_UTIL_PATH_SPLIT__",ke=function(e){return e.join(_e)},Le="rc-menu-more";function Ue(){var e=E.useState({}),n=(0,p.Z)(e,2)[1],t=(0,E.useRef)(new Map),r=(0,E.useRef)(new Map),o=E.useState([]),i=(0,p.Z)(o,2),l=i[0],a=i[1],c=(0,E.useRef)(0),u=(0,E.useRef)(!1),s=(0,E.useCallback)((function(e,o){var i=ke(o);r.current.set(i,e),t.current.set(e,i),c.current+=1;var l,a=c.current;l=function(){a===c.current&&(u.current||n({}))},Promise.resolve().then(l)}),[]),f=(0,E.useCallback)((function(e,n){var o=ke(n);r.current.delete(o),t.current.delete(e)}),[]),d=(0,E.useCallback)((function(e){a(e)}),[]),m=(0,E.useCallback)((function(e,n){var r=t.current.get(e)||"",o=r.split(_e);return n&&l.includes(o[0])&&o.unshift(Le),o}),[l]),y=(0,E.useCallback)((function(e,n){return e.some((function(e){return m(e,!0).includes(n)}))}),[m]),C=(0,E.useCallback)((function(e){var n="".concat(t.current.get(e)).concat(_e),o=new Set;return(0,v.Z)(r.current.keys()).forEach((function(e){e.startsWith(n)&&o.add(r.current.get(e))})),o}),[]);return E.useEffect((function(){return function(){u.current=!0}}),[]),{registerPath:s,unregisterPath:f,refreshOverflowKeys:d,isSubPathKey:y,getKeyPath:m,getKeys:function(){var e=(0,v.Z)(t.current.keys());return l.length&&e.push(Le),e},getSubPathKeys:C}}var De=["prefixCls","rootClassName","style","className","tabIndex","items","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","overflowedIndicatorPopupClassName","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName","_internalRenderMenuItem","_internalRenderSubMenuItem"],Fe=[],je=E.forwardRef((function(e,n){var t,r,o=e.prefixCls,i=void 0===o?"rc-menu":o,l=e.rootClassName,c=e.style,u=e.className,y=e.tabIndex,h=void 0===y?0:y,N=e.items,g=e.children,I=e.direction,M=e.id,S=e.mode,P=void 0===S?"vertical":S,x=e.inlineCollapsed,T=e.disabled,w=e.disabledOverflow,K=e.subMenuOpenDelay,_=void 0===K?.1:K,k=e.subMenuCloseDelay,L=void 0===k?.1:k,j=e.forceSubMenuRender,z=e.defaultOpenKeys,V=e.openKeys,W=e.activeKey,G=e.defaultActiveFirst,B=e.selectable,Y=void 0===B||B,X=e.multiple,q=void 0!==X&&X,$=e.defaultSelectedKeys,J=e.selectedKeys,te=e.onSelect,re=e.onDeselect,oe=e.inlineIndent,ie=void 0===oe?24:oe,le=e.motion,ae=e.defaultMotions,ce=e.triggerSubMenuAction,ue=void 0===ce?"hover":ce,se=e.builtinPlacements,fe=e.itemIcon,de=e.expandIcon,ve=e.overflowedIndicator,pe=void 0===ve?"...":ve,me=e.overflowedIndicatorPopupClassName,Ee=e.getPopupContainer,ye=e.onClick,Ce=e.onOpenChange,he=e.onKeyDown,be=(e.openAnimation,e.openTransitionName,e._internalRenderMenuItem),Ne=e._internalRenderSubMenuItem,ge=(0,m.Z)(e,De),Ie=E.useMemo((function(){return ee(g,N,Fe)}),[g,N]),Me=E.useState(!1),Se=(0,p.Z)(Me,2),Oe=Se[0],Pe=Se[1],xe=E.useRef(),Re=function(e){var n=(0,Z.Z)(e,{value:e}),t=(0,p.Z)(n,2),r=t[0],o=t[1];return E.useEffect((function(){Ae+=1;var e="".concat(Ke,"-").concat(Ae);o("rc-menu-uuid-".concat(e))}),[]),r}(M),Te="rtl"===I;var _e=E.useMemo((function(){return"inline"!==P&&"vertical"!==P||!x?[P,!1]:["vertical",x]}),[P,x]),ke=(0,p.Z)(_e,2),je=ke[0],He=ke[1],ze=E.useState(0),Ve=(0,p.Z)(ze,2),We=Ve[0],Ge=Ve[1],Be=We>=Ie.length-1||"horizontal"!==je||w,Qe=(0,Z.Z)(z,{value:V,postState:function(e){return e||Fe}}),Ye=(0,p.Z)(Qe,2),Xe=Ye[0],qe=Ye[1],$e=function(e){qe(e),null==Ce||Ce(e)},Je=E.useState(Xe),en=(0,p.Z)(Je,2),nn=en[0],tn=en[1],rn="inline"===je,on=E.useRef(!1);E.useEffect((function(){rn&&tn(Xe)}),[Xe]),E.useEffect((function(){on.current&&(rn?qe(nn):$e(Fe))}),[rn]),E.useEffect((function(){return on.current=!0,function(){on.current=!1}}),[]);var ln=Ue(),an=ln.registerPath,cn=ln.unregisterPath,un=ln.refreshOverflowKeys,sn=ln.isSubPathKey,fn=ln.getKeyPath,dn=ln.getKeys,vn=ln.getSubPathKeys,pn=E.useMemo((function(){return{registerPath:an,unregisterPath:cn}}),[an,cn]),mn=E.useMemo((function(){return{isSubPathKey:sn}}),[sn]);E.useEffect((function(){un(Be?Fe:Ie.slice(We+1).map((function(e){return e.key})))}),[We,Be]);var En=(0,Z.Z)(W||G&&(null===(t=Ie[0])||void 0===t?void 0:t.key),{value:W}),yn=(0,p.Z)(En,2),Cn=yn[0],Zn=yn[1],hn=ne((function(e){Zn(e)})),bn=ne((function(){Zn(void 0)}));(0,E.useImperativeHandle)(n,(function(){return{list:xe.current,focus:function(e){var n,t,r,o,i=null!=Cn?Cn:null===(n=Ie.find((function(e){return!e.props.disabled})))||void 0===n?void 0:n.key;i&&(null===(t=xe.current)||void 0===t||null===(r=t.querySelector("li[data-menu-id='".concat(F(Re,i),"']")))||void 0===r||null===(o=r.focus)||void 0===o||o.call(r,e))}}}));var Nn=(0,Z.Z)($||[],{value:J,postState:function(e){return Array.isArray(e)?e:null==e?Fe:[e]}}),gn=(0,p.Z)(Nn,2),In=gn[0],Mn=gn[1],Sn=ne((function(e){null==ye||ye(R(e)),function(e){if(Y){var n,t=e.key,r=In.includes(t);n=q?r?In.filter((function(e){return e!==t})):[].concat((0,v.Z)(In),[t]):[t],Mn(n);var o=(0,d.Z)((0,d.Z)({},e),{},{selectedKeys:n});r?null==re||re(o):null==te||te(o)}!q&&Xe.length&&"inline"!==je&&$e(Fe)}(e)})),On=ne((function(e,n){var t=Xe.filter((function(n){return n!==e}));if(n)t.push(e);else if("inline"!==je){var r=vn(e);t=t.filter((function(e){return!r.has(e)}))}C()(Xe,t)||$e(t)})),Pn=ne(Ee),xn=we(je,Cn,Te,Re,xe,dn,fn,Zn,(function(e,n){var t=null!=n?n:!Xe.includes(e);On(e,t)}),he);E.useEffect((function(){Pe(!0)}),[]);var Rn=E.useMemo((function(){return{_internalRenderMenuItem:be,_internalRenderSubMenuItem:Ne}}),[be,Ne]),Tn="horizontal"!==je||w?Ie:Ie.map((function(e,n){return E.createElement(O,{key:e.key,overflowDisabled:n>We},e)})),wn=E.createElement(b.Z,(0,a.Z)({id:M,ref:xe,prefixCls:"".concat(i,"-overflow"),component:"ul",itemComponent:Q,className:s()(i,"".concat(i,"-root"),"".concat(i,"-").concat(je),u,(r={},(0,f.Z)(r,"".concat(i,"-inline-collapsed"),He),(0,f.Z)(r,"".concat(i,"-rtl"),Te),r),l),dir:I,style:c,role:"menu",tabIndex:h,data:Tn,renderRawItem:function(e){return e},renderRawRest:function(e){var n=e.length,t=n?Ie.slice(-n):null;return E.createElement(Ze,{eventKey:Le,title:pe,disabled:Be,internalPopupClose:0===n,popupClassName:me},t)},maxCount:"horizontal"!==je||w?b.Z.INVALIDATE:b.Z.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(e){Ge(e)},onKeyDown:xn},ge));return E.createElement(H.Provider,{value:Rn},E.createElement(D.Provider,{value:Re},E.createElement(O,{prefixCls:i,rootClassName:l,mode:je,openKeys:Xe,rtl:Te,disabled:T,motion:Oe?le:null,defaultMotions:Oe?ae:null,activeKey:Cn,onActive:hn,onInactive:bn,selectedKeys:In,inlineIndent:ie,subMenuOpenDelay:_,subMenuCloseDelay:L,forceSubMenuRender:j,builtinPlacements:se,triggerSubMenuAction:ue,getPopupContainer:Pn,itemIcon:fe,expandIcon:de,onItemClick:Sn,onOpenChange:On},E.createElement(U.Provider,{value:mn},wn),E.createElement("div",{style:{display:"none"},"aria-hidden":!0},E.createElement(A.Provider,{value:pn},Ie)))))}));var He=["className","title","eventKey","children"],ze=["children"],Ve=function(e){var n=e.className,t=e.title,r=(e.eventKey,e.children),o=(0,m.Z)(e,He),i=E.useContext(S).prefixCls,l="".concat(i,"-item-group");return E.createElement("li",(0,a.Z)({},o,{onClick:function(e){return e.stopPropagation()},className:s()(l,n)}),E.createElement("div",{className:"".concat(l,"-title"),title:"string"==typeof t?t:void 0},t),E.createElement("ul",{className:"".concat(l,"-list")},r))};function We(e){var n=e.children,t=(0,m.Z)(e,ze),r=$(n,L(t.eventKey));return _()?r:E.createElement(Ve,(0,g.Z)(t,["warnKey"]),r)}function Ge(e){var n=e.className,t=e.style,r=E.useContext(S).prefixCls;return _()?null:E.createElement("li",{className:s()("".concat(r,"-item-divider"),n),style:t})}var Be=je;Be.Item=Q,Be.SubMenu=Ze,Be.ItemGroup=We,Be.Divider=Ge;const Qe=Be;var Ye=t(6680),Xe=t(3124),qe=t(4025),$e=t(3603),Je=t(6159),en=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t};const nn=function(e){var n=e.prefixCls,t=e.className,r=e.dashed,o=en(e,["prefixCls","className","dashed"]),i=(0,E.useContext(Xe.E_).getPrefixCls)("menu",n),l=s()((0,f.Z)({},"".concat(i,"-item-divider-dashed"),!!r),t);return E.createElement(Ge,(0,a.Z)({className:l},o))};var tn=t(5777);const rn=(0,E.createContext)({prefixCls:"",firstLevel:!0,inlineCollapsed:!1});var on=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t},ln=function(e){(0,i.Z)(t,e);var n=(0,l.Z)(t);function t(){var e;return(0,r.Z)(this,t),(e=n.apply(this,arguments)).renderItem=function(n){var t,r,o=n.siderCollapsed,i=e.context,l=i.prefixCls,c=i.firstLevel,u=i.inlineCollapsed,d=i.direction,v=i.disableMenuItemTitleTooltip,p=e.props,m=p.className,y=p.children,C=e.props,Z=C.title,h=C.icon,b=C.danger,N=on(C,["title","icon","danger"]),g=Z;void 0===Z?g=c?y:"":!1===Z&&(g="");var I={title:g};o||u||(I.title=null,I.open=!1);var M=(0,X.Z)(y).length,S=E.createElement(Q,(0,a.Z)({},N,{className:s()((t={},(0,f.Z)(t,"".concat(l,"-item-danger"),b),(0,f.Z)(t,"".concat(l,"-item-only-child"),1===(h?M+1:M)),t),m),title:"string"==typeof Z?Z:void 0}),(0,Je.Tm)(h,{className:s()((0,Je.l$)(h)?null===(r=h.props)||void 0===r?void 0:r.className:"","".concat(l,"-item-icon"))}),e.renderItemChildren(u));return v||(S=E.createElement(tn.Z,(0,a.Z)({},I,{placement:"rtl"===d?"left":"right",overlayClassName:"".concat(l,"-inline-collapsed-tooltip")}),S)),S},e}return(0,o.Z)(t,[{key:"renderItemChildren",value:function(e){var n=this.context,t=n.prefixCls,r=n.firstLevel,o=this.props,i=o.icon,l=o.children,a=E.createElement("span",{className:"".concat(t,"-title-content")},l);return(!i||(0,Je.l$)(l)&&"span"===l.type)&&l&&e&&r&&"string"==typeof l?E.createElement("div",{className:"".concat(t,"-inline-collapsed-noicon")},l.charAt(0)):a}},{key:"render",value:function(){return E.createElement(qe.D.Consumer,null,this.renderItem)}}]),t}(E.Component);ln.contextType=rn;const an=function(e){var n,t,r=e.popupClassName,o=e.icon,i=e.title,l=e.theme,c=E.useContext(rn),u=c.prefixCls,f=c.inlineCollapsed,d=c.antdMenuTheme,v=L();if(o){var p=(0,Je.l$)(i)&&"span"===i.type;t=E.createElement(E.Fragment,null,(0,Je.Tm)(o,{className:s()((0,Je.l$)(o)?null===(n=o.props)||void 0===n?void 0:n.className:"","".concat(u,"-item-icon"))}),p?i:E.createElement("span",{className:"".concat(u,"-title-content")},i))}else t=f&&!v.length&&i&&"string"==typeof i?E.createElement("div",{className:"".concat(u,"-inline-collapsed-noicon")},i.charAt(0)):E.createElement("span",{className:"".concat(u,"-title-content")},i);var m=E.useMemo((function(){return(0,a.Z)((0,a.Z)({},c),{firstLevel:!1})}),[c]);return E.createElement(rn.Provider,{value:m},E.createElement(Ze,(0,a.Z)({},(0,g.Z)(e,["icon"]),{title:t,popupClassName:s()(u,"".concat(u,"-").concat(l||d),r)})))};var cn=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t};function un(e){return(e||[]).map((function(e,n){if(e&&"object"===(0,Y.Z)(e)){var t=e,r=t.label,o=t.children,i=t.key,l=t.type,c=cn(t,["label","children","key","type"]),u=null!=i?i:"tmp-".concat(n);return o||"group"===l?"group"===l?E.createElement(We,(0,a.Z)({key:u},c,{title:r}),un(o)):E.createElement(an,(0,a.Z)({key:u},c,{title:r}),un(o)):"divider"===l?E.createElement(nn,(0,a.Z)({key:u},c)):E.createElement(ln,(0,a.Z)({key:u},c),r)}return null})).filter((function(e){return e}))}function sn(e){return E.useMemo((function(){return e?un(e):e}),[e])}var fn=t(6529),dn=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t},vn=(0,E.forwardRef)((function(e,n){var t,r=E.useContext(fn.Z)||{},o=E.useContext(Xe.E_),i=o.getPrefixCls,l=o.getPopupContainer,u=o.direction,f=i(),d=e.prefixCls,v=e.className,p=e.theme,m=void 0===p?"light":p,y=e.expandIcon,C=e._internalDisableMenuItemTitleTooltip,Z=e.inlineCollapsed,h=e.siderCollapsed,b=e.items,N=e.children,I=e.mode,M=e.selectable,S=e.onClick,O=dn(e,["prefixCls","className","theme","expandIcon","_internalDisableMenuItemTitleTooltip","inlineCollapsed","siderCollapsed","items","children","mode","selectable","onClick"]),P=(0,g.Z)(O,["collapsedWidth"]),x=sn(b)||N;null===(t=r.validator)||void 0===t||t.call(r,{mode:I});var R,T=(0,Ye.Z)((function(){var e;null==S||S.apply(void 0,arguments),null===(e=null==r?void 0:r.onClick)||void 0===e||e.call(r)})),w=r.mode||I,K=null!=M?M:r.selectable,A=E.useMemo((function(){return void 0!==h?h:Z}),[Z,h]),_={horizontal:{motionName:"".concat(f,"-slide-up")},inline:$e.ZP,other:{motionName:"".concat(f,"-zoom-big")}},k=i("menu",d||r.prefixCls),L=s()("".concat(k,"-").concat(m),v);R="function"==typeof y?y:(0,Je.Tm)(y||r.expandIcon,{className:"".concat(k,"-submenu-expand-icon")});var U=E.useMemo((function(){return{prefixCls:k,inlineCollapsed:A||!1,antdMenuTheme:m,direction:u,firstLevel:!0,disableMenuItemTitleTooltip:C}}),[k,A,m,u,C]);return E.createElement(fn.Z.Provider,{value:null},E.createElement(rn.Provider,{value:U},E.createElement(Qe,(0,a.Z)({getPopupContainer:l,overflowedIndicator:E.createElement(c.Z,null),overflowedIndicatorPopupClassName:"".concat(k,"-").concat(m),mode:w,selectable:K,onClick:T},P,{inlineCollapsed:A,className:L,prefixCls:k,direction:u,defaultMotions:_,expandIcon:R,ref:n}),x)))})),pn=function(e){(0,i.Z)(t,e);var n=(0,l.Z)(t);function t(){var e;return(0,r.Z)(this,t),(e=n.apply(this,arguments)).focus=function(n){var t;null===(t=e.menu)||void 0===t||t.focus(n)},e}return(0,o.Z)(t,[{key:"render",value:function(){var e=this;return E.createElement(qe.D.Consumer,null,(function(n){return E.createElement(vn,(0,a.Z)({ref:function(n){e.menu=n}},e.props,n))}))}}]),t}(E.Component);pn.Divider=nn,pn.Item=ln,pn.SubMenu=an,pn.ItemGroup=We;const mn=pn},9214:(e,n,t)=>{"use strict";t.d(n,{Z:()=>w});var r=t(7462),o=t(1413),i=t(9439),l=t(5987),a=t(7294),c=t(4184),u=t.n(c),s=t(8717),f=t(8410),d=["prefixCls","invalidate","item","renderItem","responsive","responsiveDisabled","registerSize","itemKey","className","style","children","display","order","component"],v=void 0;function p(e,n){var t=e.prefixCls,i=e.invalidate,c=e.item,f=e.renderItem,p=e.responsive,m=e.responsiveDisabled,E=e.registerSize,y=e.itemKey,C=e.className,Z=e.style,h=e.children,b=e.display,N=e.order,g=e.component,I=void 0===g?"div":g,M=(0,l.Z)(e,d),S=p&&!b;function O(e){E(y,e)}a.useEffect((function(){return function(){O(null)}}),[]);var P,x=f&&c!==v?f(c):h;i||(P={opacity:S?0:1,height:S?0:v,overflowY:S?"hidden":v,order:p?N:v,pointerEvents:S?"none":v,position:S?"absolute":v});var R={};S&&(R["aria-hidden"]=!0);var T=a.createElement(I,(0,r.Z)({className:u()(!i&&t,C),style:(0,o.Z)((0,o.Z)({},P),Z)},R,M,{ref:n}),x);return p&&(T=a.createElement(s.Z,{onResize:function(e){O(e.offsetWidth)},disabled:m},T)),T}var m=a.forwardRef(p);m.displayName="Item";const E=m;var y=t(5164),C=t(470);var Z=["component"],h=["className"],b=["className"],N=function(e,n){var t=a.useContext(S);if(!t){var o=e.component,i=void 0===o?"div":o,c=(0,l.Z)(e,Z);return a.createElement(i,(0,r.Z)({},c,{ref:n}))}var s=t.className,f=(0,l.Z)(t,h),d=e.className,v=(0,l.Z)(e,b);return a.createElement(S.Provider,{value:null},a.createElement(E,(0,r.Z)({ref:n,className:u()(s,d)},f,v)))},g=a.forwardRef(N);g.displayName="RawItem";const I=g;var M=["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"],S=a.createContext(null),O="responsive",P="invalidate";function x(e){return"+ ".concat(e.length," ...")}function R(e,n){var t=e.prefixCls,c=void 0===t?"rc-overflow":t,d=e.data,v=void 0===d?[]:d,p=e.renderItem,m=e.renderRawItem,Z=e.itemKey,h=e.itemWidth,b=void 0===h?10:h,N=e.ssr,g=e.style,I=e.className,R=e.maxCount,T=e.renderRest,w=e.renderRawRest,K=e.suffix,A=e.component,_=void 0===A?"div":A,k=e.itemComponent,L=e.onVisibleChange,U=(0,l.Z)(e,M),D=function(){var e=(0,C.Z)({}),n=(0,i.Z)(e,2)[1],t=(0,a.useRef)([]),r=0,o=0;return function(e){var i=r;return r+=1,t.current.length<i+1&&(t.current[i]=e),[t.current[i],function(e){t.current[i]="function"==typeof e?e(t.current[i]):e,y.Z.cancel(o),o=(0,y.Z)((function(){n({},!0)}))}]}}(),F="full"===N,j=D(null),H=(0,i.Z)(j,2),z=H[0],V=H[1],W=z||0,G=D(new Map),B=(0,i.Z)(G,2),Q=B[0],Y=B[1],X=D(0),q=(0,i.Z)(X,2),$=q[0],J=q[1],ee=D(0),ne=(0,i.Z)(ee,2),te=ne[0],re=ne[1],oe=D(0),ie=(0,i.Z)(oe,2),le=ie[0],ae=ie[1],ce=(0,a.useState)(null),ue=(0,i.Z)(ce,2),se=ue[0],fe=ue[1],de=(0,a.useState)(null),ve=(0,i.Z)(de,2),pe=ve[0],me=ve[1],Ee=a.useMemo((function(){return null===pe&&F?Number.MAX_SAFE_INTEGER:pe||0}),[pe,z]),ye=(0,a.useState)(!1),Ce=(0,i.Z)(ye,2),Ze=Ce[0],he=Ce[1],be="".concat(c,"-item"),Ne=Math.max($,te),ge=R===O,Ie=v.length&&ge,Me=R===P,Se=Ie||"number"==typeof R&&v.length>R,Oe=(0,a.useMemo)((function(){var e=v;return Ie?e=null===z&&F?v:v.slice(0,Math.min(v.length,W/b)):"number"==typeof R&&(e=v.slice(0,R)),e}),[v,b,z,R,Ie]),Pe=(0,a.useMemo)((function(){return Ie?v.slice(Ee+1):v.slice(Oe.length)}),[v,Oe,Ie,Ee]),xe=(0,a.useCallback)((function(e,n){var t;return"function"==typeof Z?Z(e):null!==(t=Z&&(null==e?void 0:e[Z]))&&void 0!==t?t:n}),[Z]),Re=(0,a.useCallback)(p||function(e){return e},[p]);function Te(e,n,t){(pe!==e||void 0!==n&&n!==se)&&(me(e),t||(he(e<v.length-1),null==L||L(e)),void 0!==n&&fe(n))}function we(e,n){Y((function(t){var r=new Map(t);return null===n?r.delete(e):r.set(e,n),r}))}function Ke(e){return Q.get(xe(Oe[e],e))}(0,f.Z)((function(){if(W&&Ne&&Oe){var e=le,n=Oe.length,t=n-1;if(!n)return void Te(0,null);for(var r=0;r<n;r+=1){var o=Ke(r);if(F&&(o=o||0),void 0===o){Te(r-1,void 0,!0);break}if(e+=o,0===t&&e<=W||r===t-1&&e+Ke(t)<=W){Te(t,null);break}if(e+Ne>W){Te(r-1,e-o-le+te);break}}K&&Ke(0)+le>W&&fe(null)}}),[W,Q,te,le,xe,Oe]);var Ae=Ze&&!!Pe.length,_e={};null!==se&&Ie&&(_e={position:"absolute",left:se,top:0});var ke,Le={prefixCls:be,responsive:Ie,component:k,invalidate:Me},Ue=m?function(e,n){var t=xe(e,n);return a.createElement(S.Provider,{key:t,value:(0,o.Z)((0,o.Z)({},Le),{},{order:n,item:e,itemKey:t,registerSize:we,display:n<=Ee})},m(e,n))}:function(e,n){var t=xe(e,n);return a.createElement(E,(0,r.Z)({},Le,{order:n,key:t,item:e,renderItem:Re,itemKey:t,registerSize:we,display:n<=Ee}))},De={order:Ae?Ee:Number.MAX_SAFE_INTEGER,className:"".concat(be,"-rest"),registerSize:function(e,n){re(n),J(te)},display:Ae};if(w)w&&(ke=a.createElement(S.Provider,{value:(0,o.Z)((0,o.Z)({},Le),De)},w(Pe)));else{var Fe=T||x;ke=a.createElement(E,(0,r.Z)({},Le,De),"function"==typeof Fe?Fe(Pe):Fe)}var je=a.createElement(_,(0,r.Z)({className:u()(!Me&&c,I),style:g,ref:n},U),Oe.map(Ue),Se?ke:null,K&&a.createElement(E,(0,r.Z)({},Le,{responsive:ge,responsiveDisabled:!Ie,order:Ee,className:"".concat(be,"-suffix"),registerSize:function(e,n){ae(n)},display:!0,style:_e}),K));return ge&&(je=a.createElement(s.Z,{onResize:function(e,n){V(n.clientWidth)},disabled:!Ie},je)),je}var T=a.forwardRef(R);T.displayName="Overflow",T.Item=I,T.RESPONSIVE=O,T.INVALIDATE=P;const w=T},8603:(e,n,t)=>{"use strict";t.d(n,{tS:()=>l});var r=t(3433),o=t(5110);function i(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if((0,o.Z)(e)){var t=e.nodeName.toLowerCase(),r=["input","select","textarea","button"].includes(t)||e.isContentEditable||"a"===t&&!!e.getAttribute("href"),i=e.getAttribute("tabindex"),l=Number(i),a=null;return i&&!Number.isNaN(l)?a=l:r&&null===a&&(a=0),r&&e.disabled&&(a=null),null!==a&&(a>=0||n&&a<0)}return!1}function l(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=(0,r.Z)(e.querySelectorAll("*")).filter((function(e){return i(e,n)}));return i(e,n)&&t.unshift(e),t}},5105:(e,n,t)=>{"use strict";t.d(n,{Z:()=>o});var r={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(e){var n=e.keyCode;if(e.altKey&&!e.ctrlKey||e.metaKey||n>=r.F1&&n<=r.F12)return!1;switch(n){case r.ALT:case r.CAPS_LOCK:case r.CONTEXT_MENU:case r.CTRL:case r.DOWN:case r.END:case r.ESC:case r.HOME:case r.INSERT:case r.LEFT:case r.MAC_FF_META:case r.META:case r.NUMLOCK:case r.NUM_CENTER:case r.PAGE_DOWN:case r.PAGE_UP:case r.PAUSE:case r.PRINT_SCREEN:case r.RIGHT:case r.SHIFT:case r.UP:case r.WIN_KEY:case r.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(e){if(e>=r.ZERO&&e<=r.NINE)return!0;if(e>=r.NUM_ZERO&&e<=r.NUM_MULTIPLY)return!0;if(e>=r.A&&e<=r.Z)return!0;if(-1!==window.navigator.userAgent.indexOf("WebKit")&&0===e)return!0;switch(e){case r.SPACE:case r.QUESTION_MARK:case r.NUM_PLUS:case r.NUM_MINUS:case r.NUM_PERIOD:case r.NUM_DIVISION:case r.SEMICOLON:case r.DASH:case r.EQUALS:case r.COMMA:case r.PERIOD:case r.SLASH:case r.APOSTROPHE:case r.SINGLE_QUOTE:case r.OPEN_SQUARE_BRACKET:case r.BACKSLASH:case r.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};const o=r},6774:e=>{e.exports=function(e,n,t,r){var o=t?t.call(r,e,n):void 0;if(void 0!==o)return!!o;if(e===n)return!0;if("object"!=typeof e||!e||"object"!=typeof n||!n)return!1;var i=Object.keys(e),l=Object.keys(n);if(i.length!==l.length)return!1;for(var a=Object.prototype.hasOwnProperty.bind(n),c=0;c<i.length;c++){var u=i[c];if(!a(u))return!1;var s=e[u],f=n[u];if(!1===(o=t?t.call(r,s,f,u):void 0)||void 0===o&&s!==f)return!1}return!0}}}]);
//# sourceMappingURL=644.bundle.js.map