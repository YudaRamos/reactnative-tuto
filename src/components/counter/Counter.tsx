import { Button, Text } from 'react-native-elements';
import { View } from 'react-native';
import React, { useState } from 'react';
import styles from './counter-styles';

const Counter = () => {
  const [count, setCount] = useState(0);

  const onIncrementCount = () => {
    setCount(count + 1);
  };
  const onDecrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Button
        containerStyle={styles.buttonContainer}
        buttonStyle={styles.buttonStyle}
        titleStyle={styles.buttonTextStyle}
        title="-"
        onPress={onDecrementCount}
        disabled={count <= 0}
      />
      <Text>Current value: {count}</Text>
      <Button
        containerStyle={styles.buttonContainer}
        buttonStyle={styles.buttonStyle}
        titleStyle={styles.buttonTextStyle}
        title="+"
        onPress={onIncrementCount}
      />
    </View>

  );
};
export default Counter;
