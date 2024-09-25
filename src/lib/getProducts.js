// export default async function getProducts(){
//     const result = await fetch('https://dummyjson.com/products?_limit= 10')
//     console.log(result.json());
//     return result.json();
// }


export default async function getProducts() {
    try {
        const response = await fetch('https://dummyjson.com/products?_limit=10');
        if (!response.ok) {
            throw new Error(`Failed to fetch products, status: ${response.status}`);
        }
        const data = await response.json();
        return data; // Return the parsed JSON data
    } catch (error) {
        console.error('Error fetching products:', error);
        return null;
    }
}
