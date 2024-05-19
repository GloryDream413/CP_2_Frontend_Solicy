import ReCAPTCHA, { ReCAPTCHAProps } from "react-google-recaptcha"
import { useRef } from "react"

const MyBot: React.FC = () => {
  const recaptchaRef = useRef<ReCAPTCHAInstance>(null)

  const onChange = (value: string | null) => {
    console.log("Captcha value:", value)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const token = await recaptchaRef.current?.executeAsync()
    console.log("reCAPTCHA token:", token)
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