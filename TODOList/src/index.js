import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

//localStorage.setItem('li',JSON.stringify([]))
if(localStorage.getItem('c')==='1'){
    localStorage.setItem('li',localStorage.getItem('li'))
}
else{
    localStorage.setItem('c','1')
    localStorage.setItem('li',JSON.stringify([]))
}
ReactDOM.render(<App />, document.getElementById('root'));
