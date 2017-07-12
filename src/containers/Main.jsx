import React, { PureComponent } from 'react';
import { Grid } from 'semantic-ui-react';

export default class Main extends PureComponent {

  render() {
    return (
      <main>
        {this.props.children}
      </main>
    );
  }
}