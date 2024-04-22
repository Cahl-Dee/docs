"use strict";(self.webpackChunkosmosis_docs=self.webpackChunkosmosis_docs||[]).push([[469],{3905:(e,n,s)=>{s.d(n,{Zo:()=>c,kt:()=>g});var t=s(67294);function o(e,n,s){return n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}function a(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),s.push.apply(s,t)}return s}function i(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{};n%2?a(Object(s),!0).forEach((function(n){o(e,n,s[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(s,n))}))}return e}function r(e,n){if(null==e)return{};var s,t,o=function(e,n){if(null==e)return{};var s,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)s=a[t],n.indexOf(s)>=0||(o[s]=e[s]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)s=a[t],n.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(o[s]=e[s])}return o}var l=t.createContext({}),m=function(e){var n=t.useContext(l),s=n;return e&&(s="function"==typeof e?e(n):i(i({},n),e)),s},c=function(e){var n=m(e.components);return t.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var s=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=m(s),g=o,d=u["".concat(l,".").concat(g)]||u[g]||p[g]||a;return s?t.createElement(d,i(i({ref:n},c),{},{components:s})):t.createElement(d,i({ref:n},c))}));function g(e,n){var s=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=s.length,i=new Array(a);i[0]=u;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,i[1]=r;for(var m=2;m<a;m++)i[m]=s[m];return t.createElement.apply(null,i)}return t.createElement.apply(null,s)}u.displayName="MDXCreateElement"},40365:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>m});var t=s(87462),o=(s(67294),s(3905));const a={},i="OsmoJS",r={unversionedId:"README",id:"README",title:"OsmoJS",description:"OsmosJS makes it easy to compose and broadcast Osmosis and Cosmos messages, with all of the proto and amino encoding handled for you.",source:"@site/docs/osmojs/README.md",sourceDirName:".",slug:"/",permalink:"/osmojs/",draft:!1,editUrl:"https://github.com/osmosis-labs/docs/tree/main/docs/osmojs/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar"},l={},m=[{value:"usage",id:"usage",level:2},{value:"Composing Messages",id:"composing-messages",level:3},{value:"Calculating Fees",id:"calculating-fees",level:3},{value:"Doing a swap",id:"doing-a-swap",level:3},{value:"Initializing the Stargate Client",id:"initializing-the-stargate-client",level:3},{value:"Creating Signers",id:"creating-signers",level:2},{value:"Amino Signer",id:"amino-signer",level:3},{value:"Proto Signer",id:"proto-signer",level:3},{value:"Broadcasting messages",id:"broadcasting-messages",level:3},{value:"Osmosis Messages",id:"osmosis-messages",level:3},{value:"IBC Messages",id:"ibc-messages",level:3},{value:"Cosmos Messages",id:"cosmos-messages",level:3},{value:"CosmWasm Messages",id:"cosmwasm-messages",level:3},{value:"Further examples",id:"further-examples",level:3},{value:"Credits",id:"credits",level:2},{value:"Disclaimer",id:"disclaimer",level:2}],c={toc:m};function p(e){let{components:n,...s}=e;return(0,o.kt)("wrapper",(0,t.Z)({},c,s,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"osmojs"},"OsmoJS"),(0,o.kt)("p",{align:"center"},(0,o.kt)("a",{href:"https://github.com/osmosis-labs/osmojs"},(0,o.kt)("img",{width:"150",src:"https://user-images.githubusercontent.com/545047/178600364-accb0c63-1935-4756-a457-e38b45e3289d.png"}))),(0,o.kt)("p",{align:"center",width:"100%"},(0,o.kt)("a",{href:"https://github.com/osmosis-labs/osmojs/actions/workflows/run-tests.yaml"},(0,o.kt)("img",{height:"20",src:"https://github.com/osmosis-labs/osmojs/actions/workflows/run-tests.yaml/badge.svg"})),(0,o.kt)("a",{href:"https://github.com/osmosis-labs/osmojs/blob/main/LICENSE"},(0,o.kt)("img",{height:"20",src:"https://img.shields.io/badge/license-MIT-blue.svg"})),(0,o.kt)("a",{href:"https://www.npmjs.com/package/osmojs"},(0,o.kt)("img",{height:"20",src:"https://img.shields.io/github/package-json/v/osmosis-labs/osmojs?filename=packages%2Fosmojs%2Fpackage.json"}))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/osmosis-labs/osmojs"},"OsmosJS")," makes it easy to compose and broadcast Osmosis and Cosmos messages, with all of the proto and amino encoding handled for you."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"usage"},"usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install osmojs\n")),(0,o.kt)("h3",{id:"composing-messages"},"Composing Messages"),(0,o.kt)("p",null,"Import the ",(0,o.kt)("inlineCode",{parentName:"p"},"osmosis")," object from ",(0,o.kt)("inlineCode",{parentName:"p"},"osmojs"),". In this case, we're show the messages available from the ",(0,o.kt)("inlineCode",{parentName:"p"},"osmosis.gamm.v1beta1")," module:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { osmosis } from 'osmojs';\n\nconst {\n    joinPool,\n    exitPool,\n    exitSwapExternAmountOut,\n    exitSwapShareAmountIn,\n    joinSwapExternAmountIn,\n    joinSwapShareAmountOut,\n    swapExactAmountIn,\n    swapExactAmountOut\n} = osmosis.gamm.v1beta1.MessageComposer.withTypeUrl;\n")),(0,o.kt)("p",null,"To see a complete list of messages, ",(0,o.kt)("a",{parentName:"p",href:"#osmosis-messages"},"see the section below"),"."),(0,o.kt)("p",null,"Now you can construct messages. If you use vscode or another typescript-enabled IDE, you should also be able to use ",(0,o.kt)("inlineCode",{parentName:"p"},"ctrl+space")," to see auto-completion of the fields required for the message."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { coin } from '@cosmjs/amino';\n\nconst msg = swapExactAmountIn({\n  sender,\n  routes,\n  tokenIn: coin(amount, denom),\n  tokenOutMinAmount\n});\n")),(0,o.kt)("p",null,"(If you want to see an example of calculating ",(0,o.kt)("inlineCode",{parentName:"p"},"routes")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"tokenOutMinAmount")," cosmology uses osmojs and has an ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmology-tech/cosmology/tree/main/packages/core#lookuproutesfortrade"},"example here"),".)"),(0,o.kt)("h3",{id:"calculating-fees"},"Calculating Fees"),(0,o.kt)("p",null,"Make sure to create a ",(0,o.kt)("inlineCode",{parentName:"p"},"fee")," object in addition to your message."),(0,o.kt)("p",null,"For most messages, you can use the predefined fee objects."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { FEES } from 'osmojs';\n\nconst fee = FEES.osmosis.swapExactAmountIn();\n")),(0,o.kt)("p",null,"You can also specify ",(0,o.kt)("inlineCode",{parentName:"p"},"low"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"medium"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"high")," for fees:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const fee = FEES.osmosis.swapExactAmountIn('low');\nconst fee = FEES.osmosis.swapExactAmountIn('medium');\nconst fee = FEES.osmosis.swapExactAmountIn('high');\n")),(0,o.kt)("p",null,"Or you can construct manually if you wish:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { coins } from '@cosmjs/amino';\n\nconst fee = {\n    amount: coins(0, 'uosmo'),\n    gas: '250000'\n}\n")),(0,o.kt)("p",null,"if you are broadcasting multiple messages in a batch, you should ",(0,o.kt)("inlineCode",{parentName:"p"},"simulate")," your tx and estimate the fee"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Dec, IntPretty } from '@keplr-wallet/unit';\n\nconst gasEstimated = await stargateClient.simulate(address, msgs, memo);\nconst fee = {\n  amount: coins(0, 'uosmo'),\n  gas: new IntPretty(new Dec(gasEstimated).mul(new Dec(1.3)))\n    .maxDecimals(0)\n    .locale(false)\n    .toString()\n};\n")),(0,o.kt)("h3",{id:"doing-a-swap"},"Doing a swap"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"  const signingClient = await getSigningOsmosisClient({\n      rpcEndpoint: getRpcEndpoint(),\n      signer: aminoSigner\n    });\n\n    const ibcDenom = pool.poolAssets.find((asset) => {\n      if (asset.token.denom.startsWith('ibc/')) {\n        return asset;\n      }\n    }).token.denom;\n\n    const balanceBefore = await signingClient.getBalance(address, ibcDenom);\n\n    const msg =\n      osmosis.gamm.v1beta1.MessageComposer.withTypeUrl.swapExactAmountIn({\n        sender: address,\n        routes: [\n          {\n            poolId,\n            tokenOutDenom: ibcDenom\n          }\n        ],\n        tokenIn: {\n          amount: '200000',\n          denom: denom\n        },\n        tokenOutMinAmount: '100000'\n      });\n\n    const fee = {\n      amount: [\n        {\n          denom,\n          amount: '100000'\n        }\n      ],\n      gas: '550000'\n    };\n\n    const result = await signingClient.signAndBroadcast(\n      address,\n      [msg],\n      fee,\n      'swap tokens'\n    );\n")),(0,o.kt)("h3",{id:"initializing-the-stargate-client"},"Initializing the Stargate Client"),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"getSigningOsmosisClient")," to get your ",(0,o.kt)("inlineCode",{parentName:"p"},"SigningStargateClient"),", with the Osmosis proto/amino messages full-loaded. No need to manually add amino types, just require and initialize the client:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { getSigningOsmosisClient } from 'osmojs';\n\nconst client = await getSigningOsmosisClient({\n  rpcEndpoint,\n  signer // OfflineSigner\n});\n")),(0,o.kt)("h2",{id:"creating-signers"},"Creating Signers"),(0,o.kt)("p",null,"To broadcast messages, you'll want to use either ",(0,o.kt)("a",{parentName:"p",href:"https://docs.keplr.app/api/cosmjs.html"},"keplr")," or an ",(0,o.kt)("inlineCode",{parentName:"p"},"OfflineSigner")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"cosmjs")," using mnemonics."),(0,o.kt)("h3",{id:"amino-signer"},"Amino Signer"),(0,o.kt)("p",null,"Likely you'll want to use the Amino, so unless you need proto, you should use this one:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { getOfflineSigner as getOfflineSignerAmino } from 'osmojs';\n")),(0,o.kt)("h3",{id:"proto-signer"},"Proto Signer"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { getOfflineSigner as getOfflineSignerProto } from 'osmojs';\n")),(0,o.kt)("p",null,"WARNING: NOT RECOMMENDED TO USE PLAIN-TEXT MNEMONICS. Please take care of your security and use best practices such as AES encryption and/or methods from 12factor applications."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { chains } from 'chain-registry';\n\nconst mnemonic =\n  'unfold client turtle either pilot stock floor glow toward bullet car science';\n  const chain = chains.find(({ chain_name }) => chain_name === 'osmosis');\n  const signer = await getOfflineSigner({\n    mnemonic,\n    chain\n  });\n")),(0,o.kt)("h3",{id:"broadcasting-messages"},"Broadcasting messages"),(0,o.kt)("p",null,"Now that you have your ",(0,o.kt)("inlineCode",{parentName:"p"},"client"),", you can broadcast messages:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { signAndBroadcast } from 'osmojs';\n\nconst res = await signAndBroadcast({\n  client, // SigningStargateClient\n  chainId: 'osmosis-1', // use 'osmo-test-5' for testnet\n  address,\n  msgs: [msg],\n  fee,\n  memo: ''\n});\n")),(0,o.kt)("h3",{id:"osmosis-messages"},"Osmosis Messages"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { osmosis } from 'osmojs';\n\nconst {\n    beginUnlocking,\n    beginUnlockingAll,\n    lockTokens\n} = osmosis.lockup.MessageComposer.withTypeUrl;\n\nconst {\n    lockAndSuperfluidDelegate,\n    superfluidDelegate,\n    superfluidUnbondLock,\n    superfluidUndelegate\n} = osmosis.superfluid.MessageComposer.withTypeUrl;\n\nconst {\n    addToGauge,\n    createGauge\n} = osmosis.incentives.MessageComposer.withTypeUrl;\n\nconst {\n    joinPool,\n    exitPool,\n    exitSwapExternAmountOut,\n    exitSwapShareAmountIn,\n    joinSwapExternAmountIn,\n    joinSwapShareAmountOut,\n    swapExactAmountIn,\n    swapExactAmountOut\n} = osmosis.gamm.v1beta1.MessageComposer.withTypeUrl;\n")),(0,o.kt)("h3",{id:"ibc-messages"},"IBC Messages"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { ibc } from 'osmojs';\n\nconst {\n    transfer\n} = ibc.applications.transfer.v1.MessageComposer.withTypeUrl\n")),(0,o.kt)("h3",{id:"cosmos-messages"},"Cosmos Messages"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { cosmos } from 'osmojs';\n\nconst {\n    fundCommunityPool,\n    setWithdrawAddress,\n    withdrawDelegatorReward,\n    withdrawValidatorCommission\n} = cosmos.distribution.v1beta1.MessageComposer.fromPartial;\n\nconst {\n    multiSend,\n    send\n} = cosmos.bank.v1beta1.MessageComposer.fromPartial;\n\nconst {\n    beginRedelegate,\n    createValidator,\n    delegate,\n    editValidator,\n    undelegate\n} = cosmos.staking.v1beta1.MessageComposer.fromPartial;\n\nconst {\n    deposit,\n    submitProposal,\n    vote,\n    voteWeighted\n} = cosmos.gov.v1beta1.MessageComposer.fromPartial;\n")),(0,o.kt)("h3",{id:"cosmwasm-messages"},"CosmWasm Messages"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { cosmwasm } from "osmojs";\n\nconst {\n    clearAdmin,\n    executeContract,\n    instantiateContract,\n    migrateContract,\n    storeCode,\n    updateAdmin\n} = cosmwasm.wasm.v1.MessageComposer.withTypeUrl;\n')),(0,o.kt)("h3",{id:"further-examples"},"Further examples"),(0,o.kt)("p",null,"Examples in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmology-tech/create-cosmos-app/tree/main/examples"},(0,o.kt)("inlineCode",{parentName:"a"},"create-cosmos-app")," repo's examples directory")," gives you a great guideline on how osmojs can be used at its full extent."),(0,o.kt)("p",null,"You can also refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/osmosis-labs/osmojs/tree/main/packages/osmojs/docs"},"osmojs documentation")," for further documentations on osmojs usage."),(0,o.kt)("h2",{id:"credits"},"Credits"),(0,o.kt)("p",null,"\ud83d\udee0 Built by Cosmology \u2014 if you like our tools, please consider delegating to ",(0,o.kt)("a",{parentName:"p",href:"https://cosmology.tech/validator"},"our validator \u269b\ufe0f")),(0,o.kt)("p",null,"Code built with the help of these related projects:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/osmosis-labs/telescope"},"@osmonauts/telescope"),' a "babel for the Cosmos", Telescope is a TypeScript Transpiler for Cosmos Protobufs.')),(0,o.kt)("h2",{id:"disclaimer"},"Disclaimer"),(0,o.kt)("p",null,"AS DESCRIBED IN THE OSMOJS LICENSES, THE SOFTWARE IS PROVIDED \u201cAS IS\u201d, AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND."),(0,o.kt)("p",null,"No developer or entity involved in creating OsmoJS will be liable for any claims or damages whatsoever associated with your use, inability to use, or your interaction with other users of the OsmoJS code, including any direct, indirect, incidental, special, exemplary, punitive or consequential damages, or loss of profits, cryptocurrencies, tokens, or anything else of value."))}p.isMDXComponent=!0}}]);