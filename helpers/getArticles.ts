const url = process.env.NEXT_PUBLIC_STRAPI_URL


const fetchArticles = async () => {
try {
  const res = await fetch(`${url}/api/blogs?populate=*`)
   const data = await res.json()
   return [data, null]
}  catch (err) {
  console.error(err)
  return [null, err]
}

}

const getArticles = async () => {
  const [data, error] = await fetchArticles()

  if(error) {
    throw new Error(error)
  } else {
    return data
  }
}

export default getArticles
