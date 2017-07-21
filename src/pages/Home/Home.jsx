import React, {PureComponent} from 'react';
import Item from '../../components/Item.jsx';
import {Grid, Column, Header, Feed, Icon} from 'semantic-ui-react';
import {HorizontalGridLines, LineSeries, RadialChart, VerticalBarSeries, 
  VerticalGridLines, XAxis, XYPlot, YAxis} from 'react-vis';
import {Link} from 'react-router-dom';

export default class Home extends PureComponent {

  constructor() {
    super();

    this.state = {
      charts: {
        width: 300,
        height: 200
      },
      data: {
        issues: {
          todo: [
            {task: 32100, title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"},
            {task: 32100, title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"}
          ],
          doing: [
            {task: 32100, title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"},
            {task: 32100, title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"},
            {task: 32100, title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"}
          ],
          done: [
            {task: 32100, title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"}
          ]
        }
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
      <LineSeries data={null}/>
      <LineSeries data={null} strokeStyle='dashed' />
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
      <VerticalBarSeries data={null} />
      <VerticalBarSeries data={null} />
    </XYPlot>
  )

  SeeMore = () => (
    <div>
      <Link to='dashboard'>All kpis <Icon name="arrow right" /></Link>
    </div>
  )

  render() {
    const {issues} = this.state.data;

    return (
      <Grid>
        <Grid.Column width={4}>
          <Header as='h3'>To do</Header>
          <For each="item" of={issues.todo}>
            <Item {...item} />
          </For>
        </Grid.Column>
        <Grid.Column width={4}>
          <Header as='h3'>Doing</Header>
          <For each="item" of={issues.doing}>
            <Item {...item} />
          </For>
        </Grid.Column>
        <Grid.Column width={4}>
          <Header as='h3'>Done</Header>
          <For each="item" of={issues.done}>
            <Item {...item} />
          </For>
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