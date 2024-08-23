import React from "react";

const Title = ({
  title,
  subTitle,
  className,
  subClassName,
}: {
  title: string;
  subTitle: string;
  className: string;
  subClassName: string;
}) => {
  return (
    <React.Fragment>
      <h2 className={className}>{title}</h2>
      <span className={subClassName}>{subTitle}</span>
    </React.Fragment>
  );
};
export default Title;
