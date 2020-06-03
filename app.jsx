import React from 'react';
import ReactDOM from 'react-dom';


function Title() {
  return (
    <div>
        <h1 className="h1">
          Lista de tareas
        </h1>
        <div className="dropdown-divider"></div>
    </div>
  )
}

class Lista extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      task: [
        "React",
        "PHP5",
        "CSS"
        ]
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  handleClick() {
    this.setState({
      task: [...this.state.task, this.state.input],
      input: ""
    })
  }

  deleteTask = index => {
    const list = this.state.task.filter((item,i) => i !== index);
    this.setState({
      task: [...list]
    });
  }

  render() {
    return (
      <div>
      <div className="d-flex input-group justify-content-center p-2 mb-3">
        <input className="form-control" onChange={this.handleChange} value={this.state.input} type="text"></input>
        <div className="input-group-append">
        <button className="btn btn-primary" onClick={this.handleClick}><i className="fa fa-level-down"></i></button>
        </div>
      </div>
      <div className="p-2 text-left">
        <ul className="list-group">
          {
            this.state.task.map((data, index) =>
              <li className="list-group-item d-flex align-items-center" key={index}>
                <div className="mr-auto d-inline">
                  <i className="fa fa-caret-right text-primary mr-2"></i>
                  {data}
                </div>
                  <button onClick={() => this.deleteTask(index)} className="btn btn-sm btn-danger">
                    <i className="fa fa-times"></i>
                  </button>
              </li>
            )
          }
        </ul>
      </div>
    </div>
    )
  }
}

function Main() {
  return (
    <div className="container text-center">
        <Title/>
        <Lista />
      </div>
  )
}


ReactDOM.render(
  <Main />,
  document.getElementById('react-app')
);