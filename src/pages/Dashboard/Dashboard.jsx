import React, { Component } from 'react';
import { Grid, Column, Header } from 'semantic-ui-react';
import { XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, RadialChart, VerticalGridLines, VerticalBarSeries } from 'react-vis';
import { Area, Source, Target } from '../../components/draggable/Draggable.jsx';


export default class Dashboard extends Component {

  constructor(){
    super();

    this.state = {
      list: [
        { index: 0, title: 'A', size: 4 },
        { index: 1, title: 'B', size: 8 },
        { index: 2, title: 'C', size: 4 },
        { index: 3, title: 'D', size: 2 },
        { index: 4, title: 'E', size: 2 }
      ]
    }
  }

  swap = (dropped, actual) => {
    const {list} = this.state;

    let actualItem = list[actual];
    list[actual] = list[dropped.id];
    list[dropped.id] = actualItem;

    this.setState(list);

    console.log(this.state.list);
  }

  Item = ({ index, title, size }) => (
    <Grid.Column width={size} style={{border: '1px solid tomato'}}>
      <Source id={index}>
        <Target onDrop={(self) => this.swap(self, index)}>
          <Header as='h3'>{title}</Header>
          <span>{index}</span>
        </Target>
      </Source>
    </Grid.Column>
  );

  render() {
    return (
      <Area>
        <Grid>
          <For each="item" of={this.state.list}>
            <this.Item {...item} />
          </For>
        </Grid>
      </Area>
    );
  }
};