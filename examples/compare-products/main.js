
const { Div, Img, Span, B, Table, Th, Tr, Td, Tbody, Thead } = Igniter;

class Product extends Div {
  constructor(opt) {

    super({
      attr: { class: "col product" },
      items: [
        new Img({
          attr: { src: opt.img, alt: opt.name }
        }),
        new Div({
          attr: { class: "col stats" },
          items: [
            new Span({
              attr: { class: "name" },
              items: [
                new Text(opt.name),
                new B({
                  attr: { class: "price" },
                  items: new Text("$" + opt.price)
                })
              ]
            }),
            new Span({
              attr: { class: "description" },
              items: new Text(opt.description)
            }),
          ]
        })
      ]
    });

    this.p_name = opt.name;

    this.onClick = this.onClick.bind(this);
    this.addEventListener("click", this.onClick);
  }
  onClick() {
    let to_compare = this.sharedStorage.get("compare") || [];
    let start_len = to_compare.length;

    to_compare = to_compare.filter(product => product != this.p_name);

    if(start_len == to_compare.length) to_compare.push(this.p_name);

    this.sharedStorage.set("compare", to_compare);
  }
}

class ProductPlace extends Div {
  constructor() {
    super({
      custom: "product-place",
      attr: { class: "row" },
    });

    let url = this.getAttribute("from");
    if(url) this.getProducts(url);
  }
  async getProducts(url) {
    let response = await fetch(url, {mode: 'no-cors'});
    let data = await response.json();
    let storage_products = {};

    for (let product of data.products) {
      this.appendChild(new Product(product));
      storage_products[product.name] = product;
    }

    this.sharedStorage.set("products", storage_products);
  }
}

class App extends Div {
  constructor(o) {
    super(o);

    this.compare = this.compare.bind(this);
    this.addEventListener("sharedstoragechanged", this.compare);
  }
  compare(e) {
    let to_compare = this.sharedStorage.get("compare") || [];
    if(to_compare.length >= 2) {

      if(this.compare_element) {
        this.removeChild(this.compare_element);
      }

      let products = this.sharedStorage.get("products");

      let head = new Tr({ items: new Th({}) });
      let colors = new Tr({ items: new Th({ items: new Text("Color") }) });
      let price = new Tr({ items: new Th({ items: new Text("Price") }) });

      this.compare_element = new Table({
        attr: { class: "table-compare" },
        items: [
          new Thead({ items: head }),
          new Tbody({ items: [colors, price] }),
        ]
      });

      for (let i of to_compare) {
        let item = products[i];
        head.appendChild(new Th({ items: new Text(item.name) }));
        colors.appendChild(new Td({ items: new Text(item.color) }));
        price.appendChild(new Td({ items: new Text("$" + item.price) }));
      }

      this.appendChild(this.compare_element);

    } else if(this.compare_element) {
      this.removeChild(this.compare_element);
      delete this.compare_element;
    }
  }
}

// Initialize

window.onload = function() {
  new App({ custom: "igniter-app" });
  new ProductPlace();
}
