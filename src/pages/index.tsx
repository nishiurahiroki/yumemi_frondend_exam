import { useState, Suspense } from 'react';

import Layout from '../components/layout';
import Loading from '../components/Loading';

import usePrefections from '../hooks/usePrefections';
import usePerYear from '../hooks/usePerYear';

import PrefCheckLists from '../components/PrefCheckLists';
import PopulationGraph from '../components/PopulationGraph';

import { getPrefections } from '../repositories/prefectures';


export default function Index({ fallbackPrefs }) {
  const [checked, setChecked] = useState<string[]>([]);

  const { prefs } = usePrefections(fallbackPrefs);
  const { perYears: graphData } = usePerYear({ prefs: checked });

  /** 都道府県チェックボックス押下時 **/
  const onChangeCheckLists = (checked) => {
    setChecked(checked);
  };

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <PrefCheckLists prefs={prefs} onChange={onChangeCheckLists} />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <PopulationGraph data={graphData} />
      </Suspense>
    </div>
  );
}

Index.getLayout = function getLayout(page) {
  return <Layout title='トップ画面'>{page}</Layout>;
};

export async function getStaticProps() {
  const fallbackPrefs = await getPrefections();

  return {
    props: {
      fallbackPrefs,
    },
  };
}
