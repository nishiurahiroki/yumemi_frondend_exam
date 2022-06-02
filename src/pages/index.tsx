import { useState, Suspense } from 'react';

import Layout from '../components/layout';
import Loading from '../components/Loading';

import usePerYear from '../hooks/usePerYear';

import PrefCheckLists from '../components/PrefCheckLists';
import PopulationGraph from '../components/PopulationGraph';

import { getPrefections } from '../repositories/prefectures';


export default function Index({ fallbackPrefs }) {
  const [checked, setChecked] = useState<string[]>([]);

  const { perYears: graphData } = usePerYear({ prefs: checked });

  const onChangeCheckLists = (checked) => {
    setChecked(checked);
  };

  return (
    <div>
      <PrefCheckLists prefs={fallbackPrefs} onChange={onChangeCheckLists} />

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
  const response = await getPrefections();
  return {
    props: {
      fallbackPrefs : response.result,
    },
  };
}
