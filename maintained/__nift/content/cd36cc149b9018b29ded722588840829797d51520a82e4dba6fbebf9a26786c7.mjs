import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Type system",
  description: "TEN framework type system reference: basic and composite data types, type conversion rules, schema validation, and language mappings for C++, Go, and Python."
};
export let _markdown = `

The TEN framework uses a type system to define and validate data types for message properties and extension configurations. This type system ensures data integrity across different programming languages and provides automatic type conversion when safe to do so.

The type system offers several key benefits:

* **Cross-language compatibility**: Consistent type definitions work across C++, Go, and Python extensions
* **Automatic validation**: Types defined in TEN schemas are validated at runtime
* **Safe conversions**: Automatic type conversion when no data loss occurs
* **Clear contracts**: Explicit type definitions make extension interfaces predictable

You can declare types for message properties and extension properties through TEN schemas in your manifest files, or let the framework infer types from initial values.

## Basic Types [#basic-types]

The TEN framework provides fundamental data types that map consistently across supported programming languages.

### Numeric types [#numeric-types]

| Type      | Description                                                | C++ type   | Go type   | Python type |
| :-------- | :--------------------------------------------------------- | :--------- | :-------- | :---------- |
| \`int8\`    | An 8-bit signed integer                                    | \`int8_t\`   | \`int8\`    | \`int\`       |
| \`int16\`   | A 16-bit signed integer                                    | \`int16_t\`  | \`int16\`   | \`int\`       |
| \`int32\`   | A 32-bit signed integer                                    | \`int32_t\`  | \`int32\`   | \`int\`       |
| \`int64\`   | A 64-bit signed integer                                    | \`int64_t\`  | \`int64\`   | \`int\`       |
| \`uint8\`   | An 8-bit unsigned integer                                  | \`uint8_t\`  | \`uint8\`   | \`int\`       |
| \`uint16\`  | A 16-bit unsigned integer                                  | \`uint16_t\` | \`uint16\`  | \`int\`       |
| \`uint32\`  | A 32-bit unsigned integer                                  | \`uint32_t\` | \`uint32\`  | \`int\`       |
| \`uint64\`  | A 64-bit unsigned integer                                  | \`uint64_t\` | \`uint64\`  | \`int\`       |
| \`float32\` | A single precision (32-bit) IEEE 754 floating-point number | \`float\`    | \`float32\` | \`float\`     |
| \`float64\` | A double-precision (64-bit) IEEE 754 floating-point number | \`double\`   | \`float64\` | \`float\`     |

### Text and binary types [#text-and-binary-types]

| Type     | Description                        | C++ Type                | Go Type  | Python Type                |
| :------- | :--------------------------------- | :---------------------- | :------- | :------------------------- |
| \`string\` | A Unicode character sequence       | \`std::string\` / \`char*\` | \`string\` | \`str\`                      |
| \`buf\`    | A sequence of 8-bit unsigned bytes | \`uint8_t*\`              | \`[]byte\` | \`bytearray\` / \`memoryview\` |

### Boolean and pointer types [#boolean-and-pointer-types]

| Type   | Description                          | C++ type | Go type          | Python type |
| :----- | :----------------------------------- | :------- | :--------------- | :---------- |
| \`bool\` | A binary value, either true or false | \`bool\`   | \`bool\`           | \`bool\`      |
| \`ptr\`  | A pointer to a memory address        | \`void*\`  | \`unsafe.Pointer\` |             |

## Composite types [#composite-types]

Composite types allow you to work with structured data and collections.

### Arrays [#arrays]

Arrays contain collections of elements of the same type. They provide ordered storage for multiple values.

### Objects [#objects]

Objects represent complex key-value pairs where keys are always strings. They enable structured data with named properties.

| Type     | Description                               | Use cases                                     |
| :------- | :---------------------------------------- | :-------------------------------------------- |
| \`array\`  | A collection of elements of the same type | Lists, sequences, collections of similar data |
| \`object\` | Complex key/value pairs with string keys  | Configuration structures, nested properties   |

### Working with composite types [#working-with-composite-types]

You can access basic types directly using methods like \`get_property()\` and \`set_property()\`.

\`\`\`cpp
// Get property value
int32_t value = cmd.get_property_\`int32\`("property_name");

// Set property value
cmd.set_property("property_name", 100);
\`\`\`

Composite types typically require serialization methods for access:

\`\`\`go
type MyProp struct {
    Name string \`json:"name"\`
}

var prop MyProp
bytes, _ := json.Marshal(&prop)
cmd.SetPropertyFromJSONBytes("property_name", bytes)
\`\`\`

## Type schemas and validation [#type-schemas-and-validation]

The TEN framework determines property types through two methods: explicit schema definitions or automatic inference from initial values.

### Schema-defined types [#schema-defined-types]

When you specify a TEN schema in your manifest file, the framework uses the schema to determine property types and validate values:

\`\`\`json
{
 "api": {
   "property": {
     "timeout": {
       "type": "\`int32\`"
     },
     "enabled": {
       "type": "bool"
     }
   }
 }
}
\`\`\`

Schema-defined types provide strict validation and ensure type safety across extension boundaries.

### Inferred types [#inferred-types]

When a TEN schema is not specified, the framework infers property types from initial value assignments:

* **Direct assignment**: If you assign an \`int32_t\` value, the property becomes \`int32_t\`
* **JSON assignment**: Types follow JSON processing rules; numbers default to \`int64\` for integers, \`float64\` for floating-point.

### Type validation [#type-validation]

The framework validates types when:

* Loading \`property.json\` files
* Calling methods like \`set_property_from_json()\`
* Sending messages with typed properties

The following table summarizes the validation behavior:

| Schema defined | Validation behavior                                      |
| :------------: | -------------------------------------------------------- |
|       Yes      | Strict type checking against schema definition           |
|       No       | Type inferred from first assignment, flexible thereafter |

## Type conversion rules [#type-conversion-rules]

The TEN framework supports automatic type conversion between compatible types, but only when the conversion preserves data integrity.

### Safe conversions [#safe-conversions]

Safe conversions move from lower to higher precision types and never lose data. The framework performs these conversions automatically:

#### Integer promotions [#integer-promotions]

| From     | To (Allowed)                   |
| -------- | ------------------------------ |
| \`int8\`   | \`int16\` / \`int32\` / \`int64\`    |
| \`int16\`  | \`int32\` / \`int64\`              |
| \`int32\`  | \`int64\`                        |
| \`uint8\`  | \`uint16\` / \`uint32\` / \`uint64\` |
| \`uint16\` | \`uint32\` / \`uint64\`            |
| \`uint32\` | \`uint64\`                       |

#### Floating-point promotions [#floating-point-promotions]

| From      | To (Allowed) |
| --------- | ------------ |
| \`float32\` | \`float64\`    |

Example of safe conversion:

\`\`\`cpp
// Set property value. 
// The type of \`property_name\` in TEN Runtime is \`int32\`.
cmd.set_property("property_name", 100);
 
// Get property value. Correct.
int32_t value = cmd.get_property_int32("property_name");
 
// Get property value. Correct. 
// TEN Type System automatically converts the type to \`int64\`.
int64_t value2 = cmd.get_property_int64("property_name");
\`\`\`

### Unsafe conversions [#unsafe-conversions]

Unsafe conversions move from higher to lower precision types and may lose data. The framework checks for overflow and throws an error when data loss would occur. The TEN runtime performs unsafe conversions only when deserializing JSON documents into TEN properties that have defined TEN schemas:

* **Loading \`property.json\` files**\\
  Integers are parsed as \`int64\` by default and floating-point numbers as \`float64\` by default. The framework applies unsafe conversion rules to match the target schema types.

* **Calling \`set_property_from_json()\` methods**\\
  When passing serialized JSON strings, the framework performs unsafe conversion according to the defined schema requirements.

#### Unsafe conversion scenarios [#unsafe-conversion-scenarios]

In the TEN framework type system, unsafe conversion rules are as follows:

* Converting \`int64\` to lower precision \`int\` types
* Converting \`int64\` to any \`uint\` type
* Converting \`float64\` to \`float32\`

Example of unsafe conversion error:

\`\`\`cpp
// Get property value. Incorrect use, an error is thrown.
int16_t error_type = cmd.get_property_int16("property_name");
\`\`\`

Unsafe conversions succeed only when the source value fits within the target type's range:

| From      | To        | Valid value range                                  |
| --------- | --------- | -------------------------------------------------- |
| \`int64\`   | \`int8\`    | \\[-2^7, 2^7 - 1]                                   |
| \`int64\`   | \`int16\`   | \\[-2^15, 2^15 - 1]                                 |
| \`int64\`   | \`int32\`   | \\[-2^31, 2^31 - 1]                                 |
| \`int64\`   | \`uint8\`   | \\[0, 2^7 - 1]                                      |
| \`int64\`   | \`uint16\`  | \\[0, 2^15 - 1]                                     |
| \`int64\`   | \`uint32\`  | \\[0, 2^31 - 1]                                     |
| \`int64\`   | \`uint64\`  | \\[0, 2^63 - 1]                                     |
| \`float64\` | \`float32\` | \\[-3.4028234663852886e+38, 3.4028234663852886e+38] |
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "The TEN framework uses a type system to define and validate data types for message properties and extension configurations. This type system ensures data integrity across different programming languages and provides automatic type conversion when safe to do so."
  }, {
    heading: undefined,
    content: "The type system offers several key benefits:"
  }, {
    heading: undefined,
    content: "**Cross-language compatibility**: Consistent type definitions work across C++, Go, and Python extensions"
  }, {
    heading: undefined,
    content: "**Automatic validation**: Types defined in TEN schemas are validated at runtime"
  }, {
    heading: undefined,
    content: "**Safe conversions**: Automatic type conversion when no data loss occurs"
  }, {
    heading: undefined,
    content: "**Clear contracts**: Explicit type definitions make extension interfaces predictable"
  }, {
    heading: undefined,
    content: "You can declare types for message properties and extension properties through TEN schemas in your manifest files, or let the framework infer types from initial values."
  }, {
    heading: "basic-types",
    content: "The TEN framework provides fundamental data types that map consistently across supported programming languages."
  }, {
    heading: "numeric-types",
    content: "Type"
  }, {
    heading: "numeric-types",
    content: "Description"
  }, {
    heading: "numeric-types",
    content: "C++ type"
  }, {
    heading: "numeric-types",
    content: "Go type"
  }, {
    heading: "numeric-types",
    content: "Python type"
  }, {
    heading: "numeric-types",
    content: "`int8`"
  }, {
    heading: "numeric-types",
    content: "An 8-bit signed integer"
  }, {
    heading: "numeric-types",
    content: "`int8_t`"
  }, {
    heading: "numeric-types",
    content: "`int8`"
  }, {
    heading: "numeric-types",
    content: "`int`"
  }, {
    heading: "numeric-types",
    content: "`int16`"
  }, {
    heading: "numeric-types",
    content: "A 16-bit signed integer"
  }, {
    heading: "numeric-types",
    content: "`int16_t`"
  }, {
    heading: "numeric-types",
    content: "`int16`"
  }, {
    heading: "numeric-types",
    content: "`int`"
  }, {
    heading: "numeric-types",
    content: "`int32`"
  }, {
    heading: "numeric-types",
    content: "A 32-bit signed integer"
  }, {
    heading: "numeric-types",
    content: "`int32_t`"
  }, {
    heading: "numeric-types",
    content: "`int32`"
  }, {
    heading: "numeric-types",
    content: "`int`"
  }, {
    heading: "numeric-types",
    content: "`int64`"
  }, {
    heading: "numeric-types",
    content: "A 64-bit signed integer"
  }, {
    heading: "numeric-types",
    content: "`int64_t`"
  }, {
    heading: "numeric-types",
    content: "`int64`"
  }, {
    heading: "numeric-types",
    content: "`int`"
  }, {
    heading: "numeric-types",
    content: "`uint8`"
  }, {
    heading: "numeric-types",
    content: "An 8-bit unsigned integer"
  }, {
    heading: "numeric-types",
    content: "`uint8_t`"
  }, {
    heading: "numeric-types",
    content: "`uint8`"
  }, {
    heading: "numeric-types",
    content: "`int`"
  }, {
    heading: "numeric-types",
    content: "`uint16`"
  }, {
    heading: "numeric-types",
    content: "A 16-bit unsigned integer"
  }, {
    heading: "numeric-types",
    content: "`uint16_t`"
  }, {
    heading: "numeric-types",
    content: "`uint16`"
  }, {
    heading: "numeric-types",
    content: "`int`"
  }, {
    heading: "numeric-types",
    content: "`uint32`"
  }, {
    heading: "numeric-types",
    content: "A 32-bit unsigned integer"
  }, {
    heading: "numeric-types",
    content: "`uint32_t`"
  }, {
    heading: "numeric-types",
    content: "`uint32`"
  }, {
    heading: "numeric-types",
    content: "`int`"
  }, {
    heading: "numeric-types",
    content: "`uint64`"
  }, {
    heading: "numeric-types",
    content: "A 64-bit unsigned integer"
  }, {
    heading: "numeric-types",
    content: "`uint64_t`"
  }, {
    heading: "numeric-types",
    content: "`uint64`"
  }, {
    heading: "numeric-types",
    content: "`int`"
  }, {
    heading: "numeric-types",
    content: "`float32`"
  }, {
    heading: "numeric-types",
    content: "A single precision (32-bit) IEEE 754 floating-point number"
  }, {
    heading: "numeric-types",
    content: "`float`"
  }, {
    heading: "numeric-types",
    content: "`float32`"
  }, {
    heading: "numeric-types",
    content: "`float`"
  }, {
    heading: "numeric-types",
    content: "`float64`"
  }, {
    heading: "numeric-types",
    content: "A double-precision (64-bit) IEEE 754 floating-point number"
  }, {
    heading: "numeric-types",
    content: "`double`"
  }, {
    heading: "numeric-types",
    content: "`float64`"
  }, {
    heading: "numeric-types",
    content: "`float`"
  }, {
    heading: "text-and-binary-types",
    content: "Type"
  }, {
    heading: "text-and-binary-types",
    content: "Description"
  }, {
    heading: "text-and-binary-types",
    content: "C++ Type"
  }, {
    heading: "text-and-binary-types",
    content: "Go Type"
  }, {
    heading: "text-and-binary-types",
    content: "Python Type"
  }, {
    heading: "text-and-binary-types",
    content: "`string`"
  }, {
    heading: "text-and-binary-types",
    content: "A Unicode character sequence"
  }, {
    heading: "text-and-binary-types",
    content: "`std::string` / `char*`"
  }, {
    heading: "text-and-binary-types",
    content: "`string`"
  }, {
    heading: "text-and-binary-types",
    content: "`str`"
  }, {
    heading: "text-and-binary-types",
    content: "`buf`"
  }, {
    heading: "text-and-binary-types",
    content: "A sequence of 8-bit unsigned bytes"
  }, {
    heading: "text-and-binary-types",
    content: "`uint8_t*`"
  }, {
    heading: "text-and-binary-types",
    content: "`[]byte`"
  }, {
    heading: "text-and-binary-types",
    content: "`bytearray` / `memoryview`"
  }, {
    heading: "boolean-and-pointer-types",
    content: "Type"
  }, {
    heading: "boolean-and-pointer-types",
    content: "Description"
  }, {
    heading: "boolean-and-pointer-types",
    content: "C++ type"
  }, {
    heading: "boolean-and-pointer-types",
    content: "Go type"
  }, {
    heading: "boolean-and-pointer-types",
    content: "Python type"
  }, {
    heading: "boolean-and-pointer-types",
    content: "`bool`"
  }, {
    heading: "boolean-and-pointer-types",
    content: "A binary value, either true or false"
  }, {
    heading: "boolean-and-pointer-types",
    content: "`bool`"
  }, {
    heading: "boolean-and-pointer-types",
    content: "`bool`"
  }, {
    heading: "boolean-and-pointer-types",
    content: "`bool`"
  }, {
    heading: "boolean-and-pointer-types",
    content: "`ptr`"
  }, {
    heading: "boolean-and-pointer-types",
    content: "A pointer to a memory address"
  }, {
    heading: "boolean-and-pointer-types",
    content: "`void*`"
  }, {
    heading: "boolean-and-pointer-types",
    content: "`unsafe.Pointer`"
  }, {
    heading: "composite-types",
    content: "Composite types allow you to work with structured data and collections."
  }, {
    heading: "arrays",
    content: "Arrays contain collections of elements of the same type. They provide ordered storage for multiple values."
  }, {
    heading: "objects",
    content: "Objects represent complex key-value pairs where keys are always strings. They enable structured data with named properties."
  }, {
    heading: "objects",
    content: "Type"
  }, {
    heading: "objects",
    content: "Description"
  }, {
    heading: "objects",
    content: "Use cases"
  }, {
    heading: "objects",
    content: "`array`"
  }, {
    heading: "objects",
    content: "A collection of elements of the same type"
  }, {
    heading: "objects",
    content: "Lists, sequences, collections of similar data"
  }, {
    heading: "objects",
    content: "`object`"
  }, {
    heading: "objects",
    content: "Complex key/value pairs with string keys"
  }, {
    heading: "objects",
    content: "Configuration structures, nested properties"
  }, {
    heading: "working-with-composite-types",
    content: "You can access basic types directly using methods like `get_property()` and `set_property()`."
  }, {
    heading: "working-with-composite-types",
    content: "Composite types typically require serialization methods for access:"
  }, {
    heading: "type-schemas-and-validation",
    content: "The TEN framework determines property types through two methods: explicit schema definitions or automatic inference from initial values."
  }, {
    heading: "schema-defined-types",
    content: "When you specify a TEN schema in your manifest file, the framework uses the schema to determine property types and validate values:"
  }, {
    heading: "schema-defined-types",
    content: "Schema-defined types provide strict validation and ensure type safety across extension boundaries."
  }, {
    heading: "inferred-types",
    content: "When a TEN schema is not specified, the framework infers property types from initial value assignments:"
  }, {
    heading: "inferred-types",
    content: "**Direct assignment**: If you assign an `int32_t` value, the property becomes `int32_t`"
  }, {
    heading: "inferred-types",
    content: "**JSON assignment**: Types follow JSON processing rules; numbers default to `int64` for integers, `float64` for floating-point."
  }, {
    heading: "type-validation",
    content: "The framework validates types when:"
  }, {
    heading: "type-validation",
    content: "Loading `property.json` files"
  }, {
    heading: "type-validation",
    content: "Calling methods like `set_property_from_json()`"
  }, {
    heading: "type-validation",
    content: "Sending messages with typed properties"
  }, {
    heading: "type-validation",
    content: "The following table summarizes the validation behavior:"
  }, {
    heading: "type-validation",
    content: "Schema defined"
  }, {
    heading: "type-validation",
    content: "Validation behavior"
  }, {
    heading: "type-validation",
    content: "Yes"
  }, {
    heading: "type-validation",
    content: "Strict type checking against schema definition"
  }, {
    heading: "type-validation",
    content: "No"
  }, {
    heading: "type-validation",
    content: "Type inferred from first assignment, flexible thereafter"
  }, {
    heading: "type-conversion-rules",
    content: "The TEN framework supports automatic type conversion between compatible types, but only when the conversion preserves data integrity."
  }, {
    heading: "safe-conversions",
    content: "Safe conversions move from lower to higher precision types and never lose data. The framework performs these conversions automatically:"
  }, {
    heading: "integer-promotions",
    content: "From"
  }, {
    heading: "integer-promotions",
    content: "To (Allowed)"
  }, {
    heading: "integer-promotions",
    content: "`int8`"
  }, {
    heading: "integer-promotions",
    content: "`int16` / `int32` / `int64`"
  }, {
    heading: "integer-promotions",
    content: "`int16`"
  }, {
    heading: "integer-promotions",
    content: "`int32` / `int64`"
  }, {
    heading: "integer-promotions",
    content: "`int32`"
  }, {
    heading: "integer-promotions",
    content: "`int64`"
  }, {
    heading: "integer-promotions",
    content: "`uint8`"
  }, {
    heading: "integer-promotions",
    content: "`uint16` / `uint32` / `uint64`"
  }, {
    heading: "integer-promotions",
    content: "`uint16`"
  }, {
    heading: "integer-promotions",
    content: "`uint32` / `uint64`"
  }, {
    heading: "integer-promotions",
    content: "`uint32`"
  }, {
    heading: "integer-promotions",
    content: "`uint64`"
  }, {
    heading: "floating-point-promotions",
    content: "From"
  }, {
    heading: "floating-point-promotions",
    content: "To (Allowed)"
  }, {
    heading: "floating-point-promotions",
    content: "`float32`"
  }, {
    heading: "floating-point-promotions",
    content: "`float64`"
  }, {
    heading: "floating-point-promotions",
    content: "Example of safe conversion:"
  }, {
    heading: "unsafe-conversions",
    content: "Unsafe conversions move from higher to lower precision types and may lose data. The framework checks for overflow and throws an error when data loss would occur. The TEN runtime performs unsafe conversions only when deserializing JSON documents into TEN properties that have defined TEN schemas:"
  }, {
    heading: "unsafe-conversions",
    content: "**Loading `property.json` files**\\\nIntegers are parsed as `int64` by default and floating-point numbers as `float64` by default. The framework applies unsafe conversion rules to match the target schema types."
  }, {
    heading: "unsafe-conversions",
    content: "**Calling `set_property_from_json()` methods**\\\nWhen passing serialized JSON strings, the framework performs unsafe conversion according to the defined schema requirements."
  }, {
    heading: "unsafe-conversion-scenarios",
    content: "In the TEN framework type system, unsafe conversion rules are as follows:"
  }, {
    heading: "unsafe-conversion-scenarios",
    content: "Converting `int64` to lower precision `int` types"
  }, {
    heading: "unsafe-conversion-scenarios",
    content: "Converting `int64` to any `uint` type"
  }, {
    heading: "unsafe-conversion-scenarios",
    content: "Converting `float64` to `float32`"
  }, {
    heading: "unsafe-conversion-scenarios",
    content: "Example of unsafe conversion error:"
  }, {
    heading: "unsafe-conversion-scenarios",
    content: "Unsafe conversions succeed only when the source value fits within the target type's range:"
  }, {
    heading: "unsafe-conversion-scenarios",
    content: "From"
  }, {
    heading: "unsafe-conversion-scenarios",
    content: "To"
  }, {
    heading: "unsafe-conversion-scenarios",
    content: "Valid value range"
  }, {
    heading: "unsafe-conversion-scenarios",
    content: "`int64`"
  }, {
    heading: "unsafe-conversion-scenarios",
    content: "`int8`"
  }, {
    heading: "unsafe-conversion-scenarios",
    content: "\\[-2^7, 2^7 - 1]"
  }, {
    heading: "unsafe-conversion-scenarios",
    content: "`int64`"
  }, {
    heading: "unsafe-conversion-scenarios",
    content: "`int16`"
  }, {
    heading: "unsafe-conversion-scenarios",
    content: "\\[-2^15, 2^15 - 1]"
  }, {
    heading: "unsafe-conversion-scenarios",
    content: "`int64`"
  }, {
    heading: "unsafe-conversion-scenarios",
    content: "`int32`"
  }, {
    heading: "unsafe-conversion-scenarios",
    content: "\\[-2^31, 2^31 - 1]"
  }, {
    heading: "unsafe-conversion-scenarios",
    content: "`int64`"
  }, {
    heading: "unsafe-conversion-scenarios",
    content: "`uint8`"
  }, {
    heading: "unsafe-conversion-scenarios",
    content: "\\[0, 2^7 - 1]"
  }, {
    heading: "unsafe-conversion-scenarios",
    content: "`int64`"
  }, {
    heading: "unsafe-conversion-scenarios",
    content: "`uint16`"
  }, {
    heading: "unsafe-conversion-scenarios",
    content: "\\[0, 2^15 - 1]"
  }, {
    heading: "unsafe-conversion-scenarios",
    content: "`int64`"
  }, {
    heading: "unsafe-conversion-scenarios",
    content: "`uint32`"
  }, {
    heading: "unsafe-conversion-scenarios",
    content: "\\[0, 2^31 - 1]"
  }, {
    heading: "unsafe-conversion-scenarios",
    content: "`int64`"
  }, {
    heading: "unsafe-conversion-scenarios",
    content: "`uint64`"
  }, {
    heading: "unsafe-conversion-scenarios",
    content: "\\[0, 2^63 - 1]"
  }, {
    heading: "unsafe-conversion-scenarios",
    content: "`float64`"
  }, {
    heading: "unsafe-conversion-scenarios",
    content: "`float32`"
  }, {
    heading: "unsafe-conversion-scenarios",
    content: "\\[-3.4028234663852886e+38, 3.4028234663852886e+38]"
  }],
  headings: [{
    id: "basic-types",
    content: "Basic Types"
  }, {
    id: "numeric-types",
    content: "Numeric types"
  }, {
    id: "text-and-binary-types",
    content: "Text and binary types"
  }, {
    id: "boolean-and-pointer-types",
    content: "Boolean and pointer types"
  }, {
    id: "composite-types",
    content: "Composite types"
  }, {
    id: "arrays",
    content: "Arrays"
  }, {
    id: "objects",
    content: "Objects"
  }, {
    id: "working-with-composite-types",
    content: "Working with composite types"
  }, {
    id: "type-schemas-and-validation",
    content: "Type schemas and validation"
  }, {
    id: "schema-defined-types",
    content: "Schema-defined types"
  }, {
    id: "inferred-types",
    content: "Inferred types"
  }, {
    id: "type-validation",
    content: "Type validation"
  }, {
    id: "type-conversion-rules",
    content: "Type conversion rules"
  }, {
    id: "safe-conversions",
    content: "Safe conversions"
  }, {
    id: "integer-promotions",
    content: "Integer promotions"
  }, {
    id: "floating-point-promotions",
    content: "Floating-point promotions"
  }, {
    id: "unsafe-conversions",
    content: "Unsafe conversions"
  }, {
    id: "unsafe-conversion-scenarios",
    content: "Unsafe conversion scenarios"
  }]
};
export let toc = [{
  depth: 2,
  url: "#basic-types",
  title: _jsx(_Fragment, {
    children: "Basic Types"
  })
}, {
  depth: 3,
  url: "#numeric-types",
  title: _jsx(_Fragment, {
    children: "Numeric types"
  })
}, {
  depth: 3,
  url: "#text-and-binary-types",
  title: _jsx(_Fragment, {
    children: "Text and binary types"
  })
}, {
  depth: 3,
  url: "#boolean-and-pointer-types",
  title: _jsx(_Fragment, {
    children: "Boolean and pointer types"
  })
}, {
  depth: 2,
  url: "#composite-types",
  title: _jsx(_Fragment, {
    children: "Composite types"
  })
}, {
  depth: 3,
  url: "#arrays",
  title: _jsx(_Fragment, {
    children: "Arrays"
  })
}, {
  depth: 3,
  url: "#objects",
  title: _jsx(_Fragment, {
    children: "Objects"
  })
}, {
  depth: 3,
  url: "#working-with-composite-types",
  title: _jsx(_Fragment, {
    children: "Working with composite types"
  })
}, {
  depth: 2,
  url: "#type-schemas-and-validation",
  title: _jsx(_Fragment, {
    children: "Type schemas and validation"
  })
}, {
  depth: 3,
  url: "#schema-defined-types",
  title: _jsx(_Fragment, {
    children: "Schema-defined types"
  })
}, {
  depth: 3,
  url: "#inferred-types",
  title: _jsx(_Fragment, {
    children: "Inferred types"
  })
}, {
  depth: 3,
  url: "#type-validation",
  title: _jsx(_Fragment, {
    children: "Type validation"
  })
}, {
  depth: 2,
  url: "#type-conversion-rules",
  title: _jsx(_Fragment, {
    children: "Type conversion rules"
  })
}, {
  depth: 3,
  url: "#safe-conversions",
  title: _jsx(_Fragment, {
    children: "Safe conversions"
  })
}, {
  depth: 4,
  url: "#integer-promotions",
  title: _jsx(_Fragment, {
    children: "Integer promotions"
  })
}, {
  depth: 4,
  url: "#floating-point-promotions",
  title: _jsx(_Fragment, {
    children: "Floating-point promotions"
  })
}, {
  depth: 3,
  url: "#unsafe-conversions",
  title: _jsx(_Fragment, {
    children: "Unsafe conversions"
  })
}, {
  depth: 4,
  url: "#unsafe-conversion-scenarios",
  title: _jsx(_Fragment, {
    children: "Unsafe conversion scenarios"
  })
}];
function _createMdxContent(props) {
  const _components = {
    br: "br",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "The TEN framework uses a type system to define and validate data types for message properties and extension configurations. This type system ensures data integrity across different programming languages and provides automatic type conversion when safe to do so."
    }), `
