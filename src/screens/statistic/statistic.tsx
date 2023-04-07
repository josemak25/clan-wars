import React from "react";
import dayjs from "dayjs";
import { shallowEqual } from "react-redux";

import { useSelector } from "../../hooks";
import { RootState } from "../../providers/store/store";
import { RootTabScreenProps } from "../../../types/navigation";

import {
  Tags,
  Info,
  Title,
  Timer,
  Spacer,
  Container,
  TimerContainer,
  ButtonContainer,
} from "./statistic.styles";

const tags = ["COD Warzone", "PC", "Invitational"];

export const StatisticsScreen: React.FC<
  RootTabScreenProps<"StatisticsScreen">
> = () => {
  const { selectedTournament } = useSelector(
    ({ tournament }: RootState) => tournament,
    shallowEqual
  );

  return (
    <Container>
      <Info>match info</Info>

      <Spacer size={20} />

      <TimerContainer>
        <Timer>
          Starts at •{" "}
          {dayjs(selectedTournament?.start_date).format(
            "ddd DD MMM YYYY hh : mm A"
          )}
        </Timer>

        <Timer>
          <Timer>
            Ends at •{" "}
            {dayjs(selectedTournament?.updated_at).format(
              "ddd DD MMM YYYY hh : mm A"
            )}
          </Timer>
        </Timer>
      </TimerContainer>

      <Title wrap numberOfLines={1}>
        {selectedTournament?.title}
      </Title>

      {selectedTournament?.tags?.length ? (
        <ButtonContainer>
          {selectedTournament.tags.map((tag, index) => (
            <Tags key={`${tag}_${index}`}>{tag}</Tags>
          ))}
        </ButtonContainer>
      ) : null}
    </Container>
  );
};
