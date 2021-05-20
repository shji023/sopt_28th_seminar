import axios from 'axios';

const getUserData = async ()=>{
    try {
      const data = await axios.get('http://localhost:3001/posts');
      console.log("[SUCCESS] Get card data");
      return data.data.data;
    } catch(e) {
        console.log('[FAIL] GET card data');
        return null;
    }
};

export default getUserData;