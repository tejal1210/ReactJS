import React, {useId} from 'react'

function InputBox({
    label,
    amt,
    selectCurr="usd",
    onAmtChange, 
    onCurrChange,
    currOpt=[],
    amtDisabled=false,
    currDisabled=false,
    className = "",
}) {
    const amtId=useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label  
                htmlFor={amtId}
                className="text-black/40 mb-2 inline-block"
                >
                    {label}
                </label>
                <input
                    // takes amount as the input
                    id={amtId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amtDisabled}
                    value={amt}
                    onChange={(e)=> onAmtChange && onAmtChange(e.target.value)}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurr}
                    onChange={(e)=> onCurrChange && onCurrChange(e.target.value)}
                    disabled={currDisabled}
                >
                    {currOpt.map((curr)=>
                    (
                        <option 
                            key={curr}
                            value={curr}
                        >
                            {curr}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
