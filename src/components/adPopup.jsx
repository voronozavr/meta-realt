import React from 'react';
import propTypes from 'prop-types';
import '../css/adPopup.css';

const adPopup = ({ ad, closeBtnHandler }) => (
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
        </tbody>
      </table>
    </div>
  </div>
);

adPopup.propTypes = {
  ad: propTypes.instanceOf(Object).isRequired,
  closeBtnHandler: propTypes.func.isRequired,
};

export default adPopup;
