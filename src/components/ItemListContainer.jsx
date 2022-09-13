import ItemCount from "./ItemCount";

const ItemListContainer =(props)=>{
    return(
        <>
            <h1 className="text-center">{props.greeting}</h1>
            <ItemCount/>
        </>
    );
}

export default ItemListContainer;