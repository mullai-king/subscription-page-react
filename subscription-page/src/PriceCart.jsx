import React from "react";

function PriceCart({props}) {
  return (
    // <div  className="col-lg-4 col-md-8">
      <div className='card  mb-lg-0'>
        <div className='card-body'>
          <h5 className="card-title  text-center text uppercase">{props.title}</h5>
          <h6 className="card-price text-center">{props.price}<span className="period">/Month</span></h6>
          <hr/>
          <ul className="feature-ul">
            {props.features.map((item)=>{
              return(
                <li className={item.available ? '':'text-muted'}>
                  <span>{item.access}</span>
                </li>
              )
            })}
          </ul>
          <div className="d-grid">
              <button className="btn btn-primary text-uppercase">Button</button>
          </div>
        </div>
      </div>
      // { </div>}
  );
}

export default PriceCart;
