import ReCAPTCHA, { ReCAPTCHAProps } from "react-google-recaptcha"
import { useRef } from "react"

const MyBot: React.FC = () => {
  // const recaptchaRef = useRef<ReCAPTCHAInstance>(null)
  const recaptchaRef = useRef(null)

  const onChange = (value: string | null):void => {
    console.log("Captcha value:", value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>):void => {
    event.preventDefault()
    // const token = await recaptchaRef.current;
    // ?.executeAsync()
    console.log("reCAPTCHA token:", "Dong")
    // Send the token to the backend for verification
  }

  return (
    <form>
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey="6LdtxOEpAAAAAP9Z4A1AASO9agp86vKs8yVbgEkb"
        onChange={onChange}
      />
      {/* <button type="submit">Submit</button> */}
    </form>
  )
}

export default MyBot