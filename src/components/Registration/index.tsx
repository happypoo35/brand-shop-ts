import { PageHeader } from "../";
import Form from "./Form";
import RegistrationInfo from "./RegistrationInfo";

const Registration = () => (
  <>
    <PageHeader />
    <section className="registration pad" aria-label="registration">
      <div className="container">
        <Form />
        <RegistrationInfo />
      </div>
    </section>
  </>
);

export default Registration;
