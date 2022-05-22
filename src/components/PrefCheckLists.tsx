import { useState } from 'react';

type Props = {
  prefs: any[];
  onChange: (checkedList: any[]) => void;
};

export default function PrefCheckLists(props: Props) {
  const [checkedList, setCheckedList] = useState(
    props.prefs.map((pref) => ({
      prefCode: pref.prefCode,
      checked: false,
    })),
  );

  const onChange =
    ({ prefCode, prefName }) =>
    (e: any) => {
      const changed: any[] = checkedList.map((c) => {
        if (c.prefCode !== prefCode) return c;
        return { prefCode, prefName, checked: e.target.checked };
      });

      setCheckedList(changed);
      props.onChange(changed.filter((c) => c.checked));
    };

  return (
    <div>
      <div>都道府県</div>
      <br />
      {props.prefs.map(({ prefCode, prefName }) => {
        const checked: boolean = checkedList.find(
          (c) => c.prefCode === prefCode,
        )?.checked;
        return (
          <span key={prefCode}>
            <input
              onChange={onChange({ prefCode, prefName })}
              type='checkbox'
              id={prefCode}
              checked={checked}
            />
            <label htmlFor={prefCode}>{prefName}</label>
          </span>
        );
      })}
    </div>
  );
}
