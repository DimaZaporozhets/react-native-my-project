import React from 'react';
import {Button, ScreenView} from '../../components';
import {View, ScrollView} from 'react-native';
import {Colors, sg} from '../../styling';
import {ReactHooksStyle} from '../../styling/screens/ReactHooks';
import {reduxPractice} from '../../constants';

const Redux = ({navigation}) => {
  const goTo = (route) => () => navigation.navigate(route);
  return (
    <ScreenView
      childrenStyle={{backgroundColor: Colors.black}}
      statusBarColor={Colors.black}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[ReactHooksStyle.container, sg.mT30]}>
        {reduxPractice.map((it) => (
          <View style={[sg.mT20, sg.width100p]} key={it.id}>
            <Button {...it} onPress={goTo(it.pathway)} />
          </View>
        ))}
      </ScrollView>
    </ScreenView>
  );
};

export default Redux;
