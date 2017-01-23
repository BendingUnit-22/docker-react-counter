import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './reducers/configureStore';


import ToDoAppContainer from './containers/ToDoAppContainer';

const store = configureStore();


class App extends React.Component{
    render(){
        return (
            <Provider store={store}>
                <ToDoAppContainer/>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
