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
        // console.log(business.id);
        // console.log(business.image_url);
        // console.log(business.name);
        // console.log(business.location.address1);
        // console.log(business.location.city);
        // console.log(business.location.state);
        // console.log(business.location.zip_code);
        // console.log(business.categories[0].title);
        // console.log(business.rating);
        // console.log(business.review_count);
        return {
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
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