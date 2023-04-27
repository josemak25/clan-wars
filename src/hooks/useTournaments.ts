import { useEffect, useState } from "react";
import _omit from "lodash/omit";
import { shallowEqual } from "react-redux";

import { useDispatch, useSelector } from "./store";
import { fetchAllTournament } from "../providers/store/reducers";

export function useTournaments() {
  const dispatch = useDispatch();
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  const state = useSelector(
    ({ tournament }) => _omit(tournament, "selectedTournament"),
    shallowEqual
  );

  const onRetry = () => dispatch(fetchAllTournament());

  // TODO: change to subabase pagination counter
  const hasMore = state.data.length > state.data.length;

  const fetchMore = () => {
    if (isFetchingMore) return;

    if (!hasMore || isFetchingMore) return;

    setIsFetchingMore(true);
    dispatch(fetchAllTournament()).finally(() => setIsFetchingMore(false));
  };

  useEffect(() => {
    onRetry();
  }, []);

  return {
    ...state,
    hasMore,
    onRetry,
    fetchMore,
    isFetchingMore,
  };
}
