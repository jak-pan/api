[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/elections/types"](../modules/_interfaces_elections_types_.md) › [VoteIndex](_interfaces_elections_types_.voteindex.md)

# Interface: VoteIndex

u32

## Hierarchy

  ↳ [U32](../classes/_primitive_u32_.u32.md)

  ↳ **VoteIndex**

## Implements

* [Codec](_types_.codec.md)

## Index

### Constructors

* [constructor](_interfaces_elections_types_.voteindex.md#constructor)

### Methods

* [toHex](_interfaces_elections_types_.voteindex.md#tohex)
* [toRawType](_interfaces_elections_types_.voteindex.md#torawtype)
* [toU8a](_interfaces_elections_types_.voteindex.md#tou8a)

## Constructors

###  constructor

\+ **new VoteIndex**(`value?`: [AnyNumber](../modules/_types_.md#anynumber)): *[VoteIndex](_interfaces_elections_types_.voteindex.md)*

*Inherited from [U32](../classes/_primitive_u32_.u32.md).[constructor](../classes/_primitive_u32_.u32.md#constructor)*

*Overrides [UInt](../classes/_codec_uint_.uint.md).[constructor](../classes/_codec_uint_.uint.md#constructor)*

*Defined in [primitive/U32.ts:14](https://github.com/polkadot-js/api/blob/f73c018/packages/types/src/primitive/U32.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | [AnyNumber](../modules/_types_.md#anynumber) |

**Returns:** *[VoteIndex](_interfaces_elections_types_.voteindex.md)*

## Methods

###  toHex

▸ **toHex**(`isLe`: boolean): *string*

*Inherited from [UInt](../classes/_codec_uint_.uint.md).[toHex](../classes/_codec_uint_.uint.md#tohex)*

*Overrides void*

*Defined in [codec/UInt.ts:37](https://github.com/polkadot-js/api/blob/f73c018/packages/types/src/codec/UInt.ts#L37)*

**`description`** Returns a hex string representation of the value

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`isLe` | boolean | false |

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [UInt](../classes/_codec_uint_.uint.md).[toRawType](../classes/_codec_uint_.uint.md#torawtype)*

*Overrides void*

*Defined in [codec/UInt.ts:49](https://github.com/polkadot-js/api/blob/f73c018/packages/types/src/codec/UInt.ts#L49)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from [UInt](../classes/_codec_uint_.uint.md).[toU8a](../classes/_codec_uint_.uint.md#tou8a)*

*Overrides void*

*Defined in [codec/UInt.ts:63](https://github.com/polkadot-js/api/blob/f73c018/packages/types/src/codec/UInt.ts#L63)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*