import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchCharacters } from "../api";

const Container = styled.div`
  padding: 40px;
  margin: 0 auto;
`;
const Title = styled.h1`
  font-size: 25px;
  text-align: center;
`;
const Loader = styled.span`
  text-align: center;
  display: block;
`;
const CharacterList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 20vw);
  margin: 25px 0px;
  gap: 10px;
`;
const Character = styled.div`
  text-align: center;
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: color 0.2s ease-in;
    border-radius: 15px;
    &:hover {
      background-color: white;
      color: black;
    }
  }
`;
const Img = styled.img`
  width: 100px;
  height: 100px;
  margin: 5px;
  border-radius: 80px;
`;

interface ICharacter {
  id: number;
  name: string;
  imageUrl: string;
};
interface CharacterState {
  name: string;
};

function Home() {
  const { isLoading, data } = useQuery<ICharacter[]>(
    ["allCharacters"],
    fetchCharacters,
  );

  return (
    <Container>
      <Title>Disney Characters</Title>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CharacterList>
          {data?.slice(0, 100).map((character) => (
            <Character key={character.id}>
              <Link to={{
                  pathname: `/character/${character.id}`,
                  /* state: { name: character.name } as CharacterState, */
                }}
              >
                <Img src={character.imageUrl} />
                {character.name}
              </Link>
            </Character>
          ))}
        </CharacterList>
      )}
    </Container>
  );
}

export default Home;
