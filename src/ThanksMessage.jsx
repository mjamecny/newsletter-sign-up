export default function ThanksMessage({ setSubmitted, email, setEmail }) {
  function handleDissmiss() {
    setSubmitted(false)
    setEmail("")
  }
  return (
    <div className="thanks-message">
      <div className="text-box">
        <img src="icon-success.svg" alt="success icon" />
        <div className="p-box">
          <h1>Thanks for subscribing!</h1>
          <p>
            A confirmation email has been sent to <b>{email}</b>. Please open it
            and click the button inside to confirm your subscription.
          </p>
        </div>
        <button onClick={handleDissmiss} className="btn u-mt-auto">
          Dismiss message
        </button>
      </div>
    </div>
  )
}
