class Component {
  constructor(tag) {
    this.element = { tag: tag, style: { display: "block" } };
  }
  hide() {
    this.element.style = { display: "none" };
  }

  show() {
    this.element.style = { display: "block" };
  }
}
class Box extends Component {
  constructor(element) {
    super(element.element);
    this.size = element.size;
    this.color = element.color;
  }

  getProps() {
    console.log(
      `Element: ${this.element.tag}; Width: ${this.size}; Height: ${this.size}; Background: ${this.color}; Display: ${this.element.style.display}`
    );
  }
}

const box1 = new Box({
  element: "<div></div>",
  size: 100,
  color: "green",
});

box1.hide();

box1.getProps(); // 'Element: <div></div>; Width: 100; Height: 100; Background: green; Display: none;'

const box2 = new Box({
  element: "<div></div>",
  size: 50,
  color: "red",
});

box2.getProps(); // 'Element: <div></div>; Width: 50; Height: 50; Background: red; Display: block;'
