import axios from 'axios';

export const getImageApi = async (imageName='', page = 1) => {
    const API_KEY = '31367220-5a96f337331fc9bdf5943a9df';
    const URL = 'https://pixabay.com/api/';
    const data = await axios.get(`${URL}?key=${API_KEY}&q=${imageName}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`);
    console.log(data);
    return data;

}

