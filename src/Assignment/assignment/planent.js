import React, { useState, useEffect } from 'react';
import { Card, Grid, Pagination, Dimmer, Loader } from 'semantic-ui-react';

const PlanetList = () => {
  const [planets, setPlanets] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPlanets('https://swapi.dev/api/planets/');
  }, []);

  const fetchPlanets = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPlanets(data.results);

      setNextPage(data.next);
      setLoading(false);
      setError(null);
    } catch (error) {
      console.error('Error fetching planets:', error);
      setLoading(false);
      setError('An error occurred while fetching data.');
    }
  };

  const handlePaginationChange = (e, { activePage }) => {
    setCurrentPage(activePage);
    const nextPageUrl = `https://swapi.dev/api/planets/?page=${activePage}&format=json`;
    fetchPlanets(nextPageUrl);
  };

  return (
    <div className='Container-fluid'>
      {loading && (
        <Dimmer active>
          <Loader>Loading...</Loader>
        </Dimmer>
      )}

      {error && <h2>Error: {error}</h2>}

      {!loading && !error && (
        <>
          <Grid columns={3} doubling stackable>
            {planets.map((planet, i) => (
              <Grid.Column key={i}>
                <Card>
                  <Card.Content>
                    <Card.Header>
                      <strong>Name: </strong> {planet.name}
                    </Card.Header>
                    <Card.Description>
                      <p>
                        <strong>Climate</strong> {planet.climate}
                      </p>
                      <p>
                        <strong>Terrain</strong> {planet.terrain}
                      </p>
                      <p>
                        <strong>Population</strong> {planet.population}
                      </p>
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
            ))}
          </Grid>

          {nextPage && (
            <Pagination
              activePage={currentPage}
              totalPages={6}
              onPageChange={handlePaginationChange}
              disabled={loading}
              style={{ marginTop: '30px' }}
            />
          )}
        </>
      )}
    </div>
  );
};

export default PlanetList;





