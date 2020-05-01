import React from "react";


const List = ({ list }) => (
    <ul>
        {list.map(item => (
            <ListItem key={item.id} item={item} />
        ))}
    </ul>
);

const ListItem = ({ item }) => (
    <li>
        <div>{item}</div>
    </li>
);

export default List;