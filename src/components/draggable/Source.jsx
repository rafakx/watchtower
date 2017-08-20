import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';

const spec = {
  beginDrag(props) {
		const item = { id: props.id };

		if(props.beginDrag) {
			props.endDrag.call(this, item);
		}

		return item;
  },
	endDrag(props, monitor) {
		if(props.endDrag) {
			props.onDrop.call(this, monitor.getItem());
		}

		if(monitor.didDrag) {
			props.endDrag.call(this, monitor.getItem());
		}
 	}
};

const collect = (connect, monitor) => ({
  isDragging: monitor.isDragging(),
  connectDragSource: connect.dragSource()
});

class Source extends PureComponent {
	
	static propTypes = {
		id: PropTypes.string.isRequired,
		onDrop: PropTypes.func,
		endDrag: PropTypes.func,
		children: PropTypes.node,		
		beginDrag: PropTypes.func,
    isDragging: PropTypes.bool.isRequired,
    connectDragSource: PropTypes.func.isRequired,
	}

  render() {
		
		const {
			children, 
			isDragging,
			connectDragSource
		} = this.props;
    
		const dragging = isDragging ? 'dragging': null;

		return connectDragSource(
			<div className={dragging}>
				{children}
			</div>
		);
  }
};

export default DragSource('item', spec, collect)(Source);