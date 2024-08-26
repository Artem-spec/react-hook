import { Container } from "react-bootstrap"
import { SetStateAction, useEffect, useState, useTransition } from "react"

import Menu from "../Menu"

const filterBySearch = (entities: any[], search: any) =>
    entities.filter((item) => item.name.concat(item.body).includes(search));

export const UseTransition = () => {
    const [isPending, startTransition] = useTransition();
    const [comments, setComments] = useState([]);
    const [search, setSearch] = useState("");

    const handleSearch = (e: { target: { value: SetStateAction<string>; }; }) => {
        startTransition(() => {
            setSearch(e.target.value);
            console.log(e.target.value);            
        });
        // setSearch(e.target.value);
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
                <h3 className=" mt-3">useTransition</h3>

                <p>Позволяет обновлять состояние без блокировки пользовательского интерфейса</p>
                <div>
                    <input onChange={handleSearch} />
                    {isPending && (
                        <h1>Rendering...</h1>
                    )}
                    <Comments entities={filterBySearch(comments, search)} />
                </div>
            </Container>

        </div>
    )
}

export const Comments = ({ entities = [] }: { entities: any[] }) => {
    return (
        <ul>
            {entities.map((comment) => (
                <li key={comment.id}>
                    <h3>{comment.name}</h3>
                    <p>{comment.body}</p>
                </li>
            ))}
        </ul>
    );
};