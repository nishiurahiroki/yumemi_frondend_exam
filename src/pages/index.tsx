import Layout from "../components/layout"
import PrefecturesCheckList from "../components/PrefecturesCheckList"

export default function Index() {
  return (
    <div>
      <PrefecturesCheckList
        prefectures={[]}
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