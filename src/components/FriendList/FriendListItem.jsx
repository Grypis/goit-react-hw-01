import PropTypes from "prop-types";
import clsx from "clsx";
import css from "./FriendList.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div
      className={clsx(css.container, isOnline && css.isOnline)}
      // className={css.container}
    >
      <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
      <h3 className={css.name}>{name}</h3>
      <p className={isOnline ? css.online : css.offline}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

FriendListItem.prototype = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;
