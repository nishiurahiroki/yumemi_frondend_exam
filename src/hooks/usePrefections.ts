import useSWR from 'swr';

import { getPrefections } from '../repositories/prefectures';

const fetcher = () => getPrefections();

export default function usePrefections(fallbackData) {
  const { data, error, mutate } = useSWR('getPrefections', fetcher, {
    suspense: true,
    fallbackData,
  });

  return {
    prefs: data?.result,
    error,
    mutate,
  };
}
