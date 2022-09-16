import Item from "./Item";
const ItemList = ({items}) => {
    return (
        <>
            {items.map((e) =>
                <Item 
                    key={e.id}
                    product={e}
                />)}
        </>
    );
}

export default ItemList;
