import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';

const spec = {
  beginDrag(props) {
    return {
      name: props.id,
    };
  }
};

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
});

class Item extends PureComponent {
	static propTypes = {
		id: PropTypes.string.isRequired,
		title: PropTypes.string,

    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
	}

  render() {
		const {id, title, connectDragSource, isDragging} = this.props;
    
    let sourceClass =  isDragging ? 'dragging': null;

		return connectDragSource(
			<div className='item'>
				<div className={sourceClass}>
					<span>{ `#${id}` }</span>
					<p>{ title }</p>
				</div>
			</div>
    );
  }
};

export default DragSource('item', spec, collect)(Item);