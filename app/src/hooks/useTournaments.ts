import { useEffect, useState } from "react";
import _omit from "lodash/omit";
import { shallowEqual } from "react-redux";

import { useDispatch, useSelector } from "./store";
import { fetchAllTournament } from "../providers/store/reducers";

export function useTournaments() {
  const dispatch = useDispatch();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  const state = useSelector(
    ({ tournament }) => _omit(tournament, "selectedTournament"),
    shallowEqual
  );

  const onRetry = () => dispatch(fetchAllTournament());

  // TODO: change to subabase pagination counter
  const hasMore = state.data.length > state.data.length;

  const fetchMore = () => {
    if (!hasMore || isFetchingMore) return;

    setIsFetchingMore(true);
    dispatch(fetchAllTournament()).finally(() => setIsFetchingMore(false));
  };

  const onRefresh = () => {
    if (isRefreshing) return;

    setIsRefreshing(true);
    dispatch(fetchAllTournament()).finally(() => setIsRefreshing(false));
  };

  useEffect(() => {
    onRetry();
  }, []);

  return {
    ...state,
    hasMore,
    onRetry,
    onRefresh,
    fetchMore,
    isRefreshing,
    isFetchingMore,
  };
}
