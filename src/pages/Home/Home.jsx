import React, { PureComponent } from 'react';
import { Grid, Column, Header, Feed, Icon, } from 'semantic-ui-react';
import Item from '../../components/Item.jsx';
import { XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, RadialChart, VerticalGridLines, VerticalBarSeries} from 'react-vis';

export default class Home extends PureComponent {

  constructor() {
    super();

    this.state = {
      charts: {
        width: 300,
        height: 200
      }
    }
  }

  componentWillMount() {
    const width = (window.innerWidth / 4) - 40;
    const height = (window.innerHeight / 2) - 125;

    this.setState({
      charts: { width, height }
    });
  }

  BurnDown = () => (
    <XYPlot 
      width={this.state.charts.width} 
      height={this.state.charts.height}>
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

  Bar = () => (
    <XYPlot xType="ordinal" 
      width={this.state.charts.width} 
      height={this.state.charts.height}>
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis tickLabelAngle={-45} />
      <YAxis />
      <VerticalBarSeries
        data={[
          {x: 'Apples', y: 10},
          {x: 'Bananas', y: 5},
          {x: 'Cranberries', y: 15}
        ]} />
      <VerticalBarSeries
        data={[
          {x: 'Apples', y: 12},
          {x: 'Bananas', y: 2},
          {x: 'Cranberries', y: 11}
        ]} />
    </XYPlot>
  )

  SeeMore = () => (
    <div>
      <a>Todos indicadores <Icon name="arrow right" /></a>
    </div>
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
          <this.Bar />
          <br />
          <this.SeeMore />
        </Grid.Column>
      </Grid>
    );
  }
};