import { useQuery } from "react-query";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { fetchCharacter } from "../api";

const Container = styled.div`
  padding: 50px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Loader = styled.span`
  text-align: center;
  display: block;
`;
const Img = styled.img`
  width: 150px;
  height: 150px;
  margin: 20px;
  border-radius: 150px;
`;
const Title = styled.h1`
  font-size: 30px;
  text-align: center;
  margin-bottom: 20px;
`;
const FilmList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3px;
  max-width: 420px;
`;
const Film = styled.div`
  color: #000000;
  background-color: #ffffff;
  border-radius: 5px;
  font-size: 22px;
  padding: 5px;
  margin: 3px;
`;

interface RouteParams {
  id: number;
};
interface ICharacter {
  id: number;
  films: string[];
  name: string;
  imageUrl: string;
  sourceUrl: string;
};

function Character() {
  const { id } = useParams();

  const { isLoading, data } = useQuery<ICharacter>(["character", id], () =>
    fetchCharacter(Number(id)),
  );

  return (
    <Container>
      <Link to="/">&larr;</Link>

      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Img src={data?.imageUrl} />
          <Title>{data?.name}'s Films</Title>
          <FilmList>
            {data?.films?.map((film) => <Film key={film}>{film}</Film>)}
          </FilmList>
        </>
      )}
    </Container>
  );
}

export default Character;
