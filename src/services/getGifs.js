import {API_KEY, API_URL} from './settings'

// export default function getGifs ({keyword = 'rick'} = {}) {
//   const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`

//     //Tratar de utilizar fetch en vez de axios siempre que este soportado
//   return fetch(apiURL)
//       .then(res => res.json())
//       .then(response => {
//         const {data} = response
//         const gifs = data.map(image => {
//           const { url } = image.images.downsized_medium
//           const { title, id } = image
//           return { title, id, url }
//         })
//         return gifs
//       })
// }

const fromApiResponseToGifs = apiResponse => {
  const { data = [] } = apiResponse
  if (Array.isArray(data)) {
    const gifs = data.map(image => {
      const { url } = image.images.downsized_medium
      const { title, id } = image
      return { title, id, url }
    })
    return gifs
  }
  return []
}

export default function getGifs ({limit = 15, keyword = 'rick', page = 0} = {}){
  const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=g&lang=en`
  return fetch(apiURL)
    .then(res => res.json())
    .then(fromApiResponseToGifs)
}