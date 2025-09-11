import axios from "axios";

export default function getImagesByQuery(query) {  
  return axios
    .get('https://pixabay.com/api/', {
                    params: {
                      key: '52124620-04c3728bcdfdd891621e81587',
                      q: query,
                      image_type: "photo",
                      orientation: 'horizontal',
                      safesearch: true,
                      per_page: 36,
                    }
                  })
    .then(response => {      
      return response.data.hits;
    })
    .catch(() => {      
      return [];
    });    
}