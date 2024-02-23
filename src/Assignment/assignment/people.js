import React, { useState, useEffect } from 'react';
import { Card, Grid, Dimmer, Loader } from 'semantic-ui-react';

export default function People() {
    const [people, setPeople] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPeople() {
            try {
                let res = await fetch('https://swapi.dev/api/people/?format=json');
                let data = await res.json();
                setPeople(data.results);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching people:', error);
            }
        }

        fetchPeople();
    }, []);

    return (
        <div className='Container-fluid'>
            {loading && (
                <Dimmer active>
                    <Loader>Loading...</Loader>
                </Dimmer>
            )}

            {!loading && (
                <Grid columns={3} doubling stackable>
                    {people.map((person, i) => (
                        <Grid.Column key={i} className='grid'>
                            <Card>
                                <Card.Content>
                                    <Card.Header><strong>Name: </strong> {person.name}</Card.Header>
                                    <Card.Description>
                                        <p><strong>Height</strong> {person.height}</p>
                                        <p><strong>Mass</strong> {person.mass}</p>
                                        <p><strong>Gender</strong> {person.gender}</p>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    ))}
                </Grid>
            )}
        </div>
    );
}
