import React, {PureComponent} from 'react';
import {Text, Button} from 'react-native';

class TestPage2 extends PureComponent {
  render() {
    const {navigation} = this.props;
    return (
      <>
        <Text>Hey there Page 1</Text>
        <Button
          title="Page 3"
          onPress={() => navigation.navigate('TestPage3')}
        />
      </>
    );
  }
}

export default TestPage2;
