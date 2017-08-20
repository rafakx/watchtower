import React, {PureComponent} from 'react';
import {Grid, Column, Header, Feed, Icon} from 'semantic-ui-react';
import {HorizontalGridLines, LineSeries, RadialChart, VerticalBarSeries, 
  VerticalGridLines, XAxis, XYPlot, YAxis} from 'react-vis';
import {Link} from 'react-router-dom';

import Item from '../../components/Item.jsx';
import ItemAdd from '../../components/ItemAdd.jsx';
import {Area, Source, Target} from '../../components/draggable/Draggable.jsx';

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
            {id: 32100, title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"},
            {id: 32100, title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"}
          ],
          doing: [
            {id: 32100, title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"},
            {id: 32100, title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"},
            {id: 32100, title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"}
          ],
          done: [
            {id: 32100, title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"}
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
      <Area>
        <Grid> 
          <Grid.Column width={4}>
            <Target>
              <Header as='h3'>To do</Header>
              <For each="item" of={issues.todo}>
                <Source>
                  <Item {...item} />
                </Source>
              </For>
              <ItemAdd />              
            </Target>
          </Grid.Column>
          <Grid.Column width={4}>
            <Target>            
              <Header as='h3'>Doing</Header>
              <For each="item" of={issues.doing}>
                <Source>              
                  <Item {...item} />
                </Source>
              </For>
            </Target>
          </Grid.Column>
          <Grid.Column width={4}>
            <Target>
              <Header as='h3'>Done</Header>
              <For each="item" of={issues.done}>
                <Source>                            
                  <Item {...item} />
                </Source>
              </For>
            </Target>
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
      </Area>
    );
  }
};