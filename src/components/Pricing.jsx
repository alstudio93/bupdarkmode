import { useState } from 'react'
// import monthly from '../src/assets/pricing/bup-plus-monthly.webp'

const Pricing = () => {

    const [showMonthly, setShowMonthly] = useState(true);
    const [showYearly, setShowYearly] = useState(false);

    const handleShowMonthly = () => {
        setShowMonthly(true)
        setShowYearly(false)
    }
    const handleShowYearly = () => {
        setShowMonthly(false)
        setShowYearly(true)
    }

    return (
        <section id="pricing" className='pt-[150px] max-w-[1200px] mx-auto w-[98%] flex flex-col items-center'>
            <div className='flex flex-col items-center gap-y-5'>
                <h2 className='font-quicksand text-section-h2 leading-tight text-transparent bg-clip-text bg-gradient-to-br from-[#13bc6a] to-[#1a9dd0] text-center tracking-wide font-medium'> Go Pro with BŪP®</h2>
                <a
                    href="https://www.bup.bio/register?redirect=pay/5"
                    target="_blank"
                    rel="noopener"
                    className="bg-gradient-to-br from-[#13bc6a] to-[#1a9dd0] text-white w-[500px] p-3 text-base text-center border-none rounded-2xl shadow-lg dark:shadow-none cursor-pointer"
                >Click to get started with your free trial!
                </a>
                <div className='flex gap-x-5 mt-2'>
                    <button onClick={handleShowMonthly} className={`text-sm lg:text-lg shadow-lg dark:shadow-none  p-2 w-[100px] lg:w-[150px] rounded-xl ${showMonthly ? 'bg-gradient-to-br from-[#13bc6a] to-[#1a9dd0] text-white ' : 'border border-slate-200'}`}>Monthly</button>
                    <button onClick={handleShowYearly} className={`text-sm lg:text-lg shadow-lg dark:shadow-none  p-2 w-[100px] lg:w-[150px] rounded-xl ${showYearly ? 'bg-gradient-to-br from-[#13bc6a] to-[#1a9dd0] text-white' : 'border border-slate-200'}`}>Annual</button>
                </div>
            </div>
            <div className='mt-[60px] grid lg:grid-cols-2 justify-items-center'>
                {showMonthly && <a href="https://www.bup.bio/register?redirect=pay/1"><img src="/assets/pricing/monthly.webp" height="600" width="800" /></a>}
                {showYearly && <img src="/assets/pricing/yearly.webp" height="600" width="800" />}
                <img src="/assets/pricing/enterprise.webp" height="600" width="800" />
            </div>
        </section>
    )
}


export default Pricing
