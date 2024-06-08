(()=>{"use strict";var t={477:(t,e)=>{var s;Object.defineProperty(e,"__esModule",{value:!0}),e.Results=void 0,function(t){t.CACHE_USED="CACHE_USED",t.CACHE_NOT_USED="CACHE_NOT_USED",t.CACHE_UPDATE_ERROR="CACHE_UPDATE_ERROR",t.CACHE_UPDATED="CACHE_UPDATED",t.BAD_INPUT="BAD_INPUT",t.BAD_URL="BAD_URL",t.VALIDATION_STEP_ERROR="VALIDATION_STEP_ERROR",t.GOOD_URL_VALIDATION="GOOD_URL_VALIDATION",t.GOOD_URL_SERVER="GOOD_URL_SERVER",t.SFTP_FILE="SFTP_FILE",t.SFTP_FOLDER="SFTP_FOLDER",t.SERVER_ERROR="SERVER_ERROR"}(s||(e.Results=s={}))},262:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.CacheService=void 0;class s{constructor(){this.cache=new Map}static getInstance(){return s.instance||(s.instance=new s),s.instance}set(t,e){this.cache.set(t,e)}containsKey(t){return this.cache.has(t)}get(t){return this.cache.get(t)}}e.CacheService=s},306:(t,e,s)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.FTPMockService=void 0;const n=s(728);e.FTPMockService=class{static isFolder(t){return n.RegexService.validateOne("^ftp://([^s/]+/)+$",t)}static isFile(t){return!this.isFolder(t)}}},728:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.RegexService=void 0,e.RegexService=class{static validateOne(t,e){return new RegExp(t).test(e)}}},939:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.AbstractStep=void 0,e.AbstractStep=class{constructor(t){this.isLast=!1,this.nextStep=t}}},224:(t,e,s)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.cacheCheck=void 0;const n=s(477),r=s(939),c=s(262);class i extends r.AbstractStep{constructor(t,e){super(t),this.nextStep=t,this.isLast=e}next(t,e){try{const s=c.CacheService.getInstance();return s.containsKey(t)?(s.get(t).unshift(n.Results.CACHE_USED.toString()),s.get(t)):this.nextStep.next(t,e)}catch(t){return e.push(n.Results.VALIDATION_STEP_ERROR.toString()),e}}}e.cacheCheck=i},731:(t,e,s)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.CacheUpdate=void 0;const n=s(477),r=s(262),c=s(939);class i extends c.AbstractStep{constructor(t,e){super(t),this.nextStep=t,this.isLast=e}next(t,e){try{return r.CacheService.getInstance().set(t,e),e.push(n.Results.CACHE_UPDATED.toString()),this.isLast?e:this.nextStep.next(t,e)}catch(t){return e.push(n.Results.CACHE_UPDATE_ERROR.toString()),e}}}e.CacheUpdate=i},960:(t,e,s)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.ServerPollTest=void 0;const n=s(477),r=s(939),c=s(306);class i extends r.AbstractStep{constructor(t,e){super(t),this.nextStep=t,this.isLast=e}next(t,e){try{return c.FTPMockService.isFolder(t)?e.push(n.Results.SFTP_FOLDER.toString()):e.push(n.Results.SFTP_FILE.toString()),this.isLast?e:this.nextStep.next(t,e)}catch(t){return e.push(n.Results.VALIDATION_STEP_ERROR.toString()),e}}}e.ServerPollTest=i},358:(t,e,s)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.UrlValidationStep=void 0;const n=s(939),r=s(477),c=s(728);class i extends n.AbstractStep{constructor(t,e){super(t),this.nextStep=t,this.isLast=e}next(t,e){try{const s=this.validateHTTP(t);return s&&1!=this.isLast?(e.push(r.Results.GOOD_URL_VALIDATION.toString()),this.nextStep.next(t,e)):s&&1==this.isLast?(e.push(r.Results.GOOD_URL_VALIDATION.toString()),e):(e.push(r.Results.BAD_INPUT.toString()),e)}catch(t){return e.push(r.Results.SERVER_ERROR.toString()),e}}validateHTTP(t){return c.RegexService.validateOne("^(https?|ftp):\\/\\/([a-zA-Z0-9]+\\.)+[a-zA-Z]{2,}(:\\d+)?(\\/\\S*)?$",t)}}e.UrlValidationStep=i},145:(t,e,s)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.BasicFlow=void 0;const n=s(224),r=s(731),c=s(960),i=s(358);e.BasicFlow=class{static flow(){const t=new r.CacheUpdate(null,!0),e=new c.ServerPollTest(t,!1),s=new i.UrlValidationStep(e,!1);return new n.cacheCheck(s,!1)}}},732:(t,e,s)=>{e.tf=void 0;const n=s(145);function r(){const t=document.getElementById("textBox"),s=document.getElementById("validationResult");if(null!==t&&null!==s){const n=t.value,r=(0,e.tf)(n);s.textContent="Validation result: "+r}}e.tf=t=>n.BasicFlow.flow().next(t,[]),document.addEventListener("DOMContentLoaded",(()=>{const t=document.getElementById("textBox");null!==t&&t.addEventListener("input",r)}))}},e={};!function s(n){var r=e[n];if(void 0!==r)return r.exports;var c=e[n]={exports:{}};return t[n](c,c.exports,s),c.exports}(732)})();