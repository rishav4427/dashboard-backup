/* eslint-disable react/prop-types */
const UserImage = (props) => {
  return (
    <>
      <div className={`userImg ${props.lg === true && "lg"}`}>
        <span className="rounded-circle">
          <img src={props.image} alt="" />
        </span>
      </div>
    </>
  );
};

export default UserImage;
