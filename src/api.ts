const BASE_URL = `https://disney_api.nomadcoders.workers.dev/characters`;

export function fetchCharacters() {
  return fetch(BASE_URL).then((response) => response.json());
}

export function fetchCharacter(id: number) {
  return fetch(`${BASE_URL}/${id}`).then((response) => response.json());
}
