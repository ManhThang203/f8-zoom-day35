import clsx from "clsx";

import styles from "./Button.module.scss";
function Button({
  primary = false,
  bordered = false,
  rounded = false,
  children,
  href,
  onClick,
  size = "medium",
}) {
  const classNames = clsx(styles.btn, styles[size], {
    [styles.primary]: primary,
    [styles.bordered]: bordered,
    [styles.rounded]: rounded,
  });
  const Component = href ? "a" : "button";
  return (
    <Component onClick href={href} className={classNames}>
      {children}
    </Component>
  );
}

export default Button;
