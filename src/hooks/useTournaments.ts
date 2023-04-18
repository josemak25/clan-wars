import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../providers/store/store";
import { fetchAllTournament } from "../providers/store/reducers";

export function useTournaments() {
  const dispatch = useDispatch<AppDispatch>();
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  const state = useSelector(
    (state: RootState) => state.tournament,
    shallowEqual
  );

  const onRetry = () => dispatch(fetchAllTournament());

  // const hasMore = state.total > state.posts.length;

  const fetchMore = () => {
    if (isFetchingMore) return;

    // if (!hasMore || isFetchingMore) return;

    setIsFetchingMore(true);
    dispatch(fetchAllTournament()).finally(() => setIsFetchingMore(false));
  };

  useEffect(() => {
    onRetry();
  }, []);

  return {
    ...state,
    onRetry,
    fetchMore,
    hasMore: false,
    isFetchingMore,
  };
}
