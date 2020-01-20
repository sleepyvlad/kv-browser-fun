import React, { useState } from "react";
import Button from "../../../components/Button";
import OpenableWindow from "../../../components/OpenableWindow";

import styles from "./Menu.module.scss";

interface MenuProps {
  levelsCompleted: number;
  opened: boolean;
}

const Menu = (props: MenuProps): React.ReactElement => {
  const { levelsCompleted, opened } = props;
  const [openLevelsWindow, setOpenLevelsWindow] = useState(false);
  const [openCustomizeWindow, setOpenCustomizeWindow] = useState(false);
  const handleOpenLevelsWindow = (): void => {
    setOpenLevelsWindow(!openLevelsWindow);
  };
  const handleOpenCustomizeWindow = (): void => {
    setOpenCustomizeWindow(!openCustomizeWindow);
  };
  return (
    <OpenableWindow opened={opened} closedClassName={styles.containerClosed}>
      <Button onClick={handleOpenLevelsWindow}>Levels</Button>
      <Button onClick={handleOpenCustomizeWindow}>Customize</Button>
    </OpenableWindow>
  );
};

export default Menu;
