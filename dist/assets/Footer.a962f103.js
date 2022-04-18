import{i as o,r as f}from"./vendor.8d8c169d.js";import{P as N,j as i,a as t}from"./index.3e00bcd7.js";var w={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},h=o.createContext&&o.createContext(w),c=globalThis&&globalThis.__assign||function(){return c=Object.assign||function(e){for(var r,l=1,n=arguments.length;l<n;l++){r=arguments[l];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},c.apply(this,arguments)},j=globalThis&&globalThis.__rest||function(e,r){var l={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(l[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(l[n[a]]=e[n[a]]);return l};function v(e){return e&&e.map(function(r,l){return o.createElement(r.tag,c({key:l},r.attr),v(r.child))})}function b(e){return function(r){return o.createElement(C,c({attr:c({},e.attr)},r),v(e.child))}}function C(e){var r=function(l){var n=e.attr,a=e.size,m=e.title,s=j(e,["attr","size","title"]),u=a||l.size||"1em",d;return l.className&&(d=l.className),e.className&&(d=(d?d+" ":"")+e.className),o.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},l.attr,n,s,{className:d,style:c(c({color:e.color||l.color},l.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),m&&o.createElement("title",null,m),e.children)};return h!==void 0?o.createElement(h.Consumer,null,function(l){return r(l)}):r(w)}function O(e){return b({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"}}]})(e)}function x(e){return b({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"}}]})(e)}var y="/assets/logo-main.0adb4f7f.png";const g=({title:e,link:r,classprops:l})=>t("li",{className:`mx-4 cursor-pointer ${l}`,children:t("a",{href:r,children:e})}),p=[{name:"Products",path:"/products/0"},{name:"About us",path:"/aboutus"},{name:"Contact us",path:"/contactus"},{name:"Add Product",path:"/addProduct"}],k=()=>{const{connectWallet:e,currentAccount:r,formData:l,setFormData:n}=f.exports.useContext(N),[a,m]=f.exports.useState(!1);return i("nav",{className:"w-full flex md:justify-center justify-between items-center p-4",children:[t("div",{className:"md:flex-[0.5] flex-initial justify-center items-center",children:t("a",{href:"/",children:t("img",{src:y,alt:"logo",className:"w-32 cursor-pointer"})})}),i("ul",{className:"text-white md:flex hidden list-none flex-row justify-between items-center flex-initial",children:[p.map((s,u)=>t(g,{title:s.name,link:s.path},s.name+u)),r?t("li",{className:"bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]",children:r}):t("li",{className:"bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]",onClick:e,children:"Login"})]}),i("div",{className:"flex relative",children:[a?t(x,{fontSize:28,className:"text-white md:hidden cursor-pointer",onClick:()=>m(!1)}):t(O,{fontSize:28,className:"text-white md:hidden cursor-pointer",onClick:()=>m(!0)}),a&&i("ul",{className:"z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none  flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in ",children:[t("li",{className:"text-xl w-full my-2",children:t(x,{onClick:()=>m(!1)})}),p.map((s,u)=>t(g,{title:s.name,link:s.path,classprops:"my-2 text-lg"},s.name+u))]})]})]})},A=()=>i("div",{className:"w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer",children:[i("div",{className:"w-full flex sm:flex-row flex-col justify-between items-center my-4",children:[t("div",{className:"flex flex-[0.5] justify-center items-center",children:t("a",{href:"/",children:t("img",{src:y,alt:"logo",className:"w-32"})})}),i("div",{className:"flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full",children:[t("p",{className:"text-white text-base text-center mx-2 cursor-pointer",children:"Products"}),t("p",{className:"text-white text-base text-center mx-2 cursor-pointer",children:"About Us"}),t("p",{className:"text-white text-base text-center mx-2 cursor-pointer",children:"Contact Us"}),t("p",{className:"text-white text-base text-center mx-2 cursor-pointer",children:"Wallets"})]})]}),i("div",{className:"flex justify-center items-center flex-col mt-5",children:[t("p",{className:"text-white text-sm text-center",children:"Come join us and hear for the unexpected miracle"}),t("p",{className:"text-white text-sm text-center font-medium mt-2",children:"info@incylabs.com"})]}),t("div",{className:"sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 "}),i("div",{className:"sm:w-[90%] w-full flex justify-between items-center mt-3",children:[t("p",{className:"text-white text-left text-xs",children:"incy@2022"}),t("p",{className:"text-white text-right text-xs",children:"All rights reserved"})]})]});export{A as F,k as N};