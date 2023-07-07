import React from "react";
import styles from "../styles/chatView.module.css";
import { FaUser } from "react-icons/fa";
import { BiCheckDouble } from "react-icons/bi";
import { HiUserGroup } from "react-icons/hi";

const ChatView = () => {
  return (
    <div>
      <hr />
      <div className={styles.main_chatDiv}>
        <section>
          <HiUserGroup className={styles.user_icon} />
        </section>
        <div className={styles.preview_msg_div}>
          <h5>Group #1</h5>
          <p>
            <BiCheckDouble className={styles.doubleTick_icon} />
            Contact #1: Let's meet Tomorrow!!
          </p>
        </div>
      </div>
      <hr />

      <div className={styles.main_chatDiv}>
        <section>
          <FaUser className={styles.user_icon} />
        </section>
        <div className={styles.preview_msg_div}>
          <h5>Kunal</h5>
          <p>
            <BiCheckDouble className={styles.doubleTick_icon2} />
            You: Lorem ipsum
          </p>
        </div>
      </div>
      <hr />

      <div className={styles.main_chatDiv}>
        <section>
          <FaUser className={styles.user_icon} />
        </section>
        <div className={styles.preview_msg_div}>
          <h5>Nithin</h5>
          <p>
            <BiCheckDouble className={styles.doubleTick_icon3} />
            Nithin: Lorem ipsum
          </p>
        </div>
      </div>
      <hr />

      <div className={styles.main_chatDiv}>
        <section>
          <HiUserGroup className={styles.user_icon} />
        </section>
        <div className={styles.preview_msg_div}>
          <h5>Startup Hustlers</h5>
          <p>
            <BiCheckDouble className={styles.doubleTick_icon2} />
            Vijay: Closed series-c Funding successfully!
          </p>
        </div>
      </div>
      <hr />

      <div className={styles.main_chatDiv}>
        <section>
          <HiUserGroup className={styles.user_icon} />
        </section>
        <div className={styles.preview_msg_div}>
          <h5>Cricket Team</h5>
          <p>
            <BiCheckDouble className={styles.doubleTick_icon} />
            David: Sunday @6am, Sterling Ground
          </p>
        </div>
      </div>
      <hr />

      <div className={styles.main_chatDiv}>
        <section>
          <FaUser className={styles.user_icon} />
        </section>
        <div className={styles.preview_msg_div}>
          <h5>Ritesh</h5>
          <p>
            <BiCheckDouble className={styles.doubleTick_icon3} />
            You: Lorem ipsum
          </p>
        </div>
      </div>
      <hr />

      <div className={styles.main_chatDiv}>
        <section>
          <FaUser className={styles.user_icon} />
        </section>
        <div className={styles.preview_msg_div}>
          <h5>Vinay</h5>
          <p>
            <BiCheckDouble className={styles.doubleTick_icon} />
            Vinay: Lorem ipsum
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default ChatView;
