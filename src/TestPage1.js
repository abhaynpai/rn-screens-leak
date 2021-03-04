import React, {PureComponent} from 'react';
import {Text, Button} from 'react-native';

class TestPage1 extends PureComponent {
  render() {
    const {navigation} = this.props;
    return (
      <>
        <Text>Hey there Page 1</Text>
        <Button
          title="Page 2"
          onPress={() => navigation.navigate('TestPage2')}
        />
      </>
    );
  }
}

export default TestPage1;
