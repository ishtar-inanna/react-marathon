import axios from 'axios';
import { useCallback } from 'react';

const useHttp = () => {

  const getData = useCallback(async (props) => {
      try {
        const { category, numberPage } = props;
        const request = await axios.get(`https://swapi.dev/api/${category}/${numberPage}/`);
        const res = await request.data;
        return res;
      } catch (e) {
        throw new Error(e.message);
      } finally {
        console.log('GET people');
      };
  }, []);

  const getPicture = useCallback(async (props) => {
    try {
      const { category, numberPicture } = props;
      const fetchPicture = await axios(`https://starwars-visualguide.com/assets/img/${category}/${numberPicture}.jpg`);
      const response = fetchPicture.config.url;
      return response;      
    } catch (e) {
      throw new Error(e.message);
    } finally {
      console.log('GET picture');
    };
  }, []);

  const searchInfo = useCallback(async (props) => {
    try {
      console.log(props);
      const { word } = props;
      const request = await axios.get(`https://swapi.dev/api/people/?search=${word}`);
      const res = await request;
      const data = res.data;
      console.log(data);
      return data;
    } catch (e) {
      
    } finally {
      console.log('searching...');
    }
  }, []);

  return {
    getData,
    getPicture,
    searchInfo,
  }

};

export default useHttp;