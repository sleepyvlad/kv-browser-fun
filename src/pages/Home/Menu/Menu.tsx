import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import Text from "../../../components/Text";
import OpenableWindow from "../../../components/OpenableWindow";

import styles from "./Menu.module.scss";

interface MenuProps {
  levelsCompleted: number;
  opened: boolean;
  openMenu: (state: boolean) => void;
}

const Menu = (props: MenuProps): React.ReactElement => {
  const { levelsCompleted, openMenu, opened } = props;
  const [levelsWindowOpened, setLevelsWindowOpened] = useState(false);
  const [customizeWindowOpened, setCustomizeWindowOpened] = useState(false);
  const handleOpenLevelsWindow = (): void => {
    setLevelsWindowOpened(!levelsWindowOpened);
  };
  const handleOpenCustomizeWindow = (): void => {
    setCustomizeWindowOpened(!customizeWindowOpened);
  };

  const handleCloseMenu = (): void => {
    openMenu(false);
  };
  return (
    <OpenableWindow
      opened={opened}
      openedClassName={styles.containerOpened}
      closedClassName={styles.containerClosed}
    >
      <Button
        className={styles.buttons}
        disabled={levelsWindowOpened}
        onClick={handleOpenLevelsWindow}
      >
        {!levelsWindowOpened ? (
          <Text as="span">Level</Text>
        ) : (
          <OpenableWindow
            opened={levelsWindowOpened}
            openedClassName={styles.levelsWindowOpened}
            closedClassName={styles.levelsWindowClosed}
          >
            {[...new Array(levelsCompleted)].map((_, index) => (
              <Link to={`level${index + 1}`} className={styles.levelLink}>
                {index + 1}
              </Link>
            ))}
          </OpenableWindow>
        )}
      </Button>
      <Button className={styles.buttons} onClick={handleOpenCustomizeWindow}>
        Customize
      </Button>
      <Button className={styles.buttons} onClick={handleCloseMenu}>
        Back
      </Button>
    </OpenableWindow>
  );
};

export default Menu;
