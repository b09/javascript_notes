<details>
<summary>
Families of Musical Instruments
</summary>
<br />

<details>
<summary>
~/public/ **index.html**
</summary>

```html

```
<br />
</details>

<details>
<summary>
~/src/helpers/ **text_format.js**
</summary>

```js

```
<br />
</details>

<details>
<summary>
~/src/models
</summary>
<br />

<details>
<summary>
**person.js**
</summary>

```js

```
<br />
</details>

<details>
<summary>
**random_adjective.js**
</summary>

```js

```
<br />
</details>

<br />
</details>

<details>
<summary>
~/src/ **app.js**
</summary>

```js

```
<br />
</details>

<br />
</details>






<details>
<summary>
Teas & Biscuits - Express Rest API
</summary>
<br />

<details>
<summary>
~/client/public/ **index.html**
</summary>

```html


```
<br />
</details>

<details>
<summary>
~/client/src/models/ **consumables.js**
</summary>

```js



```
<br />
</details>

<details>
<summary>
~/client/src/helpers
</summary>
<br />

<details>
<summary>
**pub_sub.js**
</summary>

```js

const PubSub = {
  publish: function (channel, payload) {
    const event = new CustomEvent(channel, {
      detail: payload
    });
    document.dispatchEvent(event);
  },

  subscribe: function (channel, callback) {
    document.addEventListener(channel, callback);
  }
};

module.exports = PubSub;

```
<br />
</details>

<details>
<summary>
**request.js**
</summary>

```js

const Request = function (url) {
  this.url = url;
};

Request.prototype.get = function () {
  return fetch(this.url)
    .then((response) => response.json());
};

Request.prototype.post = function (payload) {
  return fetch(this.url, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json());
};

module.exports = Request;

```
<br />
</details>

<br />
</details>

<details>
<summary>
~/client/src/views
</summary>
<br />

<details>
<summary>
**form_view.js**
</summary>

```js



```
<br />
</details>

<details>
<summary>
**list_view.js**
</summary>

```js



```
<br />
</details>

<br />
</details>


<details>
<summary>
~/client/src/ **app.js**
</summary>

```js



```
<br />
</details>

<details>
<summary>
~/server
</summary>
<br />

<details>
<summary>
**server.js**
</summary>

```js


```
<br />
</details>

<details>
<summary>
/routers/ **biscuits_router.js**
</summary>

```js



```
<br />
</details>

<details>
<summary>
/routers/ **index_router.js**
</summary>

```js


```
<br />
</details>

<details>
<summary>
/routers/ **teas_router.js**
</summary>

```js


```
<br />
</details>

<br />
</details>

<br />
</details>




<details>
<summary>
Gif
</summary>
<br />

<img src = ""></img>
</details>
