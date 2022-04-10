import './module.css';

export default function Price({price}) {

    return(
        <div className="priceHolder">
            <p>{price}€</p>
        </div>
    )
}