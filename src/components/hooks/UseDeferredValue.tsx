import { Container } from "react-bootstrap"
import { SetStateAction, useEffect, useState, useDeferredValue } from "react"

import Menu from "../Menu"

const filterBySearch = (entities: any[], search: any) =>
    entities.filter((item) => item.name.concat(item.body).includes(search));

export const UseDeferredValue = () => {
    const [comments, setComments] = useState([]);
    const [search, setSearch] = useState("");

    const handleSearch = (e: { target: { value: SetStateAction<string>; }; }) => {
        setSearch(e.target.value);
    };

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then((res) => res.json())
            .then(setComments);
    }, []);

    return (
        <div>
            <Menu />
            <Container>
                <h3 className=" mt-3">UseDeferredValue</h3>

                <p></p>
                <div>
                    <input onChange={handleSearch} />
                    <Comments entities={filterBySearch(comments, search)} />
                </div>
            </Container>
        </div>
    )
}

export const Comments = ({ entities = [] }: { entities: any[] }) => {
    // [1, 2] - deferredValue === entities
    // [1, 2] - filter 1 - deferredValue !== entities
    // [1] - deferredValue === entities
    const deferredValue = useDeferredValue(entities);
    return (
        <ul style={{
            opacity: entities !== deferredValue ? 0.5 : 1,
        }}>
            {deferredValue.map((comment) => (
                <li key={comment.id}>
                    <h3>{comment.name}</h3>
                    <p>{comment.body}</p>
                </li>
            ))}
        </ul>
    );
};