const apiKey = 'CLmiVrjg9kNhGS0ztmSwvzXZU0cBHOzqRjiv9-e_5DKHSKqJqDkUumd0PHNI6366I44SjZGZbHvcxLwX-9mbyQ-dW1MFqpwNnaLZjRY2MRL6RzxQd8OPCcyiaibsXXYx';

const Yelp = {};

Yelp.search = (term, location, sortBy) => {
  const endpoint = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
  return fetch(endpoint, {
    headers: {
      Authorization: `Bearer ${apiKey}`
    }
  }).then(response => {
    return response.json()
  }).then(jsonResponse => {
    //console.log(jsonResponse.businesses);
    if (jsonResponse.businesses) {
      
      return jsonResponse.businesses.map(business => {
        //console.log(business.name);
        //console.log(business.review_count);
        //console.log(business.categories[0].title);
        return {
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.address1,
          city: business.city,
          state: business.state,
          zipCode: business.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count,
        }
      });
    }
    //console.log('Wow never happens!');
    return ['imageSrc', 'name', 'address', 'city', 'state', 'zipCode', 'category', 'rating', 'reviewCount'];
  });
}

export default Yelp;