/**
 *
 * @description getWinnersTrophies a method for getting winners trophies
 * @function getWinnersTrophies
 * @property winners {ITournamentClan[]}
 * @returns ITournamentClan[]
 */

import { ParticipantProps } from "../components/participant";
import { ITournamentClan } from "../providers/store/reducers/tournament/interfaces";

const icons: ParticipantProps["icon"][] = [
  "ios-trophy",
  "ios-medal",
  "ios-star",
];

const background: ParticipantProps["iconBackground"][] = [
  "#5f31e0",
  "#d4af37",
  "#7b4c1e",
];

export const getWinnersTrophies = (winners: ITournamentClan[]) => {
  const trophyMap: Record<
    ITournamentClan["id"],
    Pick<ParticipantProps, "icon" | "iconBackground">
  > = {};

  for (let index = 0; index < winners.length; index++) {
    const winner = winners[index];

    trophyMap[winner.id] = {
      icon: icons[index],
      iconBackground: background[index],
    };
  }

  return trophyMap;
};
