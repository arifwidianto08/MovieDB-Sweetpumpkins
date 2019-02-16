// Navigation
export interface NavigationProps {}
export interface NavigationState {}

//Selection
export interface SelectionProps {
  getGenres: (apiUrl: string) => void;
  genres?: object[];
}
export interface SelectionState {}

//Slider
export interface SliderProps {}
export interface SliderState {}
