
  import React, { Component } from 'react';
  import './bstyle.css';

class BusinessCard extends Component {
  static defaultProps = {
    name: 'Not Specified',
    email: 'Not Specified',
    tel: 'Not Specified',
    photo: 'https://banffventureforum.com/wp-content/uploads/2019/08/no-photo-icon-22.png'
  };

  render() {
    const { name, email, tel, photo } = this.props;

    return (
      <div className="business-card">
        <img src={photo} alt="Profile" />
        <h2>{name}</h2>
        <p>Email: {email}</p>
        <p>Tel: {tel}</p>
      </div>
    );
  }
}

export default BusinessCard;