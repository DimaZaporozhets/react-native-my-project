import React, {useState} from 'react';
import {FlatList, ImageBackground, View, ScrollView} from 'react-native';
import InputForm from '../../components/InputForm';
import {TabScreenStyle} from '../../styling/screens/TabScreen';
import {smoke} from '../../../assets/link/image';
import {ScreenView, Todo} from '../../components';
import {Colors, sg} from '../../styling';

const Tabs = () => {
  const [notes, setNotes] = useState([
    {
      id: '1',
      title: 'Add todo',
    },
    {
      id: '2',
      title: 'Click button',
    },
  ]);

  const addNote = (title) => {
    setNotes((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        title: title,
      },
    ]);
  };

  const removeNote = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  const renderItem = ({item}) => (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={sg.mT5}>
        <Todo title={item} onLongPress={removeNote} />
      </View>
    </ScrollView>
  );

  const keyExtractor = (item) => {
    return item.id;
  };

  return (
    <ScreenView statusBarColor={Colors.black}>
      <ImageBackground source={smoke} style={TabScreenStyle.image}>
        <View style={TabScreenStyle.component}>
          <View style={TabScreenStyle.container}>
            <InputForm
              onSubmit={addNote}
              placeholder="Add todo..."
              titleBtn="Add Todo"
            />
            <FlatList
              keyExractor={keyExtractor}
              data={notes}
              renderItem={renderItem}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </ImageBackground>
    </ScreenView>
  );
};

export default Tabs;
