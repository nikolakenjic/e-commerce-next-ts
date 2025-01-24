import { defineQuery } from 'next-sanity';
import { sanityFetch } from '../live';

export const getAllProducts = async () => {
  const ALL_PRODUCTS_QUERY = defineQuery(`
        *[
            _type == 'product'
        ] | order(name asc)
        `);

  try {
    // Use sanityFetch to send query
    const products = await sanityFetch({
      query: ALL_PRODUCTS_QUERY,
    });

    // Return list of products. or an empty array if non are found
    return products.data || [];
  } catch (error) {
    console.error('Error fetching all products', error);
    return [];
  }
};
