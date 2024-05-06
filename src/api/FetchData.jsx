import { useState } from 'react';

function FetchData() {
    const URL = "https://api.github.com/users/LinneaSjoholm/repos";
    const [data, setData] = useState([]);

    useState(() => {
        fetch(URL)
            .then((resp) => resp.json())
            .then((data) => {
                setData(data);
                console.log(data); 
            });
    }, []);

    return (
        <section className="repos">
                {data.map((repo) => (
                    <li key={repo.id}>
                        <a href={repo.html_url}>{repo.name}</a>
                    </li>
                ))}
        </section>
    )
}

export default FetchData;
