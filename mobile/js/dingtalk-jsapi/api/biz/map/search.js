"use strict";function search$(a){return ddSdk_1.ddSdk.invokeAPI(apiName,a)}var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.search$=void 0;var ddSdk_1=require("../../../lib/ddSdk"),apiHelper_1=require("../../../lib/apiHelper"),apiName="biz.map.search",paramsDeal=apiHelper_1.genDefaultParamsDealFn({scope:500});ddSdk_1.ddSdk.setAPI(apiName,(_a={},_a[ddSdk_1.ENV_ENUM.ios]={vs:"2.4.0",paramsDeal:paramsDeal},_a[ddSdk_1.ENV_ENUM.android]={vs:"2.4.0",paramsDeal:paramsDeal},_a)),exports.search$=search$,exports.default=search$;