import React from "react";
import cn from "clsx";

interface OpenableWindowProps {
  opened: boolean;
  openedClassName?: string;
  closedClassName?: string;
  children: React.ReactNode[];
}

const OpenableWindow = (props: OpenableWindowProps): React.ReactElement => {
  const { opened, openedClassName, closedClassName, children } = props;

  return (
    <div className={cn(opened ? openedClassName : closedClassName)}>
      {children.map((el) => el)}
    </div>
  );
};

export default OpenableWindow;
