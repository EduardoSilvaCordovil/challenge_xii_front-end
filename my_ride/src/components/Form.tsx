import { useForms } from "../hooks/useForms";
import { FormSchema } from "../schemas/formSchema";

const Form = () => {
  const { register, handleSubmit, errors } = useForms();
  const onSubmit = (data: FormSchema) => {
    console.log(data);
  };

  return (
    <div className="container">

      <img src="https://eduardopbcompass.s3.us-east-1.amazonaws.com/myrideimgs/Image%281%29.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIErUR5hTbDJZ0UuBp3F%2FhG2O2Uo22KzabBoJjKnV4SGLAiEAy5wNlLy0xWyH99WWveUeqPpj2bNXRP%2BEGTk9UZsVfjUq%2FgMINBAAGgw1MzMyNjcxNTk5MzkiDKtFwAisRucVYaM3eSrbA6xmFleMZnTON%2Bqons%2FyfO7HiHLzmwGtW7NMo5Q14xVcEr2fN3i1I8VmsRpKIu%2BSG%2FyFsfWq81mDg5Crs%2FSTwvDC%2FX5NM2skYf2aC1%2Bm7I7lrW5pUnKKSJseiaE44GhEqUZqmgQRX8cc5BOm8u4ZGgc48RgmOzgYJpfJnouhAFH3o5gYtdhBByhbrXK4EILRb9tPQ6SvwJBRTFr5ARsbeKiNU0JrxUMxEbFf3o51focUsgDfm%2FoDzUfsKf%2F0ekSQFxyuTvA2b3aRv4cf9gVYkAFejFoyUyu07YL42nEbZBM1xxPNEamSksEmlq3SU6YWjwL5oaDor6ocahFAD9VqTVeeRSTaZ6C%2BMq7m4nzzUp%2B%2FV1WsoO0cuQh3ZAlV07kRc4qk2679Y%2Fweg4BRyA9IXKKmj3kdi88wGKOYwy9JBnexckZaHLiMR5N99d5Ouu4CwqYS2Yog1ZacXTEKJVFl3UzKW55gRsPIJP4jJQcRoXCqT8zIwSe9x8qqFpvooFVW9Ei4E71JQ7olIdyHJNp%2BpXyI5iibkDAk34L4b2lxM33bDDz%2BuitExx4FFrU3lShOqPXq0dJBe0vCFfJqV2QPFomBGKPb%2F9vkwmJNVP9sZLV5O5iVLXnP5NXJtE8wmtb5sQY6lAI5lr1tkYl0drK9ZblbBPy7cKoEBR6yeOu5JK303EOcZEFUdphEysaBBaRDfo1FHUBLT4xsq53vTK8ZHe3cOx51TKa%2F41C%2BFxEQ2Ubs2vrh2Fo%2Fu1FIiz%2FiYyawfaCr3gqrjahyOvXSTT9iQ2nOB%2BAPyWQ9bX6iHawsv4NmPsScaZvKFTE5LIQ8ltLYVqsbyizGwJ4wWzM%2FHULCHz1CQ39lgKtN%2Fsfs8MJKV75c7Br2VpzdUro2b9axVnPk71269FRsnRlIAiAbSKPzTXYaiTh6MXbT6xhLEQ0bouwLJ9LUs7hyb9ZlzrABie6hKSHDaxVtvvXomJv9sFycfCmCLq5c1SPmE86x4ZjbPuB%2BTJL8Mlc7sJw%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240510T185858Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAXYKJTDOB5P47D6U2%2F20240510%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c609b63d1a19b6d8171c4865d7b314f8a336856ce1d3648d071fd951b52d9569" />

      <div className="cars_photos">
        <p>Fotos aqui</p>
        <h3>WHY SHOULD YOU RIDE WITH US?</h3>
        <h2>Best in class rides</h2>
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
