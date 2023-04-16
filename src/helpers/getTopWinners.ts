/**
 *
 * @description getTopWinners a method for rearranging top winners
 * @function getTopWinners
 * @property teams {ITournamentClan[]}
 * @returns ITournamentClan[]
 */

import { ITournamentClan } from "../providers/store/reducers/tournament/interfaces";

export const getTopWinners = (teams: ITournamentClan[]) => {
  const [first, second, third] = teams;
  return [
    { position: 2, data: second },
    { position: 1, data: first },
    { position: 3, data: third },
  ];
};
