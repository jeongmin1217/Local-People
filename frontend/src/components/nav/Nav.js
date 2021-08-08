import "./Nav.css";
import { Link } from "react-router-dom";
import firebase from "../firebase/firebase";
import DropdownCustom from "../dropdown/DropdownCustom";

const Nav = () => {
  const currentUser = firebase.auth().currentUser;
  let nickname = "";
  if (currentUser) {
    //현재 유저가 로그인 상태이면 닉네임을 표시한다.
    nickname = currentUser.displayName;
  }

  return (
    <div className="navbar">
      <Link className="navbar__logo" to="/">
        로컬피플
      </Link>
      <DropdownCustom username={nickname}></DropdownCustom>
    </div>
  );
};

export default Nav;
