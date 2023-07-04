import React from "react";
import Logo from "../../assets/logo.png";
import css from "./Footer.module.css";
import {
  PhoneIcon,
  LocationMarkerIcon,
  LoginIcon,
  UsersIcon,
  LinkIcon,
} from "@heroicons/react/outline";
const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
      <hr />
      <div className={css.section}>
        <div>
          <p className={css.title}>Contact US</p>
          <ul>
            <li>
              <LocationMarkerIcon className={css.icon} />
              <span>111 north avenue Orlando, FL 32801</span>
            </li>
            <li>
              <PhoneIcon className={css.icon} />
              <span>534-434-2343</span>
            </li>
          </ul>
        </div>

        <div>
          <p className={css.title}>Account</p>
          <ul>
            <li>
              <LoginIcon className={css.icon} />
              <span>Sign In</span>
            </li>
          </ul>
        </div>

        <div>
          <p className={css.title}>Information</p>
          <ul>
            <li>
              <UsersIcon className={css.icon} />
              <span>About us</span>
            </li>
          </ul>
        </div>

        <div>
          <p className={css.title}>Terms</p>
          <ul>
            <li>
              <LinkIcon className={css.icon} />
              <span>Safety Privacy</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={css.copyRight}>
        <span>Copyright 2023 by Amazon, Inc.</span>
        <span>All rights reserved.</span>
      </div>
    </div>
  );
};
export default Footer;
