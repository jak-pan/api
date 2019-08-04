> # Class: PlainType

## Hierarchy

  * [Type](_primitive_type_.type.md)

  * **PlainType**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Indexable

● \[▪ **index**: *number*\]: string

## Index

### Constructors

* [constructor](_metadata_v0_storage_.plaintype.md#constructor)

### Accessors

* [encodedLength](_metadata_v0_storage_.plaintype.md#encodedlength)
* [hash](_metadata_v0_storage_.plaintype.md#hash)
* [isEmpty](_metadata_v0_storage_.plaintype.md#isempty)
* [length](_metadata_v0_storage_.plaintype.md#length)

### Methods

* [eq](_metadata_v0_storage_.plaintype.md#eq)
* [toHex](_metadata_v0_storage_.plaintype.md#tohex)
* [toJSON](_metadata_v0_storage_.plaintype.md#tojson)
* [toRawType](_metadata_v0_storage_.plaintype.md#torawtype)
* [toString](_metadata_v0_storage_.plaintype.md#tostring)
* [toU8a](_metadata_v0_storage_.plaintype.md#tou8a)

## Constructors

###  constructor

\+ **new PlainType**(`value`: [Text](_primitive_text_.text.md) | `Uint8Array` | string): *[PlainType](_metadata_v0_storage_.plaintype.md)*

*Inherited from [Type](_primitive_type_.type.md).[constructor](_primitive_type_.type.md#constructor)*

*Overrides [Text](_primitive_text_.text.md).[constructor](_primitive_text_.text.md#constructor)*

*Defined in [primitive/Type.ts:19](https://github.com/polkadot-js/api/blob/8da5261/packages/types/src/primitive/Type.ts#L19)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | [Text](_primitive_text_.text.md) \| `Uint8Array` \| string | "" |

**Returns:** *[PlainType](_metadata_v0_storage_.plaintype.md)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Type](_primitive_type_.type.md).[encodedLength](_primitive_type_.type.md#encodedlength)*

*Overrides [Text](_primitive_text_.text.md).[encodedLength](_primitive_text_.text.md#encodedlength)*

*Defined in [primitive/Type.ts:86](https://github.com/polkadot-js/api/blob/8da5261/packages/types/src/primitive/Type.ts#L86)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_.ihash.md)*

*Inherited from [Text](_primitive_text_.text.md).[hash](_primitive_text_.text.md#hash)*

*Defined in [primitive/Text.ts:59](https://github.com/polkadot-js/api/blob/8da5261/packages/types/src/primitive/Text.ts#L59)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Text](_primitive_text_.text.md).[isEmpty](_primitive_text_.text.md#isempty)*

*Defined in [primitive/Text.ts:66](https://github.com/polkadot-js/api/blob/8da5261/packages/types/src/primitive/Text.ts#L66)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from [Text](_primitive_text_.text.md).[length](_primitive_text_.text.md#length)*

*Overrides void*

*Defined in [primitive/Text.ts:73](https://github.com/polkadot-js/api/blob/8da5261/packages/types/src/primitive/Text.ts#L73)*

**`description`** The length of the value

**Returns:** *number*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Text](_primitive_text_.text.md).[eq](_primitive_text_.text.md#eq)*

*Defined in [primitive/Text.ts:81](https://github.com/polkadot-js/api/blob/8da5261/packages/types/src/primitive/Text.ts#L81)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Text](_primitive_text_.text.md).[toHex](_primitive_text_.text.md#tohex)*

*Defined in [primitive/Text.ts:90](https://github.com/polkadot-js/api/blob/8da5261/packages/types/src/primitive/Text.ts#L90)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Text](_primitive_text_.text.md).[toJSON](_primitive_text_.text.md#tojson)*

*Defined in [primitive/Text.ts:99](https://github.com/polkadot-js/api/blob/8da5261/packages/types/src/primitive/Text.ts#L99)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Type](_primitive_type_.type.md).[toRawType](_primitive_type_.type.md#torawtype)*

*Overrides [Text](_primitive_text_.text.md).[toRawType](_primitive_text_.text.md#torawtype)*

*Defined in [primitive/Type.ts:255](https://github.com/polkadot-js/api/blob/8da5261/packages/types/src/primitive/Type.ts#L255)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Text](_primitive_text_.text.md).[toString](_primitive_text_.text.md#tostring)*

*Overrides void*

*Defined in [primitive/Text.ts:113](https://github.com/polkadot-js/api/blob/8da5261/packages/types/src/primitive/Text.ts#L113)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Type](_primitive_type_.type.md).[toU8a](_primitive_type_.type.md#tou8a)*

*Overrides [Text](_primitive_text_.text.md).[toU8a](_primitive_text_.text.md#tou8a)*

*Defined in [primitive/Type.ts:98](https://github.com/polkadot-js/api/blob/8da5261/packages/types/src/primitive/Type.ts#L98)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*