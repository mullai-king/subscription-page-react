import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PriceCart from './PriceCart.jsx'

function App() {
    const data = [
      {
        title: "FREE",
        price: "$0",
        features: [
          { access: "Single User", available: true },
          { access: "50GB Storage", available: true },
          { access: "Unlimited Public Projects", available: true },
          { access: "Community Access", available: true },
          { access: "Unlimited Private Projects", available: false },
          { access: "Dedicated Phone Support", available: false },
          { access: "Free Subdomain", available: false },
          { access: "Monthly Status report", available: false },
        ],
      },
      {
        title: "PLUS",
        price: "$9",
        features: [
          { access: "5 User", available: true },
          { access: "50GB Storage", available: true },
          { access: "Unlimited Public Projects", available: true },
          { access: "Community Access", available: true },
          { access: "Unlimited Private Projects", available: true },
          { access: "Dedicated Phone Support", available: true },
          { access: "Free Subdomain", available: false },
          { access: "Monthly Status report", available: false },
        ],
      },
      {
        title: "PRO",
        price: "$49",
        features: [
          { access: "Unlimited User", available: true },
          { access: "50GB Storage", available: true },
          { access: "Unlimited Public Projects", available: true },
          { access: "Community Access", available: true },
          { access: "Unlimited Private Projects", available: true },
          { access: "Dedicated Phone Support", available: true },
          { access: "Free Subdomain", available: true },
          { access: "Monthly Status report", available: true },
        ],
      },
    ];
  return (
    <div className='App'>
        
          <div className='container'>
            <div className='row col-lg-4 col-md-6 col-sm-12 col-xsm-12 col-xl-4 card-container'>
              {/* <div className='col-lg-4 col-md-6 col-sm-12 col-xsm-12 col-xl-4 card-container'> */}
                {data.map((item)=>{
                  return <PriceCart props ={item}/>
                })}
              {/* </div> */}
            </div>
          </div>
      
    </div>
  );
}

export default App;