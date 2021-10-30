import ReactDOM from 'react-dom';

export function Modal(props) {
  let { children } = props;
  return ReactDOM.createPortal(children, document.getElementById('__next'));
}
