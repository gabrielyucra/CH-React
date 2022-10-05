import Item from "./Item";
const ItemList = ({items}) => {
    return (
        <>
        <div className="item-list">
            {items.map((e) =><Item key={e.id} product={e}/>)}
        </div>
        </>
    );
}

export default ItemList;
