function t(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=Array(r);e<r;e++)n[e]=t[e];return n}function r(r){return function(r){if(Array.isArray(r))return t(r)}(r)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(r)||function(r,e){if(r){if("string"==typeof r)return t(r,void 0);var n=Object.prototype.toString.call(r).slice(8,-1);if("Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(r,void 0)}}(r)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var e=document.querySelector("ul"),n=r(document.querySelectorAll("li"));!function(t){var n=t.sort(function(t,r){return a(r.dataset.salary)-a(t.dataset.salary)});function a(t){return parseInt(t.replace(/[$,]/g,""))}e.append.apply(e,r(n))}(n),n.map(function(t){return{name:t.innerText,position:t.dataset.position,salary:t.dataset.salary,age:t.dataset.age}});
//# sourceMappingURL=index.559cbc13.js.map
