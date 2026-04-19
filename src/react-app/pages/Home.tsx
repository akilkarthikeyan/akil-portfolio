import { useEffect, useState } from "react";

export default function Home() {
    const [name, setName] = useState("");

    useEffect(() => {
        fetch("/api/")
            .then((res) => res.json())
            .then((data) => setName(data.name));
    }, []);

    return (
        <div>
            <p>Hi, I am {name}!</p>
        </div>
    );
}
