import React from "react";
import cn from "clsx";
import { ReactSVG } from "react-svg";
import HeadIcon from "../../img/head.svg";
import BodyIcon from "../../img/body.svg";

import styles from "./LittleMan.module.scss";

interface LittleManProps {
  className?: string;
}

const LittleMan = (props: LittleManProps): React.ReactElement => {
  const { className } = props;
  return (
    <div className={cn(styles.littleMan, className)}>
      <ReactSVG src={HeadIcon} />
      <ReactSVG src={BodyIcon} />
    </div>
  );
};

export default LittleMan;
