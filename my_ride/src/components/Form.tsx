import { useForms } from "../hooks/useForms";
import { FormSchema } from "../schemas/formSchema";

const Form = () => {
  const imgMegane =
    "https://eduardopbcompass.s3.amazonaws.com/myrideimgs/card+image.png";
  const imgLand =
    "https://eduardopbcompass.s3.amazonaws.com/myrideimgs/card+image(1).png";
  const imgMerce =
    "https://eduardopbcompass.s3.amazonaws.com/myrideimgs/card+image(2).png";
  const imgA45 =
    "https://eduardopbcompass.s3.amazonaws.com/myrideimgs/card+image(3).png";
  const { register, handleSubmit, errors } = useForms();
  const onSubmit = (data: FormSchema) => {
    console.log(data);
  };

  return (
    <div className="cars_container">
      <h3>WHY SHOULD YOU RIDE WITH US?</h3>
      <h2>Best in class rides</h2>
      <div className="cars_photos">
        <img src={imgMegane} />
        <img src={imgLand} />
        <img src={imgMerce} />
        <img src={imgA45} />
      </div>

      <div className="register_form">
        <form onSubmit={handleSubmit(onSubmit)} className="form_register">
          <div>
            <label {...register("firstName")} htmlFor="firstName"></label>
            <input id="firstName" type="text" placeholder="First Name" />
            {errors.firstName && (
              <small className="text-red-500 italic">
                {errors.firstName.message}
              </small>
            )}
          </div>

          <div>
            <label {...register("lastName")} htmlFor="lastName"></label>
            <input id="lastName" type="text" placeholder="Last Name" />
            {errors.lastName && (
              <small className="text-red-500 italic">
                {errors.lastName.message}
              </small>
            )}
          </div>

          <div>
            <label {...register("email")} htmlFor="email"></label>
            <input id="email" type="text" placeholder="Email Adress" />
            {errors.email && (
              <small className="text-red-500 italic">
                {errors.email.message}
              </small>
            )}
          </div>

          <div>
            <label {...register("country")} htmlFor="country"></label>
            <input id="country" type="text" placeholder="Country" />
            {errors.country && (
              <small className="text-red-500 italic">
                {errors.country.message}
              </small>
            )}
          </div>

          <div>
            <label {...register("referralCode")} htmlFor="referralCode"></label>
            <input id="referralCode" type="text" placeholder="Referral Code" />
            {errors.referralCode && (
              <small className="text-red-500 italic">
                {errors.referralCode.message}
              </small>
            )}
          </div>

          <button type="submit" className="submit_button">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
