import { useEffect, useState } from "react"
import ThanksMessage from "./ThanksMessage"

export default function App() {
  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState("")
  const [error, setError] = useState(false)

  const regex = new RegExp(/\S+@\S+\.\S+/)
  const isValid = regex.test(email)

  useEffect(() => {
    setError(false)
    if (email !== "") {
      if (!isValid) {
        setError(true)
      } else {
        setError(false)
      }
    }
  }, [email])

  function handleSubmit(e) {
    e.preventDefault()

    if (!isValid || email === "") {
      setError(true)
    } else {
      setError(false)
      setSubmitted(true)
    }
  }

  return (
    <>
      {!submitted && (
        <div className="newsletter-signup">
          <picture>
            <source
              srcSet="illustration-sign-up-mobile.svg"
              media="(max-width: 32em)"
            />
            <img
              className="illustration"
              src="illustration-sign-up-desktop.svg"
              alt="illustration"
            />
          </picture>
          <div className="text-box">
            <h1 className="heading">Stay updated!</h1>
            <p className="paragraph">
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            <ul className="feature-list">
              <li>
                <img src="icon-success.svg" alt="success icon" />
                <p>Product discovery and building what matters</p>
              </li>
              <li>
                <img src="icon-success.svg" alt="success icon" />
                <p>Measuring to ensure updates are a success</p>
              </li>
              <li>
                <img src="icon-success.svg" alt="success icon" />
                <p>And much more!</p>
              </li>
            </ul>
            <form className="form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div>
                  <label htmlFor="email">Email address</label>
                  {error && <span>Valid email required</span>}
                </div>

                <input
                  type="email"
                  id="email"
                  placeholder="email@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    border: error ? "1px solid var(--tomato)" : "",
                    color: error ? "var(--tomato)" : "",
                    backgroundColor: error ? "var(--light-tomato)" : "",
                  }}
                />
              </div>
              <button className="btn">Subscribe to monthly newsletter</button>
            </form>
          </div>
        </div>
      )}
      {submitted && !error && (
        <ThanksMessage
          setSubmitted={setSubmitted}
          email={email}
          setEmail={setEmail}
        />
      )}
    </>
  )
}
