import Component from '../Component';

const Error = new Component('Error', {
  message: ''
})

Error.render(state => {
  Error.dom.textContent = state.message;
});


export default Error;


