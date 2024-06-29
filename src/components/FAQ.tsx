// components/FAQ.tsx

const FAQ = () => {
  return (
    <section id="faq" className="faq section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Frequently Asked Questions</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>
      {/* End Section Title */}

      <div className="container">
        <div className="row faq-item" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-5 d-flex">
            <i className="bi bi-question-circle"></i>
            <h4>Non consectetur a erat nam at lectus urna duis?</h4>
          </div>
          <div className="col-lg-7">
            <p>
              Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
              volutpat lacus laoreet non curabitur gravida. Venenatis lectus
              magna fringilla urna porttitor rhoncus dolor purus non.
            </p>
          </div>
        </div>
        {/* End F.A.Q Item */}

        <div className="row faq-item" data-aos="fade-up" data-aos-delay="200">
          <div className="col-lg-5 d-flex">
            <i className="bi bi-question-circle"></i>
            <h4>
              Feugiat scelerisque varius morbi enim nunc faucibus a
              pellentesque?
            </h4>
          </div>
          <div className="col-lg-7">
            <p>
              Dolor sit amet consectetur adipiscing elit pellentesque habitant
              morbi. Id interdum velit laoreet id donec ultrices. Fringilla
              phasellus faucibus scelerisque eleifend donec pretium. Est
              pellentesque elit ullamcorper dignissim.
            </p>
          </div>
        </div>
        {/* End F.A.Q Item */}

        <div className="row faq-item" data-aos="fade-up" data-aos-delay="300">
          <div className="col-lg-5 d-flex">
            <i className="bi bi-question-circle"></i>
            <h4>
              Dolor sit amet consectetur adipiscing elit pellentesque habitant
              morbi?
            </h4>
          </div>
          <div className="col-lg-7">
            <p>
              Eleifend mi in nulla posuere sollicitudin aliquam ultrices
              sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla
              pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque
              eu tincidunt. Lectus urna duis convallis convallis tellus.
            </p>
          </div>
        </div>
        {/* End F.A.Q Item */}

        <div className="row faq-item" data-aos="fade-up" data-aos-delay="400">
          <div className="col-lg-5 d-flex">
            <i className="bi bi-question-circle"></i>
            <h4>Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?</h4>
          </div>
          <div className="col-lg-7">
            <p>
              Aperiam itaque sit optio et deleniti eos nihil quidem cumque.
              Voluptas dolorum accusantium sunt sit enim. Provident consequuntur
              quam aut reiciendis qui rerum dolorem sit odio. Repellat assumenda
              soluta sunt pariatur error doloribus fuga.
            </p>
          </div>
        </div>
        {/* End F.A.Q Item */}

        <div className="row faq-item" data-aos="fade-up" data-aos-delay="500">
          <div className="col-lg-5 d-flex">
            <i className="bi bi-question-circle"></i>
            <h4>
              Tempus quam pellentesque nec nam aliquam sem et tortor consequat?
            </h4>
          </div>
          <div className="col-lg-7">
            <p>
              Molestie a iaculis at erat pellentesque adipiscing commodo.
              Dignissim suspendisse in est ante in. Nunc vel risus commodo
              viverra maecenas accumsan. Sit amet nisl suscipit adipiscing
              bibendum est. Purus gravida quis blandit turpis cursus in
            </p>
          </div>
        </div>
        {/* End F.A.Q Item */}
      </div>
    </section>
  );
};

export default FAQ;
