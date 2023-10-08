import React from "react";
import "./order.css";
import { order } from "../../assets/data/data";
function Order() {
  return (
    <div className="section__order">
      <div className="box__items ">
        {order.map((item) => {
          return (
            <div key={item.id} className="box">
              <div className="box__content  d-flex align-items-center">
                <div className="number">
                  <h2 className={"h"+item.id}>{item.id}</h2>
                </div>
                <div className="text">
                  <div className="title ">{item.title}</div>
                  <div className="sub__title ">{item.desc}f</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Order;
