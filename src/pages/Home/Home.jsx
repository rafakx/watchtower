import React, { Component } from 'react';
import { Grid, Column, Header, Feed, Icon, } from 'semantic-ui-react';
import Item from '../../components/Item.jsx';
import { XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, RadialChart, VerticalGridLines, VerticalBarSeries} from 'react-vis';

export default class Home extends Component {

  BurnDown = () => (
    <XYPlot
      width={300}
      height={200}>
      <HorizontalGridLines />
      <LineSeries
        data={[
          {x: 1, y: 10},
          {x: 2, y: 4},
          {x: 3, y: 1}
        ]}/>

      <LineSeries
        strokeStyle='dashed'
        data={[
          {x: 1, y: 10},
          {x: 2, y: 5},
          {x: 3, y: 0}
        ]}/>
      <XAxis />
      <YAxis />
    </XYPlot>
  );

  Radial = () => (
    <div style={{'padding-left': '30px'}}>
      <RadialChart
        innerRadius={60}
        radius={90}
        showLabels
        data={ [{angle: 1, label: 'To do'}, {angle: 2, label: 'Doing'}, {angle: 2, label: 'Done'}]}
        width={240}
        height={200}  />
    </div>
  )

  Bar = () => (
    <XYPlot
    margin={{bottom: 70}}
    xType="ordinal"
    width={300}
    height={200}>
    <VerticalGridLines />
    <HorizontalGridLines />
    <XAxis tickLabelAngle={-45} />
    <YAxis />
    <VerticalBarSeries
      data={[
        {x: 'Apples', y: 10},
        {x: 'Bananas', y: 5},
        {x: 'Cranberries', y: 15}
      ]}/>
    <VerticalBarSeries
      data={[
        {x: 'Apples', y: 12},
        {x: 'Bananas', y: 2},
        {x: 'Cranberries', y: 11}
      ]}/>
    </XYPlot>
  )

  render() {
    return (
      <Grid>
        <Grid.Column width={4}>
          <Header as='h3'>To do</Header>
          <Item task="31200" title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
        </Grid.Column>
        <Grid.Column width={4}>
          <Header as='h3'>Doing</Header>
          <Item task="31200" title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
          <Item task="31200" title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
        </Grid.Column>
        <Grid.Column width={4}>
          <Header as='h3'>Done</Header>
          <Item task="31200" title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
          <Item task="31200" title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
        </Grid.Column>
        <Grid.Column width={4}>
          <Header as='h3'>Burndown</Header>
          <this.BurnDown />
          <Header as='h3'>Tempo total por número de tarefas</Header>    
          {/*<this.Radial />*/}
          <this.Bar />
          <br />
          <div style={{'text-align': 'right', 'margin-right': '15px'}}>
          <a>Todos indicadores <Icon name="arrow right" /></a>
          </div>
        </Grid.Column>
      </Grid>
    );
  }
};