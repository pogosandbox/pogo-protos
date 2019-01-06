# node-pogo-protos
Uses [protobuf.js](https://github.com/dcodeIO/protobuf.js) to compile the Protobuf files from
[POGOProtos](https://github.com/AeonLucid/POGOProtos) into an easy to use Node module.

[![npm version](https://badge.fury.io/js/pogo-protos.svg)](https://badge.fury.io/js/pogo-protos)
![npm downloads](https://img.shields.io/npm/dt/pogo-protos.svg)
![dependencies](https://david-dm.org/pogosandbox/pogo-protos.svg)
![license](https://img.shields.io/npm/l/pogo-protos.svg)
![build](https://travis-ci.org/pogosandbox/pogo-protos.svg?branch=master)


## How to use
```javascript
const POGOProtos = require('pogo-protos');

var myMessage = POGOProtos.Networking.Requests.Messages.RecycleInventoryItemMessage.fromObject({
  item_id: POGOProtos.Inventory.Item.ItemId.ITEM_POTION,
  count: 50
});

var encoded = POGOProtos.Networking.Requests.Messages.RecycleInventoryItemMessage.encode(myMessage).finish();

var decodedAgain = POGOProtos.Networking.Requests.Messages.RecycleInventoryItemMessage.decode(encoded);
console.log(decodedAgain.count); // will print 50
```

For more details see the [protobuf.js documentation](https://github.com/dcodeIO/protobuf.js/wiki).

## Usage with TypeScript
TypeScript definitions are included. Modern IDE should use them automatically.
