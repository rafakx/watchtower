import React, { Component } from 'react';
import { Grid, Column, Header, Feed, Icon, } from 'semantic-ui-react';
import Item from '../../components/Item.jsx';
import { XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, RadialChart} from 'react-vis';

export default class Home extends Component {

  KPI = ({ title }) => (
    <div>
      <Header as='h3'>{title}</Header>    
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
      <Header as='h3'>{title}</Header>          
      <RadialChart
        innerRadius={70}
        radius={100}
        showLabels
        data={ [{angle: 1, label: 'To do'}, {angle: 2, label: 'Doing'}, {angle: 2, label: 'Done'}]}
        width={240}
        height={240}  />
    </div>
  );

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
          <this.KPI title="Burndown" />
        </Grid.Column>
      </Grid>
    );
  }
};