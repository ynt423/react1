import "../styles/index.css";
import React, { useState, useEffect } from "react";
//import Button from "react-bootstrap/Button";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";
const RouteSearch = () => {
  const [BusInput, setBusInput] = useState("");
  return (
    <div>
      RouteSearch
      <div className="RouteSection">
        <div className="index-title">路線搜尋</div>
        <div className="index-content">
          <div className="routesearch">
            <div className="routecontent">
              <div>
                <label htmlFor="input-search">選擇路線</label>
              </div>
              <div className="searchbtn"></div>
              <div>目的地 </div>
              <div>
                <b> 竹園邨 </b>
                <span>⇋</span>
                <b> 尖沙咀碼頭 </b>
              </div>
            </div>
            <div className="searchbtn">
              <button
                type="button"
                className="btn btn-default"
                //onClick="search()"
              >
                查看路線
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteSearch;
