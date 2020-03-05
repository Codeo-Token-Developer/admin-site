import React, {Component} from 'react'
import Header from "./Header"
import Footer from "./Footer"
import axios from 'axios'

var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
        <Header />
        <div className="page-wrapper">
        {/* Left Sidenav */}
        <div className="left-sidenav">
            <div className="main-icon-menu">
                <nav className="nav">
                    <a href="#MetricaAnalytic" className="nav-link leftmenu-sm-item bg-pink shadow-pink" data-toggle="tooltip-custom" data-placement="right" title data-original-title="Analytics">
                        <svg className="nav-svg" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{enableBackground: 'new 0 0 512 512'}} xmlSpace="preserve">
                            <g>
                                <path d="M184,448h48c4.4,0,8-3.6,8-8V72c0-4.4-3.6-8-8-8h-48c-4.4,0-8,3.6-8,8v368C176,444.4,179.6,448,184,448z" />
                                <path className="svg-primary" d="M88,448H136c4.4,0,8-3.6,8-8V296c0-4.4-3.6-8-8-8H88c-4.4,0-8,3.6-8,8V440C80,444.4,83.6,448,88,448z" />
                                <path className="svg-primary" d="M280.1,448h47.8c4.5,0,8.1-3.6,8.1-8.1V232.1c0-4.5-3.6-8.1-8.1-8.1h-47.8c-4.5,0-8.1,3.6-8.1,8.1v207.8
                                            C272,444.4,275.6,448,280.1,448z" />
                                <path d="M368,136.1v303.8c0,4.5,3.6,8.1,8.1,8.1h47.8c4.5,0,8.1-3.6,8.1-8.1V136.1c0-4.5-3.6-8.1-8.1-8.1h-47.8
                                            C371.6,128,368,131.6,368,136.1z" />
                            </g>
                        </svg>
                    </a>{/*end MetricaAnalytic*/}
                </nav>{/*end nav*/}
            </div>{/*end main-icon-menu*/}
            <div className="main-menu-inner">
                <div className="menu-body slimscroll">
                    <div id="MetricaAnalytic" className="main-icon-menu-pane active">
                        <div className="title-box">
                            <h6 className="menu-title">Admin Dashboard</h6>
                        </div>
                        <ul className="nav">
                            <li className="nav-item">
                                <a className="nav-link" href="index.html"><i className="dripicons-meter" />Dashboard</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="user-management.html"><i className="dripicons-user-group" />User Management</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="cms-update.html"><i className="dripicons-document" />CMS Update</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="ledger.html"><i className="dripicons-document" />Ledger</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="kyc-approval.html"><i className="dripicons-document" />KYC Approval</a>
                            </li>
                        </ul>
                    </div>{/* end Analytic */}
                </div>{/*end menu-body*/}
            </div>{/* end main-menu-inner*/}
        </div>
        {/* end left-sidenav*/} {/* Page Content*/}
        <div className="page-content">
            <div className="container-fluid">
                {/* Page-Title */}
                <div className="row">
                    <div className="col-sm-12">
                        <div className="page-title-box">
                            <div className="float-right">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="javascript:void(0);">Admin</a></li>
                                    <li className="breadcrumb-item active">Ledger</li>
                                </ol>
                            </div>
                            <h4 className="page-title">Ledger</h4>
                        </div>{/*end page-title-box*/}
                    </div>{/*end col*/}
                </div>{/*end row*/} {/* end page title end breadcrumb */}
                <div className="row">
                    <div className="col-lg-3">
                        <div className="card card-eco">
                            <div className="card-body">
                                <h4 className="title-text mt-0">Total Wallet</h4>
                                <div className="d-flex justify-content-between">
                                    <h3 className="text-purple">342.351</h3>
                                    <i className="dripicons-user-group card-eco-icon bg-purple shadow-purple align-self-center" />
                                </div>
                            </div>{/*end card-body*/}
                        </div>{/*end card*/}
                    </div>{/*end col*/}
                    <div className="col-lg-3">
                        <div className="card card-eco">
                            <div className="card-body">
                                <h4 className="title-text mt-0">Total Transaction</h4>
                                <div className="d-flex justify-content-between">
                                    <h3 className="text-pink">86.513</h3>
                                    <i className="dripicons-cart card-eco-icon bg-pink shadow-pink align-self-center" />
                                </div>
                            </div>{/*end card-body*/}
                        </div>{/*end card*/}
                    </div>{/*end col*/}
                    <div className="col-lg-3">
                        <div className="card card-eco">
                            <div className="card-body">
                                <h4 className="title-text mt-0">Total Volume Codeo</h4>
                                <div className="d-flex justify-content-between">
                                    <h3 className="text-secondary">7.214</h3>
                                    <i className="dripicons-jewel card-eco-icon bg-secondary shadow-secondary align-self-center" />
                                </div>
                            </div>{/*end card-body*/}
                        </div>{/*end card*/}
                    </div>{/*end col*/}
                    <div className="col-lg-3">
                        <div className="card card-eco">
                            <div className="card-body">
                                <h4 className="title-text mt-0">Total Codeo</h4>
                                <div className="d-flex justify-content-between">
                                    <h3 className="text-warning">4.421</h3>
                                    <i className="dripicons-wallet card-eco-icon bg-warning shadow-warning align-self-center" />
                                </div>
                            </div>{/*end card-body*/}
                        </div>{/*end card*/}
                    </div>{/*end col*/}
                </div>{/*end row*/}
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body order-list">
                                <h4 className="header-title mt-0 mb-3">Ledger</h4>
                                <div className="table-responsive">
                                    <table className="table table-hover mb-0">
                                        <thead className="thead-light">
                                            <tr>
                                                <th className="border-top-0">Date Create Wallet</th>
                                                <th className="border-top-0">User Wallet</th>
                                                <th className="border-top-0">Wallet Address</th>
                                                <th className="border-top-0">Actual Balance</th>
                                                <th className="border-top-0">ETH Actual Balance</th>
                                                <th className="border-top-0">Private Key</th>
                                                <th className="border-top-0">Action</th>
                                            </tr>{/*end tr*/}
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>17-02-2020 11:23 AM</td>
                                                <td>Master Thomas</td>
                                                <td>0x3025234435236421</td>
                                                <td>3.214 CODEO</td>
                                                <td>476 ETH</td>
                                                <td>a873s2341swf83612638swegjhygbs</td>
                                                <td>
                                                    <button className="btn btn-xs btn-danger">Terminate</button>
                                                    <button className="btn btn-xs btn-warning">Lock</button>
                                                </td>
                                            </tr>{/*end tr*/}
                                            <tr>
                                                <td>17-02-2020 03:44 AM</td>
                                                <td>CEO Agatha</td>
                                                <td>0x3025234435236421</td>
                                                <td>5.224 CODEO</td>
                                                <td>875 ETH</td>
                                                <td>a214s63471349aa3718kutknywaqe2</td>
                                                <td>
                                                    <button className="btn btn-xs btn-danger">Terminate</button>
                                                    <button className="btn btn-xs btn-warning">Lock</button>
                                                </td>
                                            </tr>{/*end tr*/}
                                            <tr>
                                                <td>17-02-2020 05:45 AM</td>
                                                <td>Dr. Chris</td>
                                                <td>0x3025234435236421</td>
                                                <td>5.567 CODEO</td>
                                                <td>767 ETH</td>
                                                <td>a75649jbvdhwojbj76qfnozjjq72ls</td>
                                                <td>
                                                    <button className="btn btn-xs btn-danger">Terminate</button>
                                                    <button className="btn btn-xs btn-warning">Lock</button>
                                                </td>
                                            </tr>{/*end tr*/}
                                            <tr>
                                                <td>17-02-2020 07:22 AM</td>
                                                <td>Senior Shella</td>
                                                <td>0x3025234435236421</td>
                                                <td>9.982 CODEO</td>
                                                <td>352 ETH</td>
                                                <td>a1ad124513987sjbyiqbhzqbuvsdjbo</td>
                                                <td>
                                                    <button className="btn btn-xs btn-danger">Terminate</button>
                                                    <button className="btn btn-xs btn-warning">Lock</button>
                                                </td>
                                            </tr>{/*end tr*/}
                                        </tbody>
                                    </table> {/*end table*/}
                                </div>{/*end /div*/}
                            </div>{/*end card-body*/}
                        </div>{/*end card*/}
                    </div>{/*end col*/}
                 </div>{/*end row*/}
                </div>{/* container */}
             <Footer/>
            </div>
            {/* end page content */}
          </div>
         {/* end page-wrapper */}
     </div>
      )
   }
 })

export default Ledger;