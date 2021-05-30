import * as React from 'react';
import{Image,FlatList, Pressable} from 'react-native';
import{useNavigation} from '@react-navigation/native' 
import styles from './styles';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import categories from '../../assets/data/categories';

// THIS IS TO KNOW THAT WHAT DATA WE EXPECT IN THIS COMPONENTS WHETHER IT IS STRING NUM IMAGE ETC
// IN TYPREsCRIPT WE HAVE TO DEFINE THIS AS WELL 

interface HomeCategoryProps {
    category:{
        id:string,
        title:string,
        // MOVIE IS AN ARRAY OF OBJECTS WHICH CONTAINS POSTER AND ID OF EACH INDIVIDUAL THATS WHY WE DEFINE LIKE THIS
        movies:{
            id:string,
            poster:string,
        }[],
        }
    }

 const HomeCategory=(props:HomeCategoryProps)=> {
     const {category}=props;
     const navigation=useNavigation();

    const  onMoviePress=(movie)=>{
      navigation.navigate('MovieDetailsScreen', {id:movie.id})
     }
     
  return (
    <>
    <Text style={styles.title}>{category.title}</Text>

    {/* THIS IS USED TO RENDER THE IMAGES IN THE COMPOMNET FROM DUMMY DATA ASSESTS */}
    <FlatList
    data={category.movies}
    renderItem={({item})=>(
        <Pressable onPress={()=>onMoviePress(item)}>
            <Image style={styles.image} source={{uri:item.poster}}/>
        </Pressable>
    )}
    horizontal
    showsHorizontalScrollIndicator={false}
    />
   </>
  );
}

export default HomeCategory;