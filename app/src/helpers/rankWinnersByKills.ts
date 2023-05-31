/**
 *
 * @description getWinners a method for getting tournament winners
 * @function getWinners
 * @property participates {ITournamentClan[]}
 * @returns string
 */

import { getTeamTotalKills } from "./getTeamTotalKills";
import { ITournamentClan } from "../providers/store/reducers/participants/interfaces";

export const rankWinnersByKills = (
  participates?: ITournamentClan[]
): ITournamentClan[] => {
  if (!participates?.length) {
    return [] as ITournamentClan[];
  }

  const rankingMap: Record<
    ITournamentClan["id"],
    { kills: number; participant: ITournamentClan }
  > = {};

  for (let index = 0; index < participates.length; index++) {
    const participant = participates[index];
    const kills = getTeamTotalKills(participant.team);
    rankingMap[participant.id] = { kills, participant };
  }

  const ranks = Object.entries(rankingMap).sort(
    ([, a], [, b]) => b.kills - a.kills
  );

  return ranks.map(([_, { participant }]) => participant);
};
