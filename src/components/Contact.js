import React from "react"

export default () => (
  <form method="post" netlify-honeyport="bot-failed" data-netlify="true">
    <input type="hidden" name="bot-field" />
    <label>
      Email
      <input type="email" name="email" id="email" />
    </label>
    <label>
      Subject
      <input type="text" name="subject" id="subject" />
    </label>
    <label>
      Message
      <textarea name="message" id="message" rows="5" />
    </label>
    <button type="submit">Send</button>
    <input type="reset" value="Clear" />
  </form>
)
