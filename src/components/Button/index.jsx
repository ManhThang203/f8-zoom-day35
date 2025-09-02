import clsx from "clsx";

import styles from "./Button.module.scss";
function Button({
  primary = false,
  bordered = false,
  rounded = false,
  disabled = false,
  loading = false,
  children,
  href,
  onClick,
  size = "medium",
  className,
  ...passProps
}) {
  const classNames = clsx(styles.btn, styles[size], className, {
    [styles.primary]: primary,
    [styles.bordered]: bordered,
    [styles.rounded]: rounded,
    [styles.disabled]: disabled,
    [styles.loading]: loading,
  });
  const Component = href ? "a" : "button";
  return (
    <Component
      {...passProps}
      onClick={disabled ? (e) => e.preventDefault() : onClick}
      href={href}
      className={classNames}
    >
      {loading ? <span className={styles.spinner}></span> : ""}
      <span className={clsx({ [styles.textHiden]: loading })}>{children}</span>
    </Component>
  );
}

export default Button;
