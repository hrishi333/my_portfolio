import styles from "./headinglinks.module.scss";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiOutlineInstagram
} from "react-icons/ai";
import { BsTelegram, BsDiscord } from "react-icons/bs"
import Link from "next/link";
import { motion } from "framer-motion";
import {ImLinkedin} from "react-icons/im";
import React from "react";

export const MyLinks = () => {
  return (
    <div className={styles.links}>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Link href="https://www.github.com/hrishi333/" target="_blank" rel="nofollow">
          <AiFillGithub size="2.4rem" />
        </Link>
      </motion.span>
      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Link href="https://discordapp.com/users/hrishikesh_333" target="_blank" rel="nofollow">
          <BsDiscord size="2.4rem" />
        </Link>
      </motion.span>
      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Link href="https://www.linkedin.com/in/hrishikeshjoshi333/" target="_blank" rel="nofollow">
          <ImLinkedin size="2.4rem" />
        </Link>
      </motion.span>
      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Link href="https://www.twitter.com/hrishik333" target="_blank" rel="nofollow">
          <AiFillTwitterCircle size="2.4rem" />
        </Link>
      </motion.span>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Link href="https://www.instagram.com/hrishi_333_" target="_blank" rel="nofollow">
          <AiOutlineInstagram size="2.4rem" />
        </Link>
      </motion.span>
    </div>
  );
};
