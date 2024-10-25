import classNames from "classnames/bind";
import styles from "./sidebarButton.module.scss";
import { Link, useLocation } from "react-router-dom";
import { IconContext } from "react-icons";
const cx = classNames.bind(styles);
const SidebarButton = (props) => {
  const location = useLocation();
  const isActive = location.pathname === props.to;

  const btnClass = cx('btn-body', {active: isActive});

  return (
    <Link to={props.to}>
      <div className={btnClass}>
        <IconContext.Provider
          value={{ size: "24px", className: cx("btn-icon") }}
        >
          {props.icon}
          <p className={cx("btn-title")}>{props.title}</p>
        </IconContext.Provider>
      </div>
    </Link>
  );
};

export default SidebarButton;
