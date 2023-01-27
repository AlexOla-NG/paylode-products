export interface IUserData {
  id: number;
  title: string;
  backdrop_path: string;
}

export interface IMovieInfo extends IUserData {
  overview: string;
  release_date: string;
  imdb_id: string;
}

export interface ICastInfo {
  id: number;
  name: string;
  character: string;
  profile_path: string;
}

export interface IGenre {
  id: number;
  name: string;
}
