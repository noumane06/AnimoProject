import React from 'react';
import Heart from './heart.svg'
const NotificationCard = () => {
    const imgStatus = true ;
    return (
      <div className="NotificationCard">
        <div className="status">
        <img src={Heart} alt="heart" width="14px" height="14px" className="heart" />
        il y a 2 heures
        </div>
        <div className="title">
                <img
                src="https://pbs.twimg.com/profile_images/1310736475080871937/URRefhzJ_400x400.jpg"
                width="30px"
                height="30px"
                className="ThumbImg"
                style={{borderRadius : '50%',marginRight : '10px'}}
                />
            <strong className="Name">Noumane agouzil</strong> a aime votre annonce
        </div>
        <div className="body">
          {imgStatus && (
              <div className="imgs">
                <img
                src="https://pbs.twimg.com/media/EqTXJUmXYAE_2iP?format=jpg&name=small"
                width="78px"
                height="70px"
                className="ThumbImg"
                />
              </div>
          )}
          <div className="PostInfos">
            <span>Title</span>
            <p>
                Dum apud Persas, ut supra narravimus, perfidia regis motus agitat insperatos,
                et in eois tractibus bella rediviva consurgunt...
            </p>
          </div>
        </div>
      </div>
    );
}
 
export default NotificationCard;