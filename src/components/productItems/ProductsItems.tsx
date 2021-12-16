import React from 'react';
import { View, Text } from 'react-native';

const ProductsItem = (props) => {
    console.log("HOLA SOY LAS PROPS", props);

    return (
        <View>
            <Text>Soy un producto y mi nombre es </Text>
            <Text>{props.product.name}</Text>
        </View>
    );
};

export default ProductsItem;
