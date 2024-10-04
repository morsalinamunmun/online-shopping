import getProducts from "@/lib/getProducts";

const page = async ({params}) => {
    const products = await getProducts();
    console.log(params.title);
    // const {title, description} = products?.products.find((product)=> product.title == params.title)
    return (
        <div>
            title based product details {params.title}
            {/* <h2>{description}</h2> */}
            {/* <p>{title}</p> */}
        </div>
    );
};

export default page;