import React, { useState } from "react";
import { shallowEqual } from "react-redux";
import { FormattedMessage } from "react-intl";
import { Controller } from "react-hook-form";
import { LayoutChangeEvent } from "react-native";
import { useTheme } from "styled-components/native";

import messages from "../messages";
import { Icon } from "../../../components/icon";
import { FormStepProps } from "../../../../types";
import { settingsActions } from "../../../providers/store/reducers";
import { AddPlayerModal } from "../../../components/add-player-modal";
import { ITournamentTeam } from "../../../providers/store/reducers/tournament/interfaces";
import {
  useSelector,
  useDispatch,
  useOnLayout,
  useFormValidation,
} from "../../../hooks";

import {
  Title,
  Label,
  Spacer,
  SubTitle,
  TeamButton,
  PlayerName,
  ErrorMessage,
  TeamScrollView,
  FormStepWrapper,
  ErrorMessageContainer,
} from "../signup.styles";

const messageIndex = [
  messages.add_team_leader,
  messages.add_second_player,
  messages.add_third_player,
  messages.add_fourth_player,
];

export const FormStepFour: React.FC<FormStepProps> = ({
  watch,
  errors,
  control,
  setValue,
  clearErrors,
}) => {
  const dispatch = useDispatch();
  const [layout, onLayout] = useOnLayout();
  const { hexToRGB, palette } = useTheme();
  const [playerIndex, setPlayerIndex] = useState(0);
  const { clanNameValidation } = useFormValidation();

  const team = watch("team") || [];

  const { selectedTournament } = useSelector(
    ({ tournament }) => tournament,
    shallowEqual
  );

  const onTeamClick = (index: number) => {
    setPlayerIndex(index);
    dispatch(settingsActions.toggleAddPlayerModalVisibility());
  };

  const onTeamLayout = (event: LayoutChangeEvent) => {
    if (event.nativeEvent.layout.width > (Number(layout?.width) || 0)) {
      onLayout(event);
    }
  };

  const onSavePlayer = (player: ITournamentTeam) => {
    team[playerIndex] = player;
    setValue("team", team);
    clearErrors("team");
  };

  return (
    <FormStepWrapper>
      <Title>
        <FormattedMessage {...messages.build_clan_team} />
      </Title>
      <SubTitle>
        <FormattedMessage {...messages.build_clan_team_details} />
      </SubTitle>

      <Spacer size={40} />
      <ErrorMessageContainer
        maxWidth={Number(layout?.width) || 0}
        teamSize={selectedTournament?.team_size!}
      >
        <Label error={!!errors.team?.message}>
          <FormattedMessage
            {...messages.add_your_players}
            values={{ isMultiple: selectedTournament?.team_size! > 1 }}
          />
        </Label>

        {errors.team && <ErrorMessage>{errors.team.message}</ErrorMessage>}
      </ErrorMessageContainer>

      <TeamScrollView>
        {[...Array(selectedTournament?.team_size)].map((_, index) => (
          <Controller
            key={index}
            name="team"
            control={control}
            rules={clanNameValidation}
            render={() => (
              <TeamButton
                onLayout={onTeamLayout}
                error={!!errors.team?.message}
                onPress={() => onTeamClick(index)}
                isAdded={!!team[index]?.player_ign}
              >
                {team[index]?.avatar ? (
                  <Icon
                    size={35}
                    name="avatar"
                    avatarId={team[index]?.avatar}
                  />
                ) : (
                  <Icon
                    name="user"
                    color={
                      !!errors.team?.message
                        ? hexToRGB(palette.error, 0.8)
                        : "#7d69ff"
                    }
                  />
                )}
                <PlayerName>
                  {team[index]?.player_ign || (
                    <FormattedMessage {...messageIndex[index]} />
                  )}
                </PlayerName>
              </TeamButton>
            )}
          />
        ))}
      </TeamScrollView>

      <AddPlayerModal player={team[playerIndex]} onSavePlayer={onSavePlayer} />
    </FormStepWrapper>
  );
};
