export default function Item({ item, onDeleteItem, onToogleItem }) {
  return (
     <li>
      <input type="checkbox" checked={item.checked} onChange={()=> onToogleItem(item.id)} />
      <span style={item.checked ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.name}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>&times;</button>
    </li>
  );
}