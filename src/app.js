// import validator from 'validator';
import react from 'react';
import reactDOM from 'react-dom';
import IndecitionApp from './components/IndecitionApp';

const Layout = (props) => {
    return (
        <div>
            <p>header</p>
            {props.children}
            <p>footer</p>
        </div>
    );
}

ReactDOM.render((
  <IndecitionApp />
), document.getElementById('app'));
