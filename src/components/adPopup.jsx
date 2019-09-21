import React from 'react';
import propTypes from 'prop-types';
import entityProps from '../propTypes';
import '../scss/adPopup.scss';

const component = ({ ad, pics, closeBtnHandler }) => (
  <div className="adPopup">
    <div className="adPopupContent">
      <button type="button" onClick={closeBtnHandler}>close</button>
      <table className="adPopupTable">
        <tbody>
          <tr>
            <td>address</td>
            <td>{ad.address}</td>
          </tr>
          <tr>
            <td>room(s)</td>
            <td>{ad.rooms}</td>
          </tr>
          <tr>
            <td>
              square(m
              <sup>
                <small>
                  2
                </small>
              </sup>
              )
            </td>
            <td>{ad.square}</td>
          </tr>
          <tr>
            <td>price(BYN)</td>
            <td>{ad.price}</td>
          </tr>
          <tr>
            <td className="tdCenter" colSpan="2">{ad.description}</td>
          </tr>
          <tr>
            <td className="tdCenter" colSpan="2">{`Ad parsed at: ${ad.createdAt}`}</td>
          </tr>
          <tr>
            <td colSpan="2">
              <div className="adPopupPicsList">
                {pics.map(pic => (
                  <img className="adPopupPic" key={pic.id} src={pic.url} alt="ad-pics" />
                ))}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

component.propTypes = {
  ad: entityProps.ad.isRequired,
  pics: entityProps.pics.isRequired,
  closeBtnHandler: propTypes.func.isRequired,
};

export default component;
