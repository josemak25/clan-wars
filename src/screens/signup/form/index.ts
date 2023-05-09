import { FormStepTwo } from "./form-step-two";
import { FormStepOne } from "./form-step-one";
import { FormStepSix } from "./form-step-six";
import { FormStepFour } from "./form-step-four";
import { FormStepFive } from "./form-step-five";
import { FormStepThree } from "./form-step-three";
import { IFormStep } from "../../../../types";
import { generateId } from "../../../helpers";

export * from "./form-steps-indicator";

export const forms = [
  FormStepOne,
  FormStepTwo,
  FormStepThree,
  FormStepFour,
  FormStepFive,
  FormStepSix,
];

export const defaultFormSteps: IFormStep[] = [
  {
    isViewable: true,
    icon: "android",
    id: generateId(),
    key: "clan_name",
    highlighted: true,
    title: "Clan name",
  },
  {
    id: generateId(),
    key: "team_name",
    isViewable: false,
    highlighted: true,
    icon: "basketball",
    title: "Team name",
  },
  {
    icon: "ansible",
    key: "clan_logo",
    id: generateId(),
    isViewable: false,
    highlighted: true,
    title: "Clan logo",
  },
  {
    key: "team",
    id: generateId(),
    highlighted: true,
    isViewable: false,
    icon: "alarm-bell",
    title: "Build your team",
  },
  {
    id: generateId(),
    title: "contact",
    isViewable: false,
    highlighted: true,
    icon: "phone-classic",
    key: "contact_phone_number",
  },
  {
    id: generateId(),
    isViewable: false,
    highlighted: false,
    icon: "gauge-full",
    title: "confirmation",
    key: "contact_email_address",
  },
];
