import { useCallback, useEffect, useState } from "react";
import { shallowEqual } from "react-redux";

import { useDispatch, useSelector } from "./store";
import { fetchTournamentParticipants } from "../providers/store/reducers";

export function useParticipants() {
  const dispatch = useDispatch();
  const [hasFetched, setHasFetched] = useState(false);

  const { selectedTournament } = useSelector(
    ({ tournament }) => tournament,
    shallowEqual
  );

  const state = useSelector(
    ({ tournament_participants }) => tournament_participants,
    shallowEqual
  );

  const onRetry = useCallback(
    () =>
      dispatch(fetchTournamentParticipants(selectedTournament?.id!)).then(() =>
        setHasFetched(true)
      ),
    [selectedTournament?.id]
  );

  useEffect(() => {
    if (!hasFetched && selectedTournament?.id) {
      onRetry();
    }
  }, [hasFetched, selectedTournament?.id]);

  return { ...state, onRetry };
}
