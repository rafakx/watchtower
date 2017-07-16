import React, { PureComponent } from 'react';
import { Grid, Column, Header } from 'semantic-ui-react';
import { XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, RadialChart, VerticalGridLines, VerticalBarSeries} from 'react-vis';

export default class Home extends PureComponent {

  render() {
    return (
      <Grid>
        <Grid.Column width={8}>
          <Header as='h3'>Andamento</Header>
        </Grid.Column>
        <Grid.Column width={4}>
          <Header as='h3'>Doing</Header>
        </Grid.Column>
        <Grid.Column width={4}>
          <Header as='h3'>Done</Header>
        </Grid.Column>
      </Grid>
    );
  }
};