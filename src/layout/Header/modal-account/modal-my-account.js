import { Link } from "react-router-dom";
//own
import SetupIcon from "../Icons/setup";
import { ACCOUNT } from "config";
const ModalAccount = (props) => {
  return (
    <div className={props.className}>
      <li>
        <button className="main-nav-link btn--account">
          <SetupIcon />
          Account
        </button>

        <ul className="account-modal">
          <li>
            <Link className="account-list" to={ACCOUNT}>
              Change Password
            </Link>
          </li>
          <li>
            <Link className="account-list">Shopping history</Link>
          </li>
        </ul>
      </li>
    </div>
  );
};

export default ModalAccount;
