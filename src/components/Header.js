import React from 'react';

const Header = (props) => (
  <div className="header">
    <div className="container">
      <h1 className="header__title">{props.title}</h1>
      {props.subTitle && <h2 className="heander__subtitle">{props.subTitle}</h2> }
    </div>
  </div>
);

Header.defaultProps = {
  title: 'Indecition',
  subTitle: 'This is awsome!'
}

export default Header;
  