`, _jsx(_components.p, {
      children: "The type system offers several key benefits:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Cross-language compatibility"
        }), ": Consistent type definitions work across C++, Go, and Python extensions"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Automatic validation"
        }), ": Types defined in TEN schemas are validated at runtime"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Safe conversions"
        }), ": Automatic type conversion when no data loss occurs"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Clear contracts"
        }), ": Explicit type definitions make extension interfaces predictable"]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "You can declare types for message properties and extension properties through TEN schemas in your manifest files, or let the framework infer types from initial values."
    }), `
`, _jsx(_components.h2, {
      id: "basic-types",
      children: "Basic Types"
    }), `
`, _jsx(_components.p, {
      children: "The TEN framework provides fundamental data types that map consistently across supported programming languages."
    }), `
`, _jsx(_components.h3, {
      id: "numeric-types",
      children: "Numeric types"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Type"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Description"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "C++ type"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Go type"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Python type"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "int8"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "An 8-bit signed integer"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "int8_t"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "int8"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "int"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "int16"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "A 16-bit signed integer"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "int16_t"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "int16"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "int"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "int32"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "A 32-bit signed integer"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "int32_t"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "int32"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "int"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "int64"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "A 64-bit signed integer"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "int64_t"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "int64"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "int"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "uint8"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "An 8-bit unsigned integer"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "uint8_t"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "uint8"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "int"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "uint16"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "A 16-bit unsigned integer"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "uint16_t"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "uint16"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "int"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "uint32"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "A 32-bit unsigned integer"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "uint32_t"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "uint32"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "int"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "uint64"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "A 64-bit unsigned integer"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "uint64_t"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "uint64"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "int"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "float32"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "A single precision (32-bit) IEEE 754 floating-point number"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "float"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "float32"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "float"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "float64"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "A double-precision (64-bit) IEEE 754 floating-point number"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "double"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "float64"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "float"
            })
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "text-and-binary-types",
      children: "Text and binary types"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Type"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Description"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "C++ Type"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Go Type"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Python Type"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "A Unicode character sequence"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.code, {
              children: "std::string"
            }), " / ", _jsx(_components.code, {
              children: "char*"
            })]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "string"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "str"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "buf"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "A sequence of 8-bit unsigned bytes"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "uint8_t*"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "[]byte"
            })
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.code, {
              children: "bytearray"
            }), " / ", _jsx(_components.code, {
              children: "memoryview"
            })]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "boolean-and-pointer-types",
      children: "Boolean and pointer types"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Type"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Description"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "C++ type"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Go type"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Python type"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "bool"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "A binary value, either true or false"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "bool"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "bool"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "bool"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "ptr"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "A pointer to a memory address"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "void*"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "unsafe.Pointer"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "composite-types",
      children: "Composite types"
    }), `
