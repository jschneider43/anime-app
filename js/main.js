document.querySelector('button').addEventListener('click',getFetch)

function getFetch(){
  document.querySelector('.shows').innerHTML = '';

  const choice = encodeURIComponent(document.querySelector('input').value)
  fetch(`https://myanimelist.p.rapidapi.com/anime/search/${choice}/10`, {
    method: 'GET',
	  headers: {
		  'X-RapidAPI-Key': 'a86787c008msh247cff356f2b35ep1eee5ajsn0a1ff1ba39dd',
		  'X-RapidAPI-Host': 'myanimelist.p.rapidapi.com'
	  }
  })
  .then(response => response.json())
  .then(data => {
    const list = data;

    list.map((item) => {
      console.log(item)
      const id = item.myanimelist_id
      const name = item.title
      const image = item.picture_url
      const link = item.myanimelist_url
      const show = `<a href='${link}' target='_blank' <li> <img src=${image}> <h2>${name}</h2></li>`
      console.log(image)
      document.querySelector('.shows').innerHTML += show
    })
  })
  .catch(err => {
    console.log(err)
  })
}