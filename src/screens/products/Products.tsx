import { useNavigation } from '@react-navigation/native';
import React, { useEffect,useState } from 'react';
import { SafeAreaView } from 'react-native';
import { Button, LinearProgress, Text } from 'react-native-elements';
import styles from './product-styles';
import Counter from '../../components/counter/Counter';
import ProductsService from '../../app/services/ProductsService';
import ProductsItem from '../../components/productItems/ProductsItems';

const Products = () => {
  const navigation = useNavigation<any>();
  //creamos un estado para almacenar los datos que devuelve la funcion usesState
  const [products, setProducts] = useState<any>([]);
  const onPressButton = () => {
    navigation.navigate('product-details');
  };

  useEffect(() => {
    const asyncCall = async () => {
      const result = await ProductsService.getProducts();
      setProducts(result.data);
      //console.log(result.data);
      //almacenar esa informacion
    };
    asyncCall();
  }, []);
  //si no hay productos cargados se pone el linearProgress 
  if (products.length === 0) {
    return <LinearProgress />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text h4>Soy la página de productos</Text>
      <Text h4>{products[0].brand}</Text>

      <ProductsItem product={products[0]}/>
      <Counter />

      <Button onPress={onPressButton} title="Ir a la página de detalles" />
    </SafeAreaView>
  );
};

export default Products;