`, _jsx(_components.p, {
      children: "Composite types allow you to work with structured data and collections."
    }), `
`, _jsx(_components.h3, {
      id: "arrays",
      children: "Arrays"
    }), `
`, _jsx(_components.p, {
      children: "Arrays contain collections of elements of the same type. They provide ordered storage for multiple values."
    }), `
`, _jsx(_components.h3, {
      id: "objects",
      children: "Objects"
    }), `
`, _jsx(_components.p, {
      children: "Objects represent complex key-value pairs where keys are always strings. They enable structured data with named properties."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Type"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Description"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Use cases"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "array"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "A collection of elements of the same type"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Lists, sequences, collections of similar data"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "object"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Complex key/value pairs with string keys"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Configuration structures, nested properties"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "working-with-composite-types",
      children: "Working with composite types"
    }), `
`, _jsxs(_components.p, {
      children: ["You can access basic types directly using methods like ", _jsx(_components.code, {
        children: "get_property()"
      }), " and ", _jsx(_components.code, {
        children: "set_property()"
      }), "."]
    }), `
`, _jsx(_Fragment, {
      children: _jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// Get property value"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "int32_t"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " value "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " cmd.get_property_`int32`("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"property_name"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ");"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line"
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// Set property value"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "cmd."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "set_property"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"property_name"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "100"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ");"
            })]
          })]
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "Composite types typically require serialization methods for access:"
    }), `
`, _jsx(_Fragment, {
      children: _jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="M1.811 10.231c-.047 0-.058-.023-.035-.059l.246-.315c.023-.035.081-.058.128-.058h4.172c.046 0 .058.035.035.07l-.199.303c-.023.036-.082.07-.117.07zM.047 11.306c-.047 0-.059-.023-.035-.058l.245-.316c.023-.035.082-.058.129-.058h5.328c.047 0 .07.035.058.07l-.093.28c-.012.047-.058.07-.105.07zm2.828 1.075c-.047 0-.059-.035-.035-.07l.163-.292c.023-.035.07-.07.117-.07h2.337c.047 0 .07.035.07.082l-.023.28c0 .047-.047.082-.082.082zm12.129-2.36c-.736.187-1.239.327-1.963.514-.176.046-.187.058-.34-.117-.174-.199-.303-.327-.548-.444-.737-.362-1.45-.257-2.115.175-.795.514-1.204 1.274-1.192 2.22.011.935.654 1.706 1.577 1.835.795.105 1.46-.175 1.987-.77.105-.13.198-.27.315-.434H10.47c-.245 0-.304-.152-.222-.35.152-.362.432-.97.596-1.274a.315.315 0 01.292-.187h4.253c-.023.316-.023.631-.07.947a4.983 4.983 0 01-.958 2.29c-.841 1.11-1.94 1.8-3.33 1.986-1.145.152-2.209-.07-3.143-.77-.865-.655-1.356-1.52-1.484-2.595-.152-1.274.222-2.419.993-3.424.83-1.086 1.928-1.776 3.272-2.02 1.098-.2 2.15-.07 3.096.571.62.41 1.063.97 1.356 1.648.07.105.023.164-.117.2m3.868 6.461c-1.064-.024-2.034-.328-2.852-1.029a3.665 3.665 0 01-1.262-2.255c-.21-1.32.152-2.489.947-3.529.853-1.122 1.881-1.706 3.272-1.95 1.192-.21 2.314-.095 3.33.595.923.63 1.496 1.484 1.648 2.605.198 1.578-.257 2.863-1.344 3.962-.771.783-1.718 1.273-2.805 1.495-.315.06-.63.07-.934.106zm2.78-4.72c-.011-.153-.011-.27-.034-.387-.21-1.157-1.274-1.81-2.384-1.554-1.087.245-1.788.935-2.045 2.033-.21.912.234 1.835 1.075 2.21.643.28 1.285.244 1.905-.07.923-.48 1.425-1.228 1.484-2.233z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "type"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " MyProp"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " struct"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    Name "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "string"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ' `json:"name"`'
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "}"
            })
          }), `
