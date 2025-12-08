import useFetchapi from "../custom-hooks/useFetchapi"
import useTitle from "../custom-hooks/useTitle"

export default function ProductList(){

    const productList = useFetchapi("https://fakestoreapi.com/products")
    

    return <div className="conatainer m-3">
        <div className="show-name">
            {JSON.stringify(productList)}
        </div>
    </div>
}