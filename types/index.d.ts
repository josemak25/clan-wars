import Reactotron from "reactotron-react-native";
import {
  Control,
  useForm,
  FieldErrors,
  UseFormSetValue,
  UseFormSetError,
  UseFormGetValues,
} from "react-hook-form";
import {
  ITournamentClan,
  ITournamentTeam,
} from "../src/providers/store/reducers/tournament/interfaces";

declare global {
  interface Console {
    tron: (typeof Reactotron)["log"];
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

export interface IAddPlayerFormStep
  extends Omit<IFormStep, "icon" | "highlighted"> {
  key: keyof ITournamentTeam;
}

export type FormStepProps<T = ITournamentClan> = {
  errors: FieldErrors<T>;
  control: Control<T, any>;
  setValue: UseFormSetValue<T>;
  setError: UseFormSetError<T>;
  clearErrors: UseFormClearErrors<T>;
  getValues: UseFormGetValues<ITournamentClan>;
};

export interface GroupInterface {
  id: number;
  name: string;
}
