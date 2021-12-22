import React from "react"
import Layout from "../components/Layout"
const Contacts = () => {
  return (
    <Layout>
      <main className="page">
        <setion className="contact-page">
          <article className="contact-info">
            <h3>Want to get in Touch?</h3>
            <p>
              Four dollar toast biodiesel plaid salvia actually pickled banjo
              bespoke mlkshk intelligentsia edison bulb synth.{" "}
            </p>

            <p>
              Cardigan prism bicycle rights put a bird on it deep v. Hashtag
              swag health goth air plant, raclett
            </p>
            <p>
              e listicle fingerstache cold-pressed fanny pack bicycle rights
              cardigan poke.
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">your message</label>
                <textara name="message" id="namessageme" />
              </div>
              <button type="submit" className="btn block">
                submit{" "}
              </button>
            </form>
          </article>
        </setion>
      </main>
    </Layout>
  )
}

export default Contacts