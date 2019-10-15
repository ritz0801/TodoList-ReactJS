import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoItems: [
        { id: 1, title: 'Mua bim bim', isComplete: false },
        { id: 2, title: 'Đi đá bóng', isComplete: false },
        { id: 3, title: 'Đi đổ xăng', isComplete: false }]
    }
    this.isCompleteChange = this.isCompleteChange.bind(this)
  }

  isCompleteChange(id) {
    const newArr = this.state.todoItems.map(item => {
      if (item.id == id) {
        return { ...item, isComplete: !item.isComplete }
      }
      return item
    })
    this.setState({ todoItems: newArr })
  }
  
  render() {
    return (
      <div className="App">
        {
          this.state.todoItems.map((item, index) => {
            return <TodoItem
              key={index}
              item={item}
              isCompleteChange={this.isCompleteChange}
            />
          })
        }
      </div>
    );
  }
}

export default App;
