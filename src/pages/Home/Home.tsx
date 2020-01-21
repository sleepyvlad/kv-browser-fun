import React, { useState } from "react";
import cn from "clsx";
import Title from "../../components/Title/Title";
import Button from "../../components/Button";
import LittleMan from "../../components/LittleMan";
import Menu from "./Menu";

import styles from "./Home.module.scss";

interface HomeProps {
  levelsCompleted: number;
}

const Home = (props: HomeProps): React.ReactElement => {
  const { levelsCompleted } = props;
  const [menuOpened, setMenuOpened] = useState(false);
  const handleOpenMenu = (): void => {
    setMenuOpened(!menuOpened);
  };

  return (
    <div className={styles.container}>
      <Title as="h1" className={styles.title}>
        Browser Fun
      </Title>
      <Button
        className={cn(
          menuOpened ? styles.menuButtonDissapeared : styles.menuButton,
        )}
        onClick={handleOpenMenu}
      >
        menu
      </Button>
      <Menu openMenu={setMenuOpened} opened={menuOpened} levelsCompleted={levelsCompleted} />
      <LittleMan className={styles.littleMan} />
    </div>
  );
};

export default Home;
