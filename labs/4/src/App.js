import React from 'react';
import './components/Card/index.css';
import todoList from './todoList.json'


class TodoItem extends React.Component {
  render(props) {
    return <div className='card'><h3>{this.props.title}</h3> <p>{this.props.content}</p><input type="button" value="X"
      onClick={() => this.props.removeTask(this.props.id)} /></div>

  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todoList: todoList,
    }
    this.currentID = 3;
  }

  removeTask(taskID) {
    let newList = this.state.todoList.filter((task) => (task.id !== taskID))
    this.setState({ todoList: newList })
  }

  render() {
    return (
      <>
        {(this.state.showUncompletedTasks ? this.state.todoList.filter((v) => !v.completed) : this.state.todoList)
          .map((v, i) => <TodoItem id={v.id} key={i} priority={v.priority}
            content={v.content} title={v.title} completed={v.completed} removeTask={(id) => this.removeTask(id)} />)}
      </>
    );
  }
}

export default App;