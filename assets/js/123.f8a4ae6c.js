(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{392:function(e,t,r){"use strict";r.r(t);var a=r(0),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[r("strong",[r("router-link",{attrs:{to:"/api/"}},[e._v("Polkadot JS API")])],1)]),e._v(" "),r("p",[r("router-link",{attrs:{to:"/api/globals.html"}},[e._v("Globals")]),e._v(" › "),r("router-link",{attrs:{to:"/api/modules/_types_.html"}},[e._v('"types"')]),e._v(" › "),r("router-link",{attrs:{to:"/api/interfaces/_types_.apioptions.html"}},[e._v("ApiOptions")])],1),e._v(" "),r("h1",{attrs:{id:"interface-apioptions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#interface-apioptions","aria-hidden":"true"}},[e._v("#")]),e._v(" Interface: ApiOptions")]),e._v(" "),r("h2",{attrs:{id:"hierarchy"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hierarchy","aria-hidden":"true"}},[e._v("#")]),e._v(" Hierarchy")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("ApiOptions")])])]),e._v(" "),r("h2",{attrs:{id:"index"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#index","aria-hidden":"true"}},[e._v("#")]),e._v(" Index")]),e._v(" "),r("h3",{attrs:{id:"properties"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#properties","aria-hidden":"true"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),r("ul",[r("li",[r("router-link",{attrs:{to:"/api/interfaces/_types_.apioptions.html#optional-derives"}},[e._v("derives")])],1),e._v(" "),r("li",[r("router-link",{attrs:{to:"/api/interfaces/_types_.apioptions.html#optional-metadata"}},[e._v("metadata")])],1),e._v(" "),r("li",[r("router-link",{attrs:{to:"/api/interfaces/_types_.apioptions.html#optional-provider"}},[e._v("provider")])],1),e._v(" "),r("li",[r("router-link",{attrs:{to:"/api/interfaces/_types_.apioptions.html#optional-signer"}},[e._v("signer")])],1),e._v(" "),r("li",[r("router-link",{attrs:{to:"/api/interfaces/_types_.apioptions.html#optional-source"}},[e._v("source")])],1),e._v(" "),r("li",[r("router-link",{attrs:{to:"/api/interfaces/_types_.apioptions.html#optional-types"}},[e._v("types")])],1),e._v(" "),r("li",[r("router-link",{attrs:{to:"/api/interfaces/_types_.apioptions.html#optional-typeschain"}},[e._v("typesChain")])],1),e._v(" "),r("li",[r("router-link",{attrs:{to:"/api/interfaces/_types_.apioptions.html#optional-typesspec"}},[e._v("typesSpec")])],1)]),e._v(" "),r("h2",{attrs:{id:"properties-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#properties-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),r("h3",{attrs:{id:"optional-derives"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#optional-derives","aria-hidden":"true"}},[e._v("#")]),e._v(" "),r("code",[e._v("Optional")]),e._v(" derives")]),e._v(" "),r("p",[e._v("• "),r("strong",[e._v("derives")]),e._v("? : "),r("em",[e._v("DeriveCustom")])]),e._v(" "),r("p",[r("em",[e._v("Defined in "),r("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/8de45cb/packages/api/src/types.ts#L177",target:"_blank",rel:"noopener noreferrer"}},[e._v("types.ts:177"),r("OutboundLink")],1)])]),e._v(" "),r("p",[r("strong",[r("code",[e._v("description")])]),e._v(" Add custom derives to be injected")]),e._v(" "),r("hr"),e._v(" "),r("h3",{attrs:{id:"optional-metadata"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#optional-metadata","aria-hidden":"true"}},[e._v("#")]),e._v(" "),r("code",[e._v("Optional")]),e._v(" metadata")]),e._v(" "),r("p",[e._v("• "),r("strong",[e._v("metadata")]),e._v("? : "),r("em",[e._v("Record‹string, string›")])]),e._v(" "),r("p",[r("em",[e._v("Defined in "),r("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/8de45cb/packages/api/src/types.ts#L182",target:"_blank",rel:"noopener noreferrer"}},[e._v("types.ts:182"),r("OutboundLink")],1)])]),e._v(" "),r("p",[r("strong",[r("code",[e._v("description")])]),e._v(" prebundles is a map of 'genesis hash and runtime spec version' as key to metadata's hex string\nif genesis hash and runtime spec version matches, then use metadata, else fetch it from chain")]),e._v(" "),r("hr"),e._v(" "),r("h3",{attrs:{id:"optional-provider"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#optional-provider","aria-hidden":"true"}},[e._v("#")]),e._v(" "),r("code",[e._v("Optional")]),e._v(" provider")]),e._v(" "),r("p",[e._v("• "),r("strong",[e._v("provider")]),e._v("? : "),r("em",[e._v("ProviderInterface")])]),e._v(" "),r("p",[r("em",[e._v("Defined in "),r("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/8de45cb/packages/api/src/types.ts#L187",target:"_blank",rel:"noopener noreferrer"}},[e._v("types.ts:187"),r("OutboundLink")],1)])]),e._v(" "),r("p",[r("strong",[r("code",[e._v("description")])]),e._v(" Transport Provider from rpc-provider. If not specified, it will default to\nconnecting to a WsProvider connecting localhost with the default port, i.e. "),r("code",[e._v("ws://127.0.0.1:9944")])]),e._v(" "),r("hr"),e._v(" "),r("h3",{attrs:{id:"optional-signer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#optional-signer","aria-hidden":"true"}},[e._v("#")]),e._v(" "),r("code",[e._v("Optional")]),e._v(" signer")]),e._v(" "),r("p",[e._v("• "),r("strong",[e._v("signer")]),e._v("? : "),r("em",[r("router-link",{attrs:{to:"/api/interfaces/_types_.signer.html"}},[e._v("Signer")])],1)]),e._v(" "),r("p",[r("em",[e._v("Defined in "),r("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/8de45cb/packages/api/src/types.ts#L191",target:"_blank",rel:"noopener noreferrer"}},[e._v("types.ts:191"),r("OutboundLink")],1)])]),e._v(" "),r("p",[r("strong",[r("code",[e._v("description")])]),e._v(" An external signer which will be used to sign extrinsic when account passed in is not KeyringPair")]),e._v(" "),r("hr"),e._v(" "),r("h3",{attrs:{id:"optional-source"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#optional-source","aria-hidden":"true"}},[e._v("#")]),e._v(" "),r("code",[e._v("Optional")]),e._v(" source")]),e._v(" "),r("p",[e._v("• "),r("strong",[e._v("source")]),e._v("? : "),r("em",[e._v("ApiBase‹any›")])]),e._v(" "),r("p",[r("em",[e._v("Defined in "),r("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/8de45cb/packages/api/src/types.ts#L195",target:"_blank",rel:"noopener noreferrer"}},[e._v("types.ts:195"),r("OutboundLink")],1)])]),e._v(" "),r("p",[r("strong",[r("code",[e._v("description")])]),e._v(" The source object to use for runtime information (only used when cloning)")]),e._v(" "),r("hr"),e._v(" "),r("h3",{attrs:{id:"optional-types"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#optional-types","aria-hidden":"true"}},[e._v("#")]),e._v(" "),r("code",[e._v("Optional")]),e._v(" types")]),e._v(" "),r("p",[e._v("• "),r("strong",[e._v("types")]),e._v("? : "),r("em",[e._v("RegistryTypes")])]),e._v(" "),r("p",[r("em",[e._v("Defined in "),r("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/8de45cb/packages/api/src/types.ts#L200",target:"_blank",rel:"noopener noreferrer"}},[e._v("types.ts:200"),r("OutboundLink")],1)])]),e._v(" "),r("p",[r("strong",[r("code",[e._v("description")])]),e._v(" Additional types used by runtime modules. This is nessusary if the runtime modules\nuses types not available in the base Substrate runtime.")]),e._v(" "),r("hr"),e._v(" "),r("h3",{attrs:{id:"optional-typeschain"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#optional-typeschain","aria-hidden":"true"}},[e._v("#")]),e._v(" "),r("code",[e._v("Optional")]),e._v(" typesChain")]),e._v(" "),r("p",[e._v("• "),r("strong",[e._v("typesChain")]),e._v("? : "),r("em",[e._v("Record‹string, RegistryTypes›")])]),e._v(" "),r("p",[r("em",[e._v("Defined in "),r("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/8de45cb/packages/api/src/types.ts#L204",target:"_blank",rel:"noopener noreferrer"}},[e._v("types.ts:204"),r("OutboundLink")],1)])]),e._v(" "),r("p",[r("strong",[r("code",[e._v("description")])]),e._v(" Additional types that are injected based on the chain we are connecting to. There are keyed by the chain, i.e. "),r("code",[e._v("{ 'Kusama CC1': { ... } }")])]),e._v(" "),r("hr"),e._v(" "),r("h3",{attrs:{id:"optional-typesspec"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#optional-typesspec","aria-hidden":"true"}},[e._v("#")]),e._v(" "),r("code",[e._v("Optional")]),e._v(" typesSpec")]),e._v(" "),r("p",[e._v("• "),r("strong",[e._v("typesSpec")]),e._v("? : "),r("em",[e._v("Record‹string, RegistryTypes›")])]),e._v(" "),r("p",[r("em",[e._v("Defined in "),r("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/8de45cb/packages/api/src/types.ts#L208",target:"_blank",rel:"noopener noreferrer"}},[e._v("types.ts:208"),r("OutboundLink")],1)])]),e._v(" "),r("p",[r("strong",[r("code",[e._v("description")])]),e._v(" Additional types that are injected based on the type of node we are connecting to, as set via specName in the runtime version. There are keyed by the node, i.e. "),r("code",[e._v("{ 'edgeware': { ... } }")])])])}),[],!1,null,null,null);t.default=s.exports}}]);