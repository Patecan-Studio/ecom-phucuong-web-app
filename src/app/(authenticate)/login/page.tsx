import { AuthForm } from "@/components/common";
import styles from "./page.module.css";

const Page = () => {
  return (
    <div className={styles.login}>
      <AuthForm />
    </div>
  );
};

export default Page;
