# Igniter 0.2.1
Ignite your pages! Igniter is a *frontend* JS engine with zero-cost abstraction.
It helps you to build and manage DOM in an object-oriented programming style.

## Use

Igniter consists of two parts: core and elements. Core provides simple classes like Ignite.Element and Ignite.Bind. 
Elements part adds 144 basic HTML elements.
```html
<script src="https://cdn.jsdelivr.net/gh/nicoth-in/igniter@0.2.1/src/core.dist.js"></script>
<script src="https://cdn.jsdelivr.net/gh/nicoth-in/igniter@0.2.1/src/elements.dist.js"></script>
```

## First steps

Let’s build our first app. This is the minimal solution on classes:
```js
class MyFirstApp extends Ignite.Element {
  constructor(...args) {
    super(...args);
  }
}

let app = new MyFirstApp();
```
Now run this code. You should see nothing. Why? Actually, because we need to render our app first. Add this line at the end:
```js
app.render(document.body);
```
This code will render our app into the body, but we still get an empty page. That is because we render an empty container without any content in it. So, let’s change it.
```js
let app = new MyFirstApp("Some text");
```
Yeah, now you should see "Some text" in your body container. However, we don’t want just text. Firstly, make sure you import **elements.js** lib. If so, change the first line of the code:
```js
class MyFirstApp extends Ignite.Div {
```
This actually renders your class in div container instead of empty. Now you can also change the properties of this container:
```js
let app = new MyFirstApp("Some text", {
  id: "app",
  title: "App div"
});
```
That will be rendered into this:
```html
<div id="app" title="App div">Some text</div>
```
## Building more complicated apps

First, let’s make the code more simple.
```js
let { Div, P } = Ignite;

class MyFirstApp extends Div {
  constructor(...args) {
    super(...args);
  }
}

let app = new MyFirstApp("Some text", {
  id: "app",
  title: "App div"
});

app.render(document.body);
```
So, we import Div and P. Now we can write element class without Ignite prefix. 
Now, we change "Some text":
```js
let app = new MyFirstApp(new P("Some text"), {
  id: "app",
  title: "App div"
});
```
And you will see
```html
<div id="app" title="App div">
  <p>Some text</p>
</div>
```
Ok, but don’t you think that our class is too simple? Why do we even need to have it? Actually, we don’t.
```js
let { Div, P } = Ignite;

let app = new Div(new P("Some text"), { id: "app", title: "App div" });

app.render(document.body);
```
You can choose your code style: using extend classes or default ones. You also can use add and prop methods in method chaining (named parameter idiom).

```js
let { Div, P } = Ignite;

let app = new Div()
  .add(new P("Some text"))
  .prop("id", "app")
  .prop("title", "App div")
  .render(document.body);
```
The result will be the same.

However, using classes can help you to structure your code and create custom elements with needed behavior. 

## Events

Using events is simple:
```js
class MyFirstApp extends Div {
  constructor(...args) {
    super(...args);
  }
  onClick(e) {
    console.log(e);
  }
}
```
Note, that naming is strict. Following the naming convention, all method names should be in lowerCamelCase. 

Ignite element also provides a few methods: willMount, didMount and instanceCreated.

Method willMount is auto-linked on “willmount” event. This event dispatches before every rendering process. Similar, didMount (“didmount” event) is called after rendering.
Every node binding, method instanceCreated (“newinstancecreated” event) is called.

So, you can access events through methods, or by adding a listener to the node.

## Binding

You can create a class on top of the existing node:
```js
let body_element = new Ignite.Bind(document.body);
```
or create custom:

```js
class SomeClass extends Ignite.Bind {
  constructor(...args) {
    super(...args);
  }
}
```
## Deep in

Igniter is a zero-cost abstraction engine, because it is based directly on DOM API. 
Every Element class contains properties, items (children) and node. After the render method called, Ignite generates a new node, attaches properties and children (also render them if needed). Render method starts with transform: empty container transforms in node. Then plainRender (renderer) called ant it makes all other jobs.
