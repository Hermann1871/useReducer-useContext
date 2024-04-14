import { useContext } from "react";
import { Action, LangContext, SetLangContext } from '../App';
import { AllLanguages, allLanguages } from "../lang";

export const Comp1 = () => {
    const { lang } = useContext(LangContext);
    // const { dispatch } = useContext(SetLangContext);
    const dispatch = useContext<React.Dispatch<Action>>(SetLangContext);

    return (<>
        <h1>Comp1</h1>
        <p>Lingua {lang}</p>

        <div className='right-section'>
            <select
                value={lang}
                name="languages"
                // id="languages-select"
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    dispatch({ type: 'set', value: e.target.value as AllLanguages })
                }}
                style={{ fontWeight: 'bold' }}

            >
                {allLanguages.map(
                    (item, index) => (
                        <option
                            // id="languages-option" deve essere varibiale, ad esempio con key
                            // selected={currentLang.lang === item} da warning
                            key={index}
                            value={item}
                            style={{ fontWeight: lang === item ? 'bold' : 'normal' }}
                        >
                            {item}
                        </option>)
                )}
            </select>

        </div>
    </>
    )
}