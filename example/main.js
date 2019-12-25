
class Header extends Ignite.Div {
  // Prepare constructor
  constructor(args) {
    // Create div
    super(args);
    // Append child
    this.items = "header here";
    // Add className
    this.props.className = "classhere";
    // Id
    this.props.id = "gg";
  }
  // After node render
  didMount() {
    // Attach data-like="true" to the node
    this.node.dataset.like = "true";
  }
  onClick() {
    this.items = "clicked";
    this.render();
  }
}

class App extends Ignite.Element {
  constructor(args) {
    super(args);
    this.items = [
      new Header({}),
      "hello",
      new Ignite.Br(),
      new Ignite.Input({props: {type: "text", value: "here here"}}),
    ];
  }
}

var app = new App();
app.render(document.body);
