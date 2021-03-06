import React, { PropTypes } from 'react';
import NavigationBar from 'react-native-navbar';


const HackafyNavbar = (props) => {
  let optionalAttrs = {};
  props.leftButton && (optionalAttrs.leftButton = React.cloneElement(props.leftButton, {
    style: {marginLeft: 10, justifyContent: 'center'}
  }));
  props.rightButton && (optionalAttrs.rightButton = React.cloneElement(props.rightButton, {
    style: {marginRight: 10, justifyContent: 'center'}
  }));
  return (
    <NavigationBar
      {...optionalAttrs}
      title={{title: props.title}}
      tintColor={#000000}
    />
  );
}

HackafyNavbar.propTypes = {
  title: PropTypes.string.isRequired,
  rightButton: PropTypes.element,
  leftButton: PropTypes.element,
};

export default HackafyNavbar;