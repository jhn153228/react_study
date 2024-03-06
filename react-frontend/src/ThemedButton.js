import React from "react";
import PropTypes from "prop-types";
function ThemedButton({ theme, label, ...restProps }) {
  return (
    <button className={`btn btn-${theme}`} {...restProps}>
      {label}
    </button>
  );
}

/** porp-types
 *  컴포넌트 속성값의 디폴트, 타입 등을 정의해줌
 *  그 외 다른 기능도 있음 Git에서 UseCase 확인
 *
 */
ThemedButton.defaultProps = {
  theme: "default",
};
ThemedButton.propTypes = {
  theme: PropTypes.string,
  label: PropTypes.string.isRequired,
};

export default ThemedButton;
