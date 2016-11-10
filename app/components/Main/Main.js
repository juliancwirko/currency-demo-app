import React from 'react';

const Main = (props) => (
  <div>
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          {props.children}
        </div>
      </div>
    </div>
  </div>
);

Main.propTypes = {
  children: React.PropTypes.element.isRequired,
};

Main.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

export default Main;