`, _jsx(_components.span, {
            className: "line"
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "var"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " prop "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "MyProp"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "bytes, _ "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " json."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Marshal"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "&"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "prop)"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "cmd."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "SetPropertyFromJSONBytes"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"property_name"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", bytes)"
            })]
          })]
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "type-schemas-and-validation",
      children: "Type schemas and validation"
    }), `
`, _jsx(_components.p, {
      children: "The TEN framework determines property types through two methods: explicit schema definitions or automatic inference from initial values."
    }), `
`, _jsx(_components.h3, {
      id: "schema-defined-types",
      children: "Schema-defined types"
    }), `
`, _jsx(_components.p, {
      children: "When you specify a TEN schema in your manifest file, the framework uses the schema to determine property types and validate values:"
    }), `
`, _jsx(_Fragment, {
      children: _jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "{"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: ' "api"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '   "property"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '     "timeout"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '       "type"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"`int32`"'
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "     },"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '     "enabled"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '       "type"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"bool"'
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "     }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "   }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "}"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "Schema-defined types provide strict validation and ensure type safety across extension boundaries."
    }), `
`, _jsx(_components.h3, {
      id: "inferred-types",
      children: "Inferred types"
    }), `
`, _jsx(_components.p, {
      children: "When a TEN schema is not specified, the framework infers property types from initial value assignments:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Direct assignment"
        }), ": If you assign an ", _jsx(_components.code, {
          children: "int32_t"
        }), " value, the property becomes ", _jsx(_components.code, {
          children: "int32_t"
        })]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "JSON assignment"
        }), ": Types follow JSON processing rules; numbers default to ", _jsx(_components.code, {
          children: "int64"
        }), " for integers, ", _jsx(_components.code, {
          children: "float64"
        }), " for floating-point."]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "type-validation",
      children: "Type validation"
    }), `
`, _jsx(_components.p, {
      children: "The framework validates types when:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Loading ", _jsx(_components.code, {
          children: "property.json"
        }), " files"]
      }), `
`, _jsxs(_components.li, {
        children: ["Calling methods like ", _jsx(_components.code, {
          children: "set_property_from_json()"
        })]
      }), `
`, _jsx(_components.li, {
        children: "Sending messages with typed properties"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "The following table summarizes the validation behavior:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Schema defined"
          }), _jsx(_components.th, {
            children: "Validation behavior"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), _jsx(_components.td, {
            children: "Strict type checking against schema definition"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          }), _jsx(_components.td, {
            children: "Type inferred from first assignment, flexible thereafter"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "type-conversion-rules",
      children: "Type conversion rules"
    }), `
`, _jsx(_components.p, {
      children: "The TEN framework supports automatic type conversion between compatible types, but only when the conversion preserves data integrity."
    }), `
`, _jsx(_components.h3, {
      id: "safe-conversions",
      children: "Safe conversions"
    }), `
`, _jsx(_components.p, {
      children: "Safe conversions move from lower to higher precision types and never lose data. The framework performs these conversions automatically:"
    }), `
`, _jsx(_components.h4, {
      id: "integer-promotions",
      children: "Integer promotions"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "From"
          }), _jsx(_components.th, {
            children: "To (Allowed)"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "int8"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "int16"
            }), " / ", _jsx(_components.code, {
              children: "int32"
            }), " / ", _jsx(_components.code, {
              children: "int64"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "int16"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "int32"
            }), " / ", _jsx(_components.code, {
              children: "int64"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "int32"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "int64"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "uint8"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "uint16"
            }), " / ", _jsx(_components.code, {
              children: "uint32"
            }), " / ", _jsx(_components.code, {
              children: "uint64"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "uint16"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "uint32"
            }), " / ", _jsx(_components.code, {
              children: "uint64"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "uint32"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "uint64"
            })
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "floating-point-promotions",
      children: "Floating-point promotions"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "From"
          }), _jsx(_components.th, {
            children: "To (Allowed)"
          })]
        })
      }), _jsx(_components.tbody, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "float32"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "float64"
            })
          })]
        })
      })]
    }), `
`, _jsx(_components.p, {
      children: "Example of safe conversion:"
    }), `
`, _jsx(_Fragment, {
      children: _jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// Set property value. "
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// The type of `property_name` in TEN Runtime is `int32`."
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "cmd."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "set_property"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"property_name"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "100"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ");"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " "
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// Get property value. Correct."
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "int32_t"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " value "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " cmd."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "get_property_int32"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"property_name"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ");"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " "
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// Get property value. Correct. "
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// TEN Type System automatically converts the type to `int64`."
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "int64_t"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " value2 "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " cmd."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "get_property_int64"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"property_name"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ");"
            })]
          })]
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "unsafe-conversions",
      children: "Unsafe conversions"
    }), `
`, _jsx(_components.p, {
      children: "Unsafe conversions move from higher to lower precision types and may lose data. The framework checks for overflow and throws an error when data loss would occur. The TEN runtime performs unsafe conversions only when deserializing JSON documents into TEN properties that have defined TEN schemas:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsxs(_components.strong, {
            children: ["Loading ", _jsx(_components.code, {
              children: "property.json"
            }), " files"]
          }), _jsx(_components.br, {}), `
`, "Integers are parsed as ", _jsx(_components.code, {
            children: "int64"
          }), " by default and floating-point numbers as ", _jsx(_components.code, {
            children: "float64"
          }), " by default. The framework applies unsafe conversion rules to match the target schema types."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsxs(_components.strong, {
            children: ["Calling ", _jsx(_components.code, {
              children: "set_property_from_json()"
            }), " methods"]
          }), _jsx(_components.br, {}), `
`, "When passing serialized JSON strings, the framework performs unsafe conversion according to the defined schema requirements."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "unsafe-conversion-scenarios",
      children: "Unsafe conversion scenarios"
    }), `
`, _jsx(_components.p, {
      children: "In the TEN framework type system, unsafe conversion rules are as follows:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Converting ", _jsx(_components.code, {
          children: "int64"
        }), " to lower precision ", _jsx(_components.code, {
          children: "int"
        }), " types"]
      }), `
`, _jsxs(_components.li, {
        children: ["Converting ", _jsx(_components.code, {
          children: "int64"
        }), " to any ", _jsx(_components.code, {
          children: "uint"
        }), " type"]
      }), `
`, _jsxs(_components.li, {
        children: ["Converting ", _jsx(_components.code, {
          children: "float64"
        }), " to ", _jsx(_components.code, {
          children: "float32"
        })]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "Example of unsafe conversion error:"
    }), `
`, _jsx(_Fragment, {
      children: _jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// Get property value. Incorrect use, an error is thrown."
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "int16_t"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " error_type "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " cmd."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "get_property_int16"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"property_name"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ");"
            })]
          })]
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "Unsafe conversions succeed only when the source value fits within the target type's range:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "From"
          }), _jsx(_components.th, {
            children: "To"
          }), _jsx(_components.th, {
            children: "Valid value range"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "int64"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "int8"
            })
          }), _jsx(_components.td, {
            children: "[-2^7, 2^7 - 1]"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "int64"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "int16"
            })
          }), _jsx(_components.td, {
            children: "[-2^15, 2^15 - 1]"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "int64"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "int32"
            })
          }), _jsx(_components.td, {
            children: "[-2^31, 2^31 - 1]"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "int64"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "uint8"
            })
          }), _jsx(_components.td, {
            children: "[0, 2^7 - 1]"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "int64"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "uint16"
            })
          }), _jsx(_components.td, {
            children: "[0, 2^15 - 1]"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "int64"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "uint32"
            })
          }), _jsx(_components.td, {
            children: "[0, 2^31 - 1]"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "int64"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "uint64"
            })
          }), _jsx(_components.td, {
            children: "[0, 2^63 - 1]"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "float64"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "float32"
            })
          }), _jsx(_components.td, {
            children: "[-3.4028234663852886e+38, 3.4028234663852886e+38]"
          })]
        })]
      })]
    })]
  });
}
export default function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? _jsx(MDXLayout, {
    ...props,
    children: _jsx(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
