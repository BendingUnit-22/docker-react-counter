import React  from 'react';

class ToDoApp extends React.Component {


    append = (event) => {
       this.props.append(2)
    };

    render(){

        return(
            <div className="container">
                        <div className="row text-center">
                            <h1>{this.props.toDoApp.count}</h1>
                            <div className="btn-group">
                                <button type="button" className="btn" onClick={this.props.add}>Add</button>
                                <button type="button" className="btn" onClick={this.props.subtract}>Subtract</button>
                                <button type="button" className="btn" onClick={this.props.reset}>Reset</button>
                                <button type="button" className="btn btn-primary" onClick={this.append.bind(this)}>Append</button>
                            </div>
                        </div>

                        <div className="row text-center">


                </div>
            </div>

        );
    }
}


export default ToDoApp
