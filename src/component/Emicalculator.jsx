import React, { useState } from 'react'
import './Emicalculator.css'

function Emicalculator() {
    let [loadAmount, setLoanAmount] = useState(100000)
    let [intrest, setIntrest] = useState(1)
    let [radioValue, setradioValue] = useState("on")
    let [TenureValue, setTenureValue]= useState(1)
    let [duration, setDuration] = useState(1)

    // & load input change 
    let rangeChange = ({ target: { value } }) => {
        console.log(value)
        setLoanAmount(value)
    }
    // & intrest input change 
    let intrestChange = ({ target: { value } }) => {
        console.log(value)
        setIntrest(value)
    }
    //    & radio value change
    let radioValueMonth = () => {
        setradioValue("month")
    }

    let radioValueYear = ()=>{
        setradioValue("year")
    }



    let tenureValueChange = ({target:{value}})=>{
        setTenureValue(value)
    }
    let durationChange = ({target:{value}})=>{
        setDuration(value)
        console.log(duration);
    }


let intrestRate = (loadAmount*intrest*duration)/100
let totalAmount = Number(loadAmount)+intrestRate
    return (
        <section>
            <div className="box1">
                {/* loan amount */}
                <div className="loanAmount">
                    <h5>Loan amount</h5>
                    <input onChange={rangeChange} className='loanInput' type="text" value={`₨ ` + loadAmount} />
                    <input id="typeinp" onChange={rangeChange} type="range" min="100000" max="300000000" value={loadAmount} step={3} />
                    <div className='details'>
                                        <h5>₨ 1L</h5>
                                        <h5>₨ 30Cr</h5>
                                    </div>
                </div>
                {/* intrest. */}
                <div className="IntrestRate">
                    <h5>Illustrative Interest Rate p.a.</h5>
                    <input onChange={intrestChange} className='loanInput' type="text" value={intrest + `% `} />
                    <input id="typeinp" onChange={intrestChange} type="range" min="1" max="20" value={intrest} />
                    <div className='details'>
                                        <h5>1%</h5>
                                        <h5>20%</h5>
                                    </div>
                </div>
                {/* Tenure */}
                <div className='Tenure'>
                    <h5>Tenure(month<input name='duration' onClick={radioValueMonth} type="radio" /> year <input onClick={radioValueYear} name='duration' type="radio" /> )</h5>
                    {
                        radioValue == "year" ?
                        (<>
                            <input onChange={durationChange} className='TenureInput' type="text" value={TenureValue} />
                            <input id="typeinp" onChange={durationChange} type="range" min="2" max="20" value={TenureValue} />
                            <div className='details'>
                                    <h5>1 Years</h5>
                                    <h5>30 Years</h5>
                                </div>
                        </>)
                        :
                            (<>
                                    <input onChange={durationChange} className='TenureInput' type="text" value={duration} />
                                    <input id="typeinp" onChange={durationChange} type="range" min="30" max="360" value={duration} />
                                    <div className='details'>
                                        <h5>30 Months</h5>
                                        <h5>360 Months</h5>
                                    </div>
                            </>)
                            
                            
                    }

                </div>
            </div>
            {/* <hr /> */}
            {/* box2 */}
            <div className="box2">
                <div className='calculations'>
                    <div className='clcAmount'>
                        <div>
                            <h5>Principal amount</h5>
                            <h1>● ₨ {loadAmount}</h1>
                        </div>
                        <br />
                        <div>
                            <h5>Interest amount</h5>
                            <h1>● ₨ {parseFloat(intrestRate)}</h1>
                        </div>
                        <br />
                        <div>
                            <h5>Total amount payable</h5>
                            <h1>● ₨ {totalAmount}</h1>
                        </div>
                        <h1></h1>
                        <h1></h1>
                    </div>
                    <div className='graph'>
                        <div className='circle'></div>
                    </div>
                </div>
                <div className='totalAmount'>
                    <h1>{`your total EMI is ${Math.floor(totalAmount/duration)}`}</h1>
                </div>
            </div>
        </section>
    )
}

export default Emicalculator