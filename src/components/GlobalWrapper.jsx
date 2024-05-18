import Loader from "./loader";
// eslint-disable-next-line react/prop-types
const GlobalWrapper = ({ children }) => {
  return (
    <div className="">
      <Loader />
      {children}
    </div>
  );
};

export default GlobalWrapper;
