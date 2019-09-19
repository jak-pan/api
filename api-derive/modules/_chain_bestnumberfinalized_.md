**[Polkadot JS API](../README.md)**

[Globals](../globals.md) › [&quot;chain/bestNumberFinalized&quot;](_chain_bestnumberfinalized_.md)

# External module: "chain/bestNumberFinalized"

## Index

### Functions

* [bestNumberFinalized](_chain_bestnumberfinalized_.md#bestnumberfinalized)

## Functions

###  bestNumberFinalized

▸ **bestNumberFinalized**(`api`: ApiInterfaceRx): *function*

*Defined in [chain/bestNumberFinalized.ts:26](https://github.com/polkadot-js/api/blob/67929d3/packages/api-derive/src/chain/bestNumberFinalized.ts#L26)*

**`name`** bestNumberFinalized

**`description`** Get the latest finalized block number.

**`example`** 
<BR>

```javascript
api.derive.chain.bestNumberFinalized((blockNumber) => {
  console.log(`the current finalized block is #${blockNumber}`);
});
```

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |

**Returns:** *function*

A BlockNumber

▸ (): *Observable‹BlockNumber›*