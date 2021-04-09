const apiKey = 'flVziMHNZbfxc8XMxPd8XPz5rjp5Qpvd';

export default function getGifs ({keyword = 'rick'} = {}) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`
  
    //Tratar de utilizar fetch en vez de axios siempre que este soportado
  return fetch(apiURL)
      .then(res => res.json())
      .then(response => {
        const {data} = response
        const gifs = data.map(image => {
          const { url } = image.images.downsized_medium
          const { title, id } = image
          return { title, id, url }
        })
        return gifs
      })
}