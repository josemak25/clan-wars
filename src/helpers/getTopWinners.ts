/**
 *
 * @description getTopWinners a method for rearranging top winners
 * @function getTopWinners
 * @property teams {ITournamentClan[]}
 * @returns ITournamentClan[]
 */

import { ITournamentClan } from "../providers/store/reducers/participants/interfaces";

export const getTopWinners = (teams: ITournamentClan[]) => {
  const [first, second, third] = teams;
  const temp = {} as ITournamentClan;

  return [
    { position: 2, data: second || temp },
    { position: 1, data: first || temp },
    { position: 3, data: third || temp },
  ];
};
