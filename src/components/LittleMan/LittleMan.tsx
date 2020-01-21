import React from "react";
import cn from "clsx";
import { ReactSVG } from "react-svg";
import HeadIcon from "../../img/head.svg";
import BodyIcon from "../../img/body.svg";

import styles from "./LittleMan.module.scss";

interface LittleManProps {
  className?: string;
  headColor?: string;
  bodyColor?: string;
}

const LittleMan = (props: LittleManProps): React.ReactElement => {
  const { className, bodyColor = "black", headColor = "black" } = props;
  return (
    <div className={cn(styles.littleMan, className)}>
      <ReactSVG src={HeadIcon} className={styles.innerWrapper} style={{ stroke: headColor }} />
      <ReactSVG src={BodyIcon} className={styles.innerWrapper} style={{ stroke: bodyColor }} />
    </div>
  );
};

export default LittleMan;
