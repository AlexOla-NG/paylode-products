export interface ITextButton {
  title: string;
  closeModal?(): void;
}

export interface IIconButton {
  openModal(): void;
}
