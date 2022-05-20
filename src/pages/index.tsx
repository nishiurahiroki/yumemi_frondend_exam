import Layout from "../components/layout"
import PrefCheckLists from "../components/PrefCheckLists"

export default function Index() {
  return (
    <div>
      <PrefCheckLists
        prefs={[]}
        onChange={() => {}}
      />
    </div>
  )
}

Index.getLayout = function getLayout(page) {
  return (
    <Layout title="トップ画面">{page}</Layout>
  )
}