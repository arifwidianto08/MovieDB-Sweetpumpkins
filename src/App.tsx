import React, { useEffect } from "react";
import Routes from "./views/routes/route";
import Loginpage from "./views/containers/Loginpage/Loginpage";
import { connect } from "react-redux";
import { localAuthListener } from "./store/actions/auth";

interface AppProps {
  authorized: any;
  setAuthListener: any;
}

const App = (props: AppProps) => {
  useEffect(() => {
    props.setAuthListener();
  }, []);

  const { authorized } = props;

  return authorized ? <Routes /> : <Loginpage />;
};

const mapStateToProps = (state: any) => {
  return {
    authorized: state.auth.authorized
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setAuthListener: () => dispatch(localAuthListener())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
