import Reactotron from "reactotron-react-native";
import { Control, FieldErrors } from "react-hook-form";
import { ITournamentClan } from "../src/providers/store/reducers/session/interfaces";

declare global {
  interface Console {
    tron: typeof Reactotron["log"];
  }
}

console.tron = reactotron.log;

export interface IFormStep {
  id: string;
  icon: string;
  title: string;
  isViewable: boolean;
  highlighted: boolean;
  key: keyof ITournamentClan;
}

export type FormStepProps = {
  errors: FieldErrors<ITournamentClan>;
  control: Control<ITournamentClan, any>;
};
