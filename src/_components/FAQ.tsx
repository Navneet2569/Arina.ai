import React from "react";
import LazyLoad from "react-lazyload";

interface FAQItemProps {
  question: string;
  answer: string;
  delay: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, delay }) => (
  <div className="row faq-item" data-aos="fade-up" data-aos-delay={delay}>
    <div className="col-lg-5 d-flex">
      <i className="bi bi-question-circle"></i>
      <h4>{question}</h4>
    </div>
    <div className="col-lg-7">
      <p>{answer}</p>
    </div>
  </div>
);

const FAQ: React.FC = () => {
  const faqData: FAQItemProps[] = [
    {
      question: "Non consectetur a erat nam at lectus urna duis?",
      answer:
        "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
      delay: 100,
    },
    {
      question:
        "Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?",
      answer:
        "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim.",
      delay: 200,
    },
    {
      question:
        "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?",
      answer:
        "Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus.",
      delay: 300,
    },
    {
      question: "Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?",
      answer:
        "Aperiam itaque sit optio et deleniti eos nihil quidem cumque. Voluptas dolorum accusantium sunt sit enim. Provident consequuntur quam aut reiciendis qui rerum dolorem sit odio. Repellat assumenda soluta sunt pariatur error doloribus fuga.",
      delay: 400,
    },
    {
      question:
        "Tempus quam pellentesque nec nam aliquam sem et tortor consequat?",
      answer:
        "Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in.",
      delay: 500,
    },
  ];

  return (
    <section id="faq" className="faq section">
      <LazyLoad height={200} offset={800}>
        <div className="container section-title" data-aos="fade-up">
          <h2>Frequently Asked Questions</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>

        <div className="container">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              delay={item.delay}
            />
          ))}
        </div>
      </LazyLoad>
    </section>
  );
};

export default FAQ;
