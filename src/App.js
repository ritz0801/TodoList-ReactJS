import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoItems: [
        { title: 'Mua bim bim', isComplete: false },
        { title: 'Đi đá bóng', isComplete: false },
        { title: 'Đi đổ xăng', isComplete: false }]
    }
    this.isCompleteChange = this.isCompleteChange.bind(this)
  }

  isCompleteChange(item) {
    return () => {
      this.setState({
        todoItems: this.state.todoItems.map(i => {
          if (i !== item) {
            return {...i};
          }
          else {
            return {...i, isComplete: !item.isComplete};
          }
        })
      })
    };
  }
  
  render() {
    return (
      <div className="App">
        {
          this.state.todoItems.map((item, index) => {
            return <TodoItem
              key={index}
              item={item}
              onClick={this.isCompleteChange(item)}
            />
          })
        }
      </div>
    );
  }
}

export default App;
