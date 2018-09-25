# core.plugin.monitor

monitor app activity.

this plugin provides a `core.monitor()` function, which only emits a 'core.monitor' event.

the first argument to `core.monitor` is a type, which can be any string you want. the second argument is a data object. the emited event is an object with a 'type' property and a 'data' property.


```js
let core = new require('core.constructor')();

core.plugin([
  require('core.plugin.emitter'),
  require('core.plugin.monitor')
]);

core.on('core.monitor', (e) => {
     console.log(e);
})


core.monitor('test', { a: 5 });  // logs  { type: 'test', data: { a: 5 } }
```
