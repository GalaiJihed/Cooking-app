import React from 'react';
import { FlatList, ScrollView, Text, View, TouchableHighlight, Image } from 'react-native';
import styles from './styles';
import { recipes } from 'App/Containers/Home/data/dataArrays';
import MenuImage from '../../Components/MenuImage/MenuImage';

import { getCategoryName } from 'App/Containers/Home/data/MockDataAPI';

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: () => <MenuImage
          onPress={() => {
            navigation.openDrawer();
          }}
      />
    };
  };


  constructor(props) {
    super(props);
  }

  onPressRecipe = item => {
    this.props.navigation.navigate('Recipe', { item });
  };

  renderRecipes = ({ item }) => (
    <TouchableHighlight underlayColor='rgba(73,182,77,0.9)' onPress={() => this.onPressRecipe(item)}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
      </View>
    </TouchableHighlight>
  );

  render() {
    return (
      <View style={{backgroundColor:'white'}}>

        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={recipes}
          renderItem={this.renderRecipes}
          keyExtractor={item => `${item.recipeId}`}
        />
      </View>
    );
  }
}
