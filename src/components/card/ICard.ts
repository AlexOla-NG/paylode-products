import { IUserData } from "../../interfaces/interfaces";

export interface ICard extends IUserData {
  handleNavigate(id: number): void;
}
