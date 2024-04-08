'use client'

import React from "react";
import styles from "./Button.module.scss"


interface Props {
  placeholder: string;
}



const UIButton: React.FC<Props> = ({placeholder}) => {
  return (
    <button className={styles.btn }>{placeholder}</button>
  );
}

export default UIButton;