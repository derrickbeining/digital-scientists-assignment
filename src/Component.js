
function merge(one, two) {
  return Object.assign({}, one, two);
}

export default class Component {

  constructor(id, defaultState = {}) {

    let state = defaultState;

    const getState = () => state;

    const setState = arg => {
      if (typeof arg === 'function') {
        setState(arg(getState()));
      } else {
        state = merge(state, arg);
        this.renderer(getState())
      }
    }

    this.dom = document.getElementById(id);
    this.getState = getState;
    this.setState = setState;
    this.renderer = function noop() { };
  }

  addClass(classname) {
    this.dom.classList.add(classname);
  }

  removeClass(classname) {
    this.dom.classList.remove(classname);
  }

  toggleClass(classname) {
    this.dom.classList.toggle(classname);
  }

  on(event, eventHandler, options = false) {
    return this.dom.addEventListener(event, eventHandler, options);
  }

  render(fn) {
    this.renderer = fn;
    fn(this.getState());
  }

}
