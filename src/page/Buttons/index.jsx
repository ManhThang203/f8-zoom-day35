// Buttons.js
import Button from "../../components/Button";
import styles from "./Buttons.module.scss";
function Buttons() {
  return (
    <div className={styles.wapper}>
      <div className={styles.container}>
        <Button>Click me</Button>
        <Button primary>Primary Button</Button>
        <Button href="https://google.com" target="_blank">
          Go to Google
        </Button>

        <div className={styles.btnSize}>
          <Button size="small">Small</Button>
          <Button size="medium">Medium</Button>
          <Button size="large">Large</Button>
        </div>
        <div className={styles.btnVariants}>
          <Button bordered>Bordered</Button>
          <Button rounded>Rounded</Button>
          <Button primary rounded>
            Primary Rounded
          </Button>
        </div>
        <Button onClick={() => alert("Clicked!")}>Click Alert</Button>

        <div className={styles.large}>
          <Button size="large" primary>
            Click me
          </Button>
          <Button size="large" bordered>
            Large
          </Button>
          <Button size="large" rounded>
            Click me
          </Button>
        </div>
      </div>
    </div>
  );
}
export default Buttons;
