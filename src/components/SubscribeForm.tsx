'use client';

import styles from './SubscribeForm.module.css';

export default function SubscribeForm() {
  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      <input
        type="email"
        placeholder="Corporate Email Address"
        className={styles.input}
        aria-label="Email address"
        id="subscribe-email"
      />
      <button type="submit" className="btn btn-primary" id="subscribe-btn">
        Subscribe
      </button>
    </form>
  );
}
