import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';

const spec = {
  drop(props, monitor) {
    if(props.onDrop) {
      props.onDrop.call(this, monitor.getItem());
    }
	},
  hover(props, monitor) {
    if (props.onHover) {
      props.onHover.call(this, monitor.getItem());
    }
  }
};

const collect = (connect, monitor) => ({
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
  connectDropTarget: connect.dropTarget()  
});

class Target extends Component {

  static propTypes = {
		onDrop: PropTypes.func,
		isOver: PropTypes.bool.isRequired,
		onHover: PropTypes.func,
    canDrop: PropTypes.bool.isRequired,    
    children: PropTypes.node,
    connectDropTarget: PropTypes.func.isRequired    
  };

  render() {
    
    const {
      isOver, 
      canDrop, 
      children,
      connectDropTarget
    } = this.props;
    
    const draggable =  (canDrop && isOver) ? 'draggable': null;

    return connectDropTarget(
      <div className={draggable}>
				{children}
      </div>
    );
  }
}

export default DropTarget('item', spec, collect)(Target);