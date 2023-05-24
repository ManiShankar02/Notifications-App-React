const Notification= props =>{
    const containerClassName = {`notification-container ${className}`}

  return (
    <div className={containerClassName}>
      <img
            src={https://assets.ccbp.in/frontend/react-js/primary-icon-img.png}
            className="image"
          />
          <p className="message"> {Information Message}</p>

          <img
            src={https://assets.ccbp.in/frontend/react-js/success-icon-img.png}
            className="image"
          />
          <p className="message"> {Success Message}</p>

          <img
            src={https://assets.ccbp.in/frontend/react-js/warning-icon-img.png}
            className="image"
          />
          <p className="message"> Warning Message</p>

          <img
            src={https://assets.ccbp.in/frontend/react-js/danger-icon-img.png}
            className="image"
          />
          <p className="message"> Error Message</p>
        
    </div>
  )
}
}

const element = (
  <div className="container">
    <div className="sub-container">
      <h1 className="head"> Notifications</h1>
        
    </div>
  </div>
);

ReactDOM.render(<Notification />,element, document.getElementById("root"));
ReactDOM.render(<Notification />,element, document.getElementById("root"));
ReactDOM.render(<Notification />,element, document.getElementById("root"));
ReactDOM.render(<Notification />,element, document.getElementById("root"));
