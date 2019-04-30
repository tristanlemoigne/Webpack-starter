import _ from 'lodash';
import printMe from './print.js';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
    
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.appendChild(btn);
  
    return element;
  }
  
  document.body.appendChild(component());


console.log(module.hot)
if (module.hot) {
    console.log("true")
    module.hot.accept('./print.js', function() {
        console.log('Accepting the updated printMe module!');
        printMe();
    })
}
