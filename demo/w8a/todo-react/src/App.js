import React from 'react';
import './App.css';
import todoList from './todoList.json'

class TodoItem extends React.Component {
  render(props) {
    return <p className='card'>{this.props.content}<input type="button" value="X"
      onClick={() => this.props.removeTask(this.props.id)} /></p>
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todoList: todoList,
      showUncompletedTasks: false
    }
    this.currentID = 4;
  }

  addTask() {
    let newTask = {
      "id": this.currentID, "completed": false,
      "priority": this.refs.priority, "content": this.refs.taskContent.value
    }
    this.currentID++;
    let currentList = this.state.todoList
    currentList.push(newTask)
    this.setState({ todoList: currentList })
  }

  removeTask(taskID) {
    let newList = this.state.todoList.filter((task) => (task.id !== taskID))
    this.setState({ todoList: newList })
  }

  render() {
    return (
      <>
        <div className="inputTask">

          <input type="text" ref="taskContent" />

          <select ref="priority" name="priority">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>

          <input type="button" value="Add Task" onClick={() => this.addTask()} />

          <br />

          <input type="checkbox" ref="completedFilter" onChange={(e) => this.setState({ showUncompletedTasks: e.target.checked })}
            id="completedFilter" name="completedFilter" value="completed" />
          <label htmlFor="completedFilter">Show only uncompleted tasks</label>

        </div>

        {(this.state.showUncompletedTasks ? this.state.todoList.filter((v) => !v.completed) : this.state.todoList)
          .map((v, i) => <TodoItem id={v.id} key={i} priority={v.priority}
            content={v.content} completed={v.completed} removeTask={(id) => this.removeTask(id)} />)}
      </>
    );
  }
}

export default App;