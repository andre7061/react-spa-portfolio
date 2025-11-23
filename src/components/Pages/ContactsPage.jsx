export const ContactsPage = () => {
  return (
    <div className="page-content contacts-page">
      <h1>Свяжитесь со мной</h1>

      {/* Контактная информация */}
      <div className="contact-methods">
        <h2>Мои контакты</h2>
        <div className="contact-info">
          <div className="contact-item">
            <span className="contact-icon">📧</span>
            <div>
              <h3>Email</h3>
              <p>my.email@example.com</p>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📱</span>
            <div>
              <h3>Telegram</h3>
              <p>@myusername</p>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon">💼</span>
            <div>
              <h3>LinkedIn</h3>
              <p>linkedin.com/in/myprofile</p>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon">💻</span>
            <div>
              <h3>GitHub</h3>
              <p>github.com/myusername</p>
            </div>
          </div>
        </div>
      </div>

      {/* Форма обратной связи */}
      <div className="contact-form-section">
        <h2>Напишите мне</h2>
        <form className="contact-form">
          <div className="form-group">
            <label>Ваше имя:</label>
            <input type="text" placeholder="Иван Иванов" />
          </div>
          <div className="form-group">
            <label>Ваш email:</label>
            <input type="email" placeholder="ivan@example.com" />
          </div>
          <div className="form-group">
            <label>Сообщение:</label>
            <textarea
              placeholder="Расскажите, чем могу помочь..."
              rows="5"
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Отправить сообщение
          </button>
        </form>
      </div>
    </div>
  );
};
