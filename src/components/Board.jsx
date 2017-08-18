import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';

const spec = {
  drop() {
    return { name: 'Board' };
	},
};

const collect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
});

class Board extends Component {
  static propTypes = {
		children: PropTypes.node,

    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    canDrop: PropTypes.bool.isRequired,
  };

  render() {
    const {canDrop, isOver, connectDropTarget, children} = this.props;
    const isActive = canDrop && isOver;

    let targetClass =  isActive ? 'draggable': null;

    return connectDropTarget(
      <div className={targetClass}>
				{children}
      </div>
    );
  }
}

export default DropTarget('item', spec, collect)(Board);