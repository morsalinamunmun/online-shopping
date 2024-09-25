export default async function getSingleProduct(id){
    // console.log(title, 'single title');
    const result = await fetch(`https://dummyjson.com/products/${id}`)
    return result.json();
}