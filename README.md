## Zazu Application

### Diagram

![Diagram](http://yuml.me/diagram/class/
  [Background.js]->[View],
  [Background.js]->[Configuration.js],
  [Background.js]<->[GlobalEmitter],
  [View]->[Configuration.js],
  [View]<->[PluginStore.js],
  [View]<->[GlobalEmitter],
  [PluginStore.js]->[Configuration.js],
  [PluginStore.js]<->[GlobalEmitter],
  [PluginStore.js]->[Plugins［］],
  [Plugins［］]->[Blocks［］],
)
