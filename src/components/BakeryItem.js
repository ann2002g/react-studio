// TODO: create a component that displays a single bakery item
export default function BakeryItem(props) {
    return <div> 
    <h3> {props.item.name}</h3>
    <img src = {props.item.image} alt = {props.item.description}/>
    <p> {props.item.description} </p>
    <p> Price: ${props.item.price} </p>

    <button onClick={() => {props.Click(props.item)}}>Add To Cart</button>
    </div>
    
    
}
