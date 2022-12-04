import { useState } from "react";
import { Card, Col,Row } from "reactstrap";
import { Link } from "react-router-dom";
import "./mainpage.css";
import Arrow from  "../assets/right-arrow-w.png";
import User from "../assets/user.png";
import  Time from "../assets/time-past.png";
import Usdcircle from "../assets/usd-circle.png";
import Histogram from "../assets/chart-histogram.png";
import Commentquestion from "../assets/comment-question.png";
import Moneybill from "../assets/money-bill-wave.png";
import Badgecheck from "../assets/badge-check.png";
import Ethereum from "../assets/ethereum.png";
import Rate from "../assets/interest-rate.png"
import Righta from "../assets/right-a.png";
// import Carda from './components/Carda';
// import DUMMY_DATA from "../assets/Modules";

const MainPage=()=>{

    return(
        <div className="container-fluid" >
            <Row>
        <div className="result-area">

<div className="res-body">

    <img alt="" src={Righta} className="history"/>

    <a href="#"> <img alt="" src={Histogram} className="history"/></a>
    <img alt="" src={Time} className="history"/>
    <img alt="" src={Usdcircle} className="history"/>
    <img alt="" src={Commentquestion} className="history"/>
    <img alt="" src={Moneybill} className="history"/>
    <img alt="" src={Badgecheck} className="history"/>

</div>

<div className="res-summary">

    <h1 className="dashboard-txt">Dashboard Overview</h1>

    <nav>
        <ul>

            <div className="circular-bar-accounts">
                <a href="#" className="active-accounts">Account</a>
                <a href="#" className="username-accounts" style={{textTransform:"none"}}>Username</a>
            </div>

        </ul>

        <img alt="" src={User} className="user"/>

    </nav>
<div className="analyst-cont">
        <div className="card">
            <div className="heading">
                <img alt="" src={Rate} className="dashboard-img"/>
                <h1 className="borrow-txt">Borrower</h1>

            </div>
            <div className="text">
                Amount<input type="text" placeholder="Max amount 15k"/>

            </div>
            <div className="collateral">
                Collateral
            </div>
            <div className="but"> <button className="the-button"> <img alt="" src={Ethereum}
                        className="eth-lend"/></button></div>
                        <a href="#" className="find-lenderers" style={{color:"#0a0a0a"}}>
                        <img alt="" src={Righta} className="right-arrow"/></a>

        </div>
        <div className="card">
            <div className="heading">
                <img alt="" src={Rate} className="dashboard-img"/>
                <h1 className="borrow-txt">Lender</h1>

            </div>
            <div className="text">
                Amount<input type="text" placeholder="Max amount 15k"/>

            </div>
            <div className="collateral">
                Interest
            </div>
                        <div className="meter">
                            <div className="slider">
                                <input type = "range" min="0" max="15" onchange="rangevalue.value=value"/>
                                  <output id="rangevalue">15</output>
                                </div>
                               
                        </div>
                        <Link to="/ChatBot" className="find-lenderers" style={{color:"#0a0a0a"}}>
                            <img alt="" src={Righta} className="right-arrow-lender"/></Link>

        </div>


    </div>
    <div className="gcard">
        <div className="graphs"></div>
        <div className="graphs"></div>
        <div className="graphs"></div>
    </div>

    <div className="analyst-cont" style={{position:"relative",marginTop:"0.5%"}}>
        <div className="card">
        <div className="container-fluid m-0" style={{padding:'45px', height:"500px", overflow:"auto"}} >
       {/* <div className="row">
       { data.map(record=><Carda value={record.value} address={record.address} type={record.type} status={record.status} />)
        }
       </div> */}
    </div>
        </div>
        <div className="card">
     
        </div>


    </div>

</div>

</div></Row>
        </div>

    );
};

export default MainPage;
