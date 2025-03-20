import ProductCard from "./Card/ProductCard";

export default function CardContainer({data}) {
    let items = data.customAttributes.productlist.items
    console.log(items.length)
    return (
        <div className={data.type}>
            {items.map((element, index) => (
                <ProductCard 
                    key={index}
                    name={element.name}
                    price={element.price}
                    imageSrc={element.imageSrc}
                />
            ))}
        </div>
    )
}