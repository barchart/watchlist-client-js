## Contents {docsify-ignore}

* [WatchlistGateway](#WatchlistGateway) 

* [Callbacks](#Callbacks) 

* [Enums](#Enums) 


* * *

## WatchlistGateway :id=watchlistgateway
> The <strong>central component of the SDK</strong>. It is responsible for connecting to Barchart's
> Watchlist Service. It can be used to query, edit, and delete watchlists.

**Kind**: global class  
**Extends**: <code>Disposable</code>  
**Access**: public  
**Import**: @barchart/watchlist-client-js/lib/gateway/WatchlistGateway  
**File**: /lib/gateway/WatchlistGateway.js  

* [WatchlistGateway](#WatchlistGateway) ⇐ <code>Disposable</code>
    * _instance_
        * [.environment](#WatchlistGatewayenvironment) ⇒ <code>String</code>
        * [.connect(jwtProvider)](#WatchlistGatewayconnect) ⇒ [<code>Promise.&lt;WatchlistGateway&gt;</code>](#WatchlistGateway)
        * [.readWatchlists([meta])](#WatchlistGatewayreadWatchlists) ⇒ [<code>Promise.&lt;Array.&lt;Schema.Watchlist&gt;&gt;</code>](/content/sdk/lib-data?id=schemawatchlist)
        * [.readWatchlist(id, [meta])](#WatchlistGatewayreadWatchlist) ⇒ [<code>Promise.&lt;Array.&lt;Schema.Watchlist&gt;&gt;</code>](/content/sdk/lib-data?id=schemawatchlist)
        * [.subscribeWatchlists(messageCallback, statusCallback, [echo])](#WatchlistGatewaysubscribeWatchlists) ⇒ <code>Promise</code>
        * [.createWatchlist(watchlist)](#WatchlistGatewaycreateWatchlist) ⇒ [<code>Promise.&lt;Schema.Watchlist&gt;</code>](/content/sdk/lib-data?id=schemawatchlist)
        * [.editWatchlist(watchlist)](#WatchlistGatewayeditWatchlist) ⇒ [<code>Promise.&lt;Schema.Watchlist&gt;</code>](/content/sdk/lib-data?id=schemawatchlist)
        * [.deleteWatchlist(id)](#WatchlistGatewaydeleteWatchlist) ⇒ <code>Promise.&lt;Object&gt;</code>
        * [.editPreferences(id, preferences)](#WatchlistGatewayeditPreferences) ⇒ [<code>Promise.&lt;Schema.Watchlist&gt;</code>](/content/sdk/lib-data?id=schemawatchlist)
        * [.addSymbol(id, entry, [index])](#WatchlistGatewayaddSymbol) ⇒ [<code>Promise.&lt;Schema.Watchlist&gt;</code>](/content/sdk/lib-data?id=schemawatchlist)
        * [.deleteSymbol(id, symbol)](#WatchlistGatewaydeleteSymbol) ⇒ [<code>Promise.&lt;Schema.Watchlist&gt;</code>](/content/sdk/lib-data?id=schemawatchlist)
        * [.querySymbol(symbol)](#WatchlistGatewayquerySymbol) ⇒ [<code>Promise.&lt;Array.&lt;Schema.WatchlistSymbolQueryResult&gt;&gt;</code>](/content/sdk/lib-data?id=schemawatchlistsymbolqueryresult)
        * [.readServiceMetadata()](#WatchlistGatewayreadServiceMetadata) ⇒ [<code>Promise.&lt;Schema.WatchlistServiceMetadata&gt;</code>](/content/sdk/lib-data?id=schemawatchlistservicemetadata)
        * [.registerAuthorizationObserver(authorizationObserver)](#WatchlistGatewayregisterAuthorizationObserver) ⇒ <code>Disposable</code>
    * _static_
        * [.forTest(jwtProvider)](#WatchlistGatewayforTest) ⇒ [<code>Promise.&lt;WatchlistGateway&gt;</code>](#WatchlistGateway)
        * [.forDevelopment(jwtProvider)](#WatchlistGatewayforDevelopment) ⇒ [<code>Promise.&lt;WatchlistGateway&gt;</code>](#WatchlistGateway)
        * [.forStaging(jwtProvider)](#WatchlistGatewayforStaging) ⇒ [<code>Promise.&lt;WatchlistGateway&gt;</code>](#WatchlistGateway)
        * [.forDemo(jwtProvider)](#WatchlistGatewayforDemo) ⇒ [<code>Promise.&lt;WatchlistGateway&gt;</code>](#WatchlistGateway)
        * [.forAdmin(jwtProvider)](#WatchlistGatewayforAdmin) ⇒ [<code>Promise.&lt;WatchlistGateway&gt;</code>](#WatchlistGateway)
        * [.forProduction(jwtProvider)](#WatchlistGatewayforProduction) ⇒ [<code>Promise.&lt;WatchlistGateway&gt;</code>](#WatchlistGateway)
    * _constructor_
        * [new WatchlistGateway(protocol, host, port, environment, [webSocketProtocol], [webSocketHost])](#new_WatchlistGateway_new)


* * *

### watchlistGateway.environment :id=watchlistgatewayenvironment
> A description of the environment (e.g. development, production, etc).

**Kind**: instance property of [<code>WatchlistGateway</code>](#WatchlistGateway)  
**Returns**: <code>String</code>  
**Access**: public  

* * *

### watchlistGateway.connect(jwtProvider) :id=watchlistgatewayconnect
> Attempts to establish a connection to the backend. This function should be invoked
> immediately following instantiation. Once the resulting promise resolves, a
> connection has been established and other instance methods can be used.

**Kind**: instance method of [<code>WatchlistGateway</code>](#WatchlistGateway)  
**Returns**: [<code>Promise.&lt;WatchlistGateway&gt;</code>](#WatchlistGateway)  
**Access**: public  

| Param | Type |
| --- | --- |
| jwtProvider | [<code>JwtProvider</code>](/content/sdk/lib-security?id=jwtprovider) | 


* * *

### watchlistGateway.readWatchlists([meta]) :id=watchlistgatewayreadwatchlists
> Retrieves all watchlists for the current user.

**Kind**: instance method of [<code>WatchlistGateway</code>](#WatchlistGateway)  
**Returns**: [<code>Promise.&lt;Array.&lt;Schema.Watchlist&gt;&gt;</code>](/content/sdk/lib-data?id=schemawatchlist)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| [meta] | <code>Boolean</code> | <p>If true, only watchlist metadata will be returned (i.e. no &quot;entries&quot; will be included).</p> |


* * *

### watchlistGateway.readWatchlist(id, [meta]) :id=watchlistgatewayreadwatchlist
> Retrieves a single watchlist for the current user. The resulting array will
> contain zero or one item(s).

**Kind**: instance method of [<code>WatchlistGateway</code>](#WatchlistGateway)  
**Returns**: [<code>Promise.&lt;Array.&lt;Schema.Watchlist&gt;&gt;</code>](/content/sdk/lib-data?id=schemawatchlist)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>String</code> | <p>The identifier of the watchlist to read.</p> |
| [meta] | <code>Boolean</code> | <p>If true, only watchlist metadata will be returned (i.e. no &quot;entries&quot; will be included).</p> |


* * *

### watchlistGateway.subscribeWatchlists(messageCallback, statusCallback, [echo]) :id=watchlistgatewaysubscribewatchlists
> Subscribes to changes in the current user's watchlists. Only one subscription
> is supported. Invoking this function more than once will fail. At present, a
> subscription requires native WebSocket support (in a browser). This will be
> enhanced to work in Node.js environments soon.

**Kind**: instance method of [<code>WatchlistGateway</code>](#WatchlistGateway)  
**Returns**: <code>Promise</code>  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| messageCallback | [<code>SubscriptionMessageCallback</code>](#CallbacksSubscriptionMessageCallback) | <p>Invoked when a watchlist is added, changed, or removed.</p> |
| statusCallback | [<code>SubscriptionStatusCallback</code>](#CallbacksSubscriptionStatusCallback) | <p>Invoked when the state of the subscription changes.</p> |
| [echo] | <code>Boolean</code> | <p>If true, changes made by this instance will cause the <code>messageCallback</code> to be invoked.</p> |


* * *

### watchlistGateway.createWatchlist(watchlist) :id=watchlistgatewaycreatewatchlist
> Saves a new watchlist.

**Kind**: instance method of [<code>WatchlistGateway</code>](#WatchlistGateway)  
**Returns**: [<code>Promise.&lt;Schema.Watchlist&gt;</code>](/content/sdk/lib-data?id=schemawatchlist)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| watchlist | [<code>Schema.Watchlist</code>](/content/sdk/lib-data?id=schemawatchlist) | <p>The watchlist to save.</p> |


* * *

### watchlistGateway.editWatchlist(watchlist) :id=watchlistgatewayeditwatchlist
> Saves an existing watchlist.

**Kind**: instance method of [<code>WatchlistGateway</code>](#WatchlistGateway)  
**Returns**: [<code>Promise.&lt;Schema.Watchlist&gt;</code>](/content/sdk/lib-data?id=schemawatchlist)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| watchlist | [<code>Schema.Watchlist</code>](/content/sdk/lib-data?id=schemawatchlist) | <p>The watchlist to save.</p> |


* * *

### watchlistGateway.deleteWatchlist(id) :id=watchlistgatewaydeletewatchlist
> Deletes an existing watchlist.

**Kind**: instance method of [<code>WatchlistGateway</code>](#WatchlistGateway)  
**Returns**: <code>Promise.&lt;Object&gt;</code>  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>String</code> | <p>The identifier of the watchlist to delete.</p> |


* * *

### watchlistGateway.editPreferences(id, preferences) :id=watchlistgatewayeditpreferences
> Saves an existing watchlist - overwriting its <code>preferences</code> property.

**Kind**: instance method of [<code>WatchlistGateway</code>](#WatchlistGateway)  
**Returns**: [<code>Promise.&lt;Schema.Watchlist&gt;</code>](/content/sdk/lib-data?id=schemawatchlist)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>String</code> | <p>The identifier of the watchlist to edit.</p> |
| preferences | [<code>Schema.WatchlistPreferences</code>](/content/sdk/lib-data?id=schemawatchlistpreferences) | <p>The preferences object to save.</p> |


* * *

### watchlistGateway.addSymbol(id, entry, [index]) :id=watchlistgatewayaddsymbol
> Adds a new entry (i.e. symbol) to an existing watchlist.

**Kind**: instance method of [<code>WatchlistGateway</code>](#WatchlistGateway)  
**Returns**: [<code>Promise.&lt;Schema.Watchlist&gt;</code>](/content/sdk/lib-data?id=schemawatchlist)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>String</code> | <p>The identifier of the watchlist to edit.</p> |
| entry | [<code>Schema.WatchlistEntry</code>](/content/sdk/lib-data?id=schemawatchlistentry) | <p>The entry to add.</p> |
| [index] | <code>Number</code> | <p>The index to insert the entry (if absent, the entry will be placed at the end of the list).</p> |


* * *

### watchlistGateway.deleteSymbol(id, symbol) :id=watchlistgatewaydeletesymbol
> Deletes an existing entry (i.e. symbol) from an existing watchlist.

**Kind**: instance method of [<code>WatchlistGateway</code>](#WatchlistGateway)  
**Returns**: [<code>Promise.&lt;Schema.Watchlist&gt;</code>](/content/sdk/lib-data?id=schemawatchlist)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>String</code> | <p>The identifier of the watchlist to edit.</p> |
| symbol | <code>String</code> | <p>The symbol to remove.</p> |


* * *

### watchlistGateway.querySymbol(symbol) :id=watchlistgatewayquerysymbol
> Queries existing watchlists for a specific symbol.

**Kind**: instance method of [<code>WatchlistGateway</code>](#WatchlistGateway)  
**Returns**: [<code>Promise.&lt;Array.&lt;Schema.WatchlistSymbolQueryResult&gt;&gt;</code>](/content/sdk/lib-data?id=schemawatchlistsymbolqueryresult)  
**Access**: public  

| Param | Type |
| --- | --- |
| symbol | <code>String</code> | 


* * *

### watchlistGateway.readServiceMetadata() :id=watchlistgatewayreadservicemetadata
> Retrieves information regarding the remote service (e.g. version number, current user identifier, etc).

**Kind**: instance method of [<code>WatchlistGateway</code>](#WatchlistGateway)  
**Returns**: [<code>Promise.&lt;Schema.WatchlistServiceMetadata&gt;</code>](/content/sdk/lib-data?id=schemawatchlistservicemetadata)  
**Access**: public  

* * *

### watchlistGateway.registerAuthorizationObserver(authorizationObserver) :id=watchlistgatewayregisterauthorizationobserver
> Registers a callback which will be notified when an authorization event occurs.

**Kind**: instance method of [<code>WatchlistGateway</code>](#WatchlistGateway)  
**Returns**: <code>Disposable</code>  
**Access**: public  

| Param | Type |
| --- | --- |
| authorizationObserver | <code>function</code> | 


* * *

### WatchlistGateway.forTest(jwtProvider) :id=watchlistgatewayfortest
> Creates and starts a new [WatchlistGateway](/content/sdk/lib-gateway?id=watchlistgateway) for use in the public test environment.

**Kind**: static method of [<code>WatchlistGateway</code>](#WatchlistGateway)  
**Returns**: [<code>Promise.&lt;WatchlistGateway&gt;</code>](#WatchlistGateway)  
**Access**: public  

| Param | Type |
| --- | --- |
| jwtProvider | [<code>JwtProvider</code>](/content/sdk/lib-security?id=jwtprovider) | 


* * *

### WatchlistGateway.forDevelopment(jwtProvider) :id=watchlistgatewayfordevelopment
> Creates and starts a new [WatchlistGateway](/content/sdk/lib-gateway?id=watchlistgateway) for use in the private development environment.

**Kind**: static method of [<code>WatchlistGateway</code>](#WatchlistGateway)  
**Returns**: [<code>Promise.&lt;WatchlistGateway&gt;</code>](#WatchlistGateway)  
**Access**: public  

| Param | Type |
| --- | --- |
| jwtProvider | [<code>JwtProvider</code>](/content/sdk/lib-security?id=jwtprovider) | 


* * *

### WatchlistGateway.forStaging(jwtProvider) :id=watchlistgatewayforstaging
> Creates and starts a new [WatchlistGateway](/content/sdk/lib-gateway?id=watchlistgateway) for use in the private staging environment.

**Kind**: static method of [<code>WatchlistGateway</code>](#WatchlistGateway)  
**Returns**: [<code>Promise.&lt;WatchlistGateway&gt;</code>](#WatchlistGateway)  
**Access**: public  

| Param | Type |
| --- | --- |
| jwtProvider | [<code>JwtProvider</code>](/content/sdk/lib-security?id=jwtprovider) | 


* * *

### WatchlistGateway.forDemo(jwtProvider) :id=watchlistgatewayfordemo
> Creates and starts a new [WatchlistGateway](/content/sdk/lib-gateway?id=watchlistgateway) for use in the private demo environment.

**Kind**: static method of [<code>WatchlistGateway</code>](#WatchlistGateway)  
**Returns**: [<code>Promise.&lt;WatchlistGateway&gt;</code>](#WatchlistGateway)  
**Access**: public  

| Param | Type |
| --- | --- |
| jwtProvider | [<code>JwtProvider</code>](/content/sdk/lib-security?id=jwtprovider) | 


* * *

### WatchlistGateway.forAdmin(jwtProvider) :id=watchlistgatewayforadmin
> Creates and starts a new [WatchlistGateway](/content/sdk/lib-gateway?id=watchlistgateway) for use in the private admin environment.

**Kind**: static method of [<code>WatchlistGateway</code>](#WatchlistGateway)  
**Returns**: [<code>Promise.&lt;WatchlistGateway&gt;</code>](#WatchlistGateway)  
**Access**: public  

| Param | Type |
| --- | --- |
| jwtProvider | [<code>JwtProvider</code>](/content/sdk/lib-security?id=jwtprovider) | 


* * *

### WatchlistGateway.forProduction(jwtProvider) :id=watchlistgatewayforproduction
> Creates and starts a new [WatchlistGateway](/content/sdk/lib-gateway?id=watchlistgateway) for use in the public production environment.

**Kind**: static method of [<code>WatchlistGateway</code>](#WatchlistGateway)  
**Returns**: [<code>Promise.&lt;WatchlistGateway&gt;</code>](#WatchlistGateway)  
**Access**: public  

| Param | Type |
| --- | --- |
| jwtProvider | [<code>JwtProvider</code>](/content/sdk/lib-security?id=jwtprovider) | 


* * *

### new WatchlistGateway(protocol, host, port, environment, [webSocketProtocol], [webSocketHost]) :id=new_watchlistgateway_new
**Kind**: constructor of [<code>WatchlistGateway</code>](#WatchlistGateway)  

| Param | Type | Description |
| --- | --- | --- |
| protocol | <code>String</code> | <p>The protocol of the Watchlist web service (either http or https).</p> |
| host | <code>String</code> | <p>The hostname of the Watchlist web service.</p> |
| port | <code>Number</code> | <p>The TCP port number of the Watchlist web service.</p> |
| environment | <code>String</code> | <p>A description of the environment we're connecting to.</p> |
| [webSocketProtocol] | <code>String</code> | <p>The protocol of the Watchlist subscription service (either ws or wss).</p> |
| [webSocketHost] | <code>String</code> | <p>The hostname of the Watchlist subscription service.</p> |


* * *

## Callbacks :id=callbacks
> A meta namespace containing signatures of anonymous functions.

**Kind**: global namespace  

* [Callbacks](#Callbacks) : <code>object</code>
    * _static_
        * [.SubscriptionMessageCallback](#CallbacksSubscriptionMessageCallback) : <code>function</code>
        * [.SubscriptionStatusCallback](#CallbacksSubscriptionStatusCallback) : <code>function</code>


* * *

### Callbacks.SubscriptionMessageCallback :id=callbackssubscriptionmessagecallback
> The function signature for a callback which is invoked when watchlists change.

**Kind**: static typedef of [<code>Callbacks</code>](#Callbacks)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | <p>The data received.</p> |


* * *

### Callbacks.SubscriptionStatusCallback :id=callbackssubscriptionstatuscallback
> The function signature for a callback that is invoked when subscription
> status changes.

**Kind**: static typedef of [<code>Callbacks</code>](#Callbacks)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| status | [<code>SubscriptionStatus</code>](#EnumsSubscriptionStatus) | <p>The current status.</p> |


* * *

## Enums :id=enums
> A namespace for enumerations.

**Kind**: global namespace  

* * *

### Enums.SubscriptionStatus :id=enumssubscriptionstatus
> The mutually-exclusive states for a Subscription.

**Kind**: static enum of [<code>Enums</code>](#Enums)  
**Properties**

| Name | Description |
| --- | --- |
| IDLE | <p>The subscription has not been initialized.</p> |
| DISCONNECTED | <p>No subscription is initialized (but inactive).</p> |
| CONNECTING | <p>The subscription is attempting to activate.</p> |
| CONNECTED | <p>The subscription is active.</p> |


* * *

