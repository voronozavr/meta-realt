import React from 'react';
import propTypes from 'prop-types';
import entityProps from '../propTypes';
import '../scss/adPopup.scss';

const component = ({ ad, pics, closeBtnHandler }) => (
  <div className="ad-popup">
    <div className="ad-popup-content">
      <button className="close-btn" type="button" onClick={closeBtnHandler}>close</button>
      <table className="ad-popup-table">
        <tbody>
          <tr>
            <td>address</td>
            <td>{ad.address}</td>
          </tr>
          <tr>
            <td>floor</td>
            <td>{ad.floor}</td>
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
            <td>balcony</td>
            <td>
              <input type="checkbox" checked={ad.hasbalcony ? 'checked' : null} disabled />
            </td>
          </tr>
          <tr>
            <td>bathroom</td>
            <td>
              {ad.iscombinedbathroom ? 'combined' : 'separated'}
            </td>
          </tr>
          <tr>
            <td className="td-center" colSpan="2">{ad.description}</td>
          </tr>
          <tr>
            <td className="td-center" colSpan="2">{`Ad parsed at: ${ad.createdAt}`}</td>
          </tr>
        </tbody>
      </table>
      <div className="ad-popup-pics-list">
        {pics.map(pic => (
          <img className="ad-popup-pic" key={pic.id} src={pic.url} alt="ad-pics" />
        ))}
      </div>
    </div>
  </div>
);

component.propTypes = {
  ad: entityProps.ad.isRequired,
  pics: entityProps.pics.isRequired,
  closeBtnHandler: propTypes.func.isRequired,
};

export default component;
