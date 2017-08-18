import React, {Component} from 'react';
import PropTypes from 'prop-types';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

class DraggableArea extends Component {
	
	static propTypes = {
		children: PropTypes.node
	}

	render() {
		return (<div> {this.props.children} </div>);
	}
} 

export default DragDropContext(HTML5Backend)(DraggableArea);