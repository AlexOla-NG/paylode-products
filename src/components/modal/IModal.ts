export interface IModal {
  isModal: boolean;
  closeModal(): void;
  title: string | undefined;
  urlParam: string | undefined;
}
