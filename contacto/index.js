function contacto(el) {
  const contactFormEl = document.createElement("div");
  contactFormEl.innerHTML = `
      <div class="contacto">
      <div class="titulo-cont">
        <h1 class="titulo">Contacto</h1>
      </div>
      <div class="contact-form-cont">
        <form action="" class="contact-form">
          <label class="contact-form__label">
            NOMBRE
            <input type="text" class="contact-form__input-text" />
          </label>
          <label class="contact-form__label">
            EMAIL
            <input type="text" class="contact-form__input-text" />
          </label>
          <label class="contact-form__label">
            MENSAJE
            <textarea class="contact-form__input-textarea"></textarea>
          </label>
          <button class="contact-form__btn">Enviar</button>
        </form>
      </div>
    </div>
  `;
  el.appendChild(contactFormEl);
}
