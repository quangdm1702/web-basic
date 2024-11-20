import { useTranslation } from "react-i18next";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";


function RecoilDemo() {
  return (
    <div className="bg-blue-100 w-96 rounded-sm shadow-sm p-4 flex flex-col">
      <TextInput />
      <CharacterCount />
    </div>
  );
}
export default RecoilDemo;


const demoAtom = atom({
  key: "demo_atom", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});


const demoSelector = selector({
  key: "demo_selector", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(demoAtom);
    return text.length;
  },
});


function TextInput() {
  const [text, setText] = useRecoilState(demoAtom);
  const { t } = useTranslation();
  const onChange = (event: {
    target: { value: string | ((currVal: string) => string) };
  }) => {
    setText(event.target.value);
  };
  return (
    <div>
      <input
        className="p-1 rounded-sm shadow-sm"
        type="text"
        value={text}
        onChange={onChange}
      />
      <br />
      {t("recoil.label_1") + text}
    </div>
  );
}


function CharacterCount() {
  const { t } = useTranslation();
  const count = useRecoilValue(demoSelector);
  return <>{t("recoil.label_2") + count}</>;
}
