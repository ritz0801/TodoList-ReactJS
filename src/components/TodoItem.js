import React, { Component } from 'react';
import classNames from 'classnames';
import './TodoItem.css';

class TodoItem extends Component {
    // constructor(props) {
    //     super(props);   
    //     this.onItemClick = this.onItemClick.bind(this);
    // }
    // onItemClick() {
    //     this.props.onClick(this.props.item.id)
    // };

    render() {
        const { item, onClick } = this.props;
        return (
            <div onClick={onClick} className={classNames('TodoItem', {
                'TodoItem-complete': item.isComplete
            })}>
                <p>{item.title}</p>
            </div>
        );
    }
}

export default TodoItem;