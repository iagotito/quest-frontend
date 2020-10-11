import React from 'react';
import { withRouter } from 'react-router-dom';

import "../style.css";

const Dashboard = () => {
  return(
    <div>
      <section>
      <button>Sign Up</button>
          <br/><br/>
          <button>Create new tag</button>
          <p>[tags list (tbi)]</p>      
      </section>
    </div>
  )
};

export default withRouter(Dashboard);