import { useState } from 'react'; // Added useEffect
import {InputBox} from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amt, setAmt] =useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [res, setRes] = useState(0)

  const currInfo = useCurrencyInfo(from)
  const convert= ()=>{
    setRes(amt*currInfo[to])
  }

  const onSwap = ()=>{
    setFrom(to)
    setTo(from)
    setRes(amt)
    setAmt(res)
  }
  return (
      <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
          }}
      >
          <div className="w-full">
              <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();
                          convert()
                      }}
                  >
                      <div className="w-full mb-1">
                          <InputBox
                              label="From"
                              amt={amt}
                              selectCurr={from}
                              currOpt={Object.keys(currInfo)}
                              onAmtChange={(amt)=>setAmt(amt)}
                              onCurrChange={(currency) => setFrom(currency)}
                          />
                      </div>
                      <div className="relative w-full h-0.5">
                          <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                              onClick={onSwap}
                          >
                              swap
                          </button>
                      </div>
                      <div className="w-full mt-1 mb-4">
                          <InputBox
                              label="To"
                              amt={res}
                              selectCurr={to}
                              currOpt={Object.keys(currInfo)}
                              onAmtChange={(amt)=>setAmt(amt)}
                              onCurrChange={(currency) => setTo(currency)}
                          />
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                          Convert {from.toUpperCase()} to {to.toUpperCase()}
                      </button>
                  </form>
              </div>
          </div>
      </div>
  )};
  export default App