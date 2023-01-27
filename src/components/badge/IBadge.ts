import { IGenre } from "../../interfaces/interfaces";

export interface IBadge extends IGenre {
  handleBadgeClick(id: number): void;
}
