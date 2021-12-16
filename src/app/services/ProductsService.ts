import axios from 'axios';

const ProductsService = {
getProducts: () => {
    return axios.get('https://raw.githubusercontent.com/RoiDopazo/resources/master/react-tuto/data.json');
  }
};

export default ProductsService;