import * as React from 'react';
import{Image,FlatList} from 'react-native';
import styles from './styles';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import categories from '../../assets/data/categories';
import HomeCategory from '../../components/HomeCategory';


// const firestCategory=categories.items[2];
 const HomeScreen=()=> {
  return (
    <View style={styles.container}>
     {/* <HomeCategory category={firestCategory}/> */}



     {/* THIS IS USED TO RENDERING THE LISTS IN THE COMPONENTS LIKE TRENDING NOW POPPULAR ETC */}
     <FlatList
            data={categories.items}
            renderItem={({item}) => <HomeCategory category={item} />}
        />
    </View>
  );
}




export default HomeScreen