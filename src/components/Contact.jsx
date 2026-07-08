import './Contact.css';

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__bg-glow" />
      <div className="container contact__inner">
        <div className="contact__section-label reveal">
          <span className="contact__section-line" />
          Get in Touch
        </div>
        <h2 className="contact__heading reveal">
          Let's create<br />something <em>remarkable</em>
        </h2>
        <p className="contact__text reveal">
          有项目需要合作或想加入团队？欢迎联系我，一起打造更出色的数字产品。
        </p>
        <div className="contact__actions reveal">
          <a href="mailto:1031381876@qq.com" className="contact__btn">
            <span>Say Hello</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
        <div className="contact__links reveal">
          <a href="mailto:1031381876@qq.com" className="contact__link">Email</a>
          <a href="#" className="contact__link">Dribbble</a>
          <a href="#" className="contact__link">Behance</a>
          <a href="#" className="contact__link">LinkedIn</a>
        </div>
        <div className="contact__footer reveal">
          <span>© 2025 UI Designer. All rights reserved.</span>
          <span>Built with precision & care.</span>
        </div>
      </div>
    </section>
  );
}
