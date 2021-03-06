import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';
import {Text} from '../index';
import {TodoStyle} from '../../styling/components/Todo';

const Todo = ({onLongPress, title, style, activeOpacity}) => {
  const [check, setCheck] = useState(false);
  const switchCheck = () => setCheck(!check);
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={switchCheck}
      onLongPress={() => onLongPress(title.id)}
      style={style}>
      <View style={TodoStyle.container}>
        <Text
          style={[
            TodoStyle.text,
            {
              textDecorationLine: check ? 'line-through' : 'none',
            },
          ]}>
          {title.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

Todo.defaultTypes = {
  activeOpacity: 1,
  style: [],
  // onPress: () => null,
  onLongPress: () => null,
};

Todo.propTypes = {
  // onPress: PropTypes.func.isRequired,
  onLongPress: PropTypes.func.isRequired,
  title: PropTypes.object.isRequired,
};

export default Todo;
