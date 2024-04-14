import React, { createContext, useEffect, useReducer } from 'react';
import './App.css';
import { AllLanguages, allLanguages } from './lang';
import { Comp1 } from './components/Comp1';


type LangContextType = {
  lang: AllLanguages;
};

export const LangContext = createContext<LangContextType>({ lang: 'es' });
export const SetLangContext = createContext<React.Dispatch<Action>>(() => { });

export type Action = {
  type: 'reset'
} | {
  type: 'set',
  value: AllLanguages
}

type State = {
  lang: AllLanguages;
}

// const storedLang=localStorage.getItem('lang') as AllLanguages
// console.log(storedLang)

const initialState: State = {
  lang: localStorage.getItem('lang') as AllLanguages || 'pt'
};

const reducer: React.Reducer<State, Action> = (state: { lang: AllLanguages }, action: Action) => {
  switch (action.type) {
    case 'reset': {
      console.log("Reset dal reducer")
      return { lang: 'en' }
    }
    case 'set': {
      console.log("Set dal reducer")
      localStorage.setItem('lang', action.value)
      return { lang: action.value }
    }
    default: return { lang: state.lang }
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  // However, there are cases where using useEffect might be beneficial. For instance, if you have multiple components that need access 
  // to the same data stored in localStorage, you might want to centralize the retrieval logic in a single useEffect hook in a higher-level component. 
  // This way, you avoid duplicating the code to read from localStorage in multiple places.
  // useEffect(() => {
  //   const storedLang = localStorage.getItem('lang');
  //   if (storedLang) {
  //     dispatch({ type: 'set', value: storedLang as AllLanguages });
  //   }
  // }, []);


  return (
    <div className="App">
      <SetLangContext.Provider value={dispatch}>
        <LangContext.Provider value={state}>
          <h1>APP</h1>
          <Comp1></Comp1>
        </LangContext.Provider>
      </SetLangContext.Provider>

      <h2>Cambia lingua dall'App</h2>
      <div className='right-section'>
        <select
          value={state.lang}
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
                style={{ fontWeight: state.lang === item ? 'bold' : 'normal' }}
              >
                {item}
              </option>)
          )}
        </select>

      </div>
    </div>
  );
}

export default App;
