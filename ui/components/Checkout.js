import { Formik, Form } from 'formik';
import { TextInput, SubmitButton, Hidden, Checkbox } from 'ui/components/Form'

import * as yup from "yup"
import { useState }  from 'react';
// import { checkFetchResponseStatus } from "helpers/apiHelpers"
import StorefrontCheckout from "helpers/shopifyStorefront"

import { ESSENTIAL_AUDIT_PRICE } from 'helpers/constants'

const initialValues = {
  website_url: '',
  first_name: '',
  last_name: '',
  email_address: '',
  phone_number: '',
  agree_terms_and_conditions: false,
  product_sku: 'essential-website-audit'
}

const validationSchema = yup.object({
  website_url: yup.string().trim().lowercase().required("Your website url is required"),
  first_name: yup.string().trim().required("Your first name is required"),
  last_name: yup.string().trim().required("Your last name is required"),
  email_address: yup.string().trim().lowercase().email('Invalid email address').required('Your email address is required'),
  phone_number: yup.string().trim(),
  agree_terms_and_conditions: yup.boolean().oneOf([true], 'Please read and agree to the terms and conditions'),
  product_sku: yup.string().required(''),
}).noUnknown();

function useCheckout(){
  const [state, setState] = useState({
    isSuccess: false,
    isLoading: false,
    isError: false
  })

  function updateState(newState){
    setState(prevState => ({
      ...prevState, ...newState
    }))
  }

  async function onSubmit (values) {
    updateState({ isLoading: true })

    const redirect_url = await StorefrontCheckout().create_checkout_and_get_redirect_url(values)

    // window.location.href = redirect_url;
    updateState({ isLoading: false })
    return;

  }

  return { initialValues, fetchStatus: state, onSubmit }
}


export default function Checkout() {
  const {
    fetchStatus,
    onSubmit
  } = useCheckout()

  if (fetchStatus.isSuccess) {
    return <div>Success</div>
  }

  if (!fetchStatus.isSuccess) {
    return (

      <div className="max-w-[36rem] mx-auto bg-white p-8 rounded-xl">
        <h1 className="text-28 font-bold mb-4">Order the Essential Website Audit</h1>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            <Form noValidate="" method="POST" action="#" acceptCharset="UTF-8">
              {/* <FormErrors /> */}
              {/* { fetchStatus.isError && "We've got a problem."} */}
              <div>
                <span className="text-16">Please provide us with the URL of the website you'd like us to review</span>
                <TextInput label="Website url" name="website_url" type="text" required={ true } />
              </div>

              <div>
                <p className="text-16 font-bold">Contact information</p>
                <p>Please let us know who we should get in touch with about this project</p>
              </div>
              <TextInput label="First name" name="first_name" type="text" autoComplete="given-name" required={ true } />
              <TextInput label="Last name" name="last_name" type="text" autoComplete="family-name" required={ true } />
              <TextInput label="Email address" name="email_address" type="email" autoComplete="email" required={ true } />
              <TextInput label="Phone number" name="phone_number" type="text" autoComplete="tel"/>
              <Checkbox name="agree_terms_and_conditions">I have read and agree to the <a href="https://sayyeah.com/essential-website-audit/terms-and-conditions/" className="underline">Terms and Conditions</a></Checkbox>
              <Hidden name="product_sku" id="product_sku" />

              <SubmitButton label={ `Buy now - ${ESSENTIAL_AUDIT_PRICE.value}` } isLoading={ fetchStatus.isLoading } />
            </Form>
          </Formik>

      </div>
    )
  }
}