import React, { Component } from 'react';
import classNames from 'classnames';
import './TodoItem.css';

class TodoItem extends Component {
    constructor(props) {
        super(props);   
        this.onItemClick = this.onItemClick.bind(this);
    }
    onItemClick() {
        this.props.isCompleteChange(this.props.item.id)
    };

    render() {
        const { item } = this.props;
        return (
            <div onClick={this.onItemClick} className={classNames('TodoItem', {
                'TodoItem-complete': item.isComplete
            })}>
                <p>{item.title}</p>
            </div>
        );
    }
}

export default TodoItem;