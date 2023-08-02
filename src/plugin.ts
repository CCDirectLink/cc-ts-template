export default class PluginClass {
  constructor() {
    console.log('Hello from PluginClass#constructor');
  }
  preload() {
    console.log('Hello from PluginClass#preload');
  }
  postload() {
    console.log('Hello from PluginClass#postload');
  }
  prestart() {
    console.log('Hello from PluginClass#prestart');
  }
  poststart() {
    console.log('Hello from PluginClass#poststart');
  }
}
