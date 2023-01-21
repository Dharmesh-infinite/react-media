import "./rightbar.css"
import { Users } from "../../dummyData";
import Online from "../online/Online";
export default function Rightbar({ user }) {
  const HomeRightbar = () => {
    const PF=process.env.REACT_APP_PUBLIC_FOLDER;
    return (
      <>
        <div className="birthdayContainer">
          <img src={`${PF}gift.png`} alt="" className="birthdayImg" />
          <span className="birthdayText"><b>yo yo honey singh </b>and <b>3 other friends</b> have birthday today</span>
        </div>
        <img src={`${PF}ad.png`} alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u => (
            <Online key={u.id} user={u} />
          ))}

        </ul>
      </>
    );
  };
  const ProfileRightbar = () => {
    const PF=process.env.REACT_APP_PUBLIC_FOLDER;

    return (
      <>
        <h4 className="rightbarTitle"> User Info</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Country:</span>
            <span className="rightbarInfoValue">India</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">State:</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">{user.relationship===1?"Single":user.relationship===2?"Married":"empty"}</span>
          </div>
        </div>
        <h4 className="rightbarTitle"> user Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src={`${PF}persons/1.jpeg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Adarsh</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}persons/2.jpeg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Adarsh</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}persons/3.jpeg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Adarsh</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}persons/4.jpeg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Adarsh</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}persons/5.jpeg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Adarsh</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}persons/6.jpeg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Adarsh</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar/> : <HomeRightbar/>}
      </div>
    </div>
  )
}
