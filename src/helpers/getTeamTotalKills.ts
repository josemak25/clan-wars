/**
 *
 * @description getTeamTotalKills a method for total kills per team in the tournament
 * @function getTeamTotalKills
 * @property team {ITournamentTeam[]}
 * @returns number
 */

import { ITournamentTeam } from "../providers/store/reducers/tournament/interfaces";

export const getTeamTotalKills = (team: ITournamentTeam[]): number => {
  return team.reduce((acc, player) => (acc += player.total_kills), 0);
};
