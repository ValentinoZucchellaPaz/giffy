const apiKey = 'phPEQqyz0bh5SCRCksAG46VonjpMEBdR';

export function getGifs ({ keyword='lsd' } = {}) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`;

  return fetch(apiURL)
    .then(res => res.json())
    .then(response => {
      const {data = []} = response;
      if (Array.isArray(data)){
          const gifs = data.map(img=>{
              const {title, id, images} = img
              const {url} = images.downsized_medium;
              return {title, id, url}
          });
          return gifs;
      }
    })
}

export function getGifsById ({gifId}) {
  const apiURL = `https://api.giphy.com/v1/gifs/${gifId}?api_key=${apiKey}`;

  return fetch(apiURL)
    .then(res => res.json())
    .then(response => {
      const {data = []} = response;
      const {title, id, images} = data
      const {url} = images.downsized_medium
      return {title, id, url}
    })
}