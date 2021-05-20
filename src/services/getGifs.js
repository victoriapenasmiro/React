const apiKey = "laMf2DnEpWUran4LnE0c0QJTZ2f0sUUI";

//{ keyword = 'morty'} = {}
// --> Si no se le pasa ningun parámetro, vuelca uno por defecto
export default function getGifs({ keyword = 'morty'} = {}) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`;

  return fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const data = response.data;
      //const {data} = response; --> Es lo mismo que lo anterior

      if (Array.isArray(data)) {
        //para comprobar que data es un array y evitar errores
        const gifs = data.map((image) => {
            const {url} = image.images.downsized;
            const {images,title,id} = image;
            //const url = image.images.downsized.url; --> Es lo mismo que lo anterior
            return {url,title,id};
        });
        console.log(gifs);
        return gifs;
      }
    });
}
