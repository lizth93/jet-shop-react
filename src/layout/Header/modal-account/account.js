import { Link } from "react-router-dom";
//own

import UserIcon from "../../../Icons/user";
import { ACCOUNT } from "config";
import SetupIcon from "../../../Icons/setup";
import HistoryIcon from "../../../Icons/history";
import { HISTORY } from "config";
const ModalAccount = (props) => {
  return (
    <div className={props.className}>
      <li>
        <button className="main-nav-link btn--account">
          <UserIcon />
          Account
        </button>

        <ul className="account-modal">
          <li>
            <Link className="account-list" to={ACCOUNT}>
              <SetupIcon />
              <span>Change Password</span>
            </Link>
          </li>
          <li>
            <Link to={HISTORY} className="account-list">
              <HistoryIcon />
              <span>Shopping history</span>
            </Link>
          </li>
        </ul>
      </li>
    </div>
  );
};

export default ModalAccount;
