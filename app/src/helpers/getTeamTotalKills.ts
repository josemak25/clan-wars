/**
 *
 * @description getTeamTotalKills a method for total kills per team in the tournament
 * @function getTeamTotalKills
 * @property team {ITournamentTeam[]}
 * @returns number
 */

import { ITournamentTeam } from "../providers/store/reducers/participants/interfaces";

export const getTeamTotalKills = (team: ITournamentTeam[]): number => {
  return team?.reduce((acc, player) => (acc += player.kills), 0) || 0;
};
