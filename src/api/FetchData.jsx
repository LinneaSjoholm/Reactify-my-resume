import { useState, useEffect } from 'react';

function FetchData() {
    const URL = "https://api.github.com/users/LinneaSjoholm/repos";
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetch(URL)
            .then((response) => response.json())
            .then((data) => {
                setRepos(data);
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
            });
    }, []);

    return (
        <section className="repos">
            {repos.map((repo) => (
                <div key={repo.id}>
                    <h2 className="repo-title">{repo.name}</h2>
                    <a href={repo.html_url}>View on GitHub</a>
                </div>
            ))}
        </section>
    );
}

export default FetchData;
