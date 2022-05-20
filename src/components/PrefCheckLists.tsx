import {useId} from 'react'

type Props = {
  prefs : any[],
  onChange : (checkedList : any[]) => void
}

export default function PrefCheckLists(props : Props) {
  const id: string = useId()

  return (
    <div>
      <div>都道府県</div>
      <br/>
      {props.prefs.map(prefecture => (
        <div>
          <input type="checkbox" id={id}/>
          <label htmlFor={id}>{prefecture.name}</label>
        </div>
      ))}
    </div>
  )
}