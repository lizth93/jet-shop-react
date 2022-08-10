const BtnMobileNavigation = (props) => {
  return (
    <div className={props.className}>
      <div className="btn-mobile-nav">{props.children}</div>
    </div>
  );
};
export default BtnMobileNavigation;
