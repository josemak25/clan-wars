import Reactotron from "reactotron-react-native";

declare global {
  interface Console {
    tron: typeof Reactotron["log"];
  }
}

console.tron = reactotron.log;

export interface ICODMCp {
  id: string;
  cover: string;
  image: number;
  title: string;
  amount: number;
  discount: number;
  old_amount: number;
}
