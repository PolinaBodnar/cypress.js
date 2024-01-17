describe('Покупка аватара', function () {
   it('e2e тест на покупку нового аватара для тренера', function () {
        cy.visit('https://pokemonbattle.me/');
        cy.get(':nth-child(1) > .auth__input').type('logobod@yandex.ru'); //Ввели логин
        cy.get('#password').type('6W3g5tB2qTXwf'); //Ввели логин
        cy.get('.auth__button').click(); //Нажали кнопку входа
        cy.get('.header__btns > [href="/shop"]').click(); //Нажали кнопку входа в магазин
        cy.get(':nth-child(2) > .shop__button').click(); //Нажали кнопку купить
        cy.get('.pay__header-v2').should('be.visible'); //Проверили что текст виден
        cy.get('.pay-btn').should('be.disabled'); //Кнопка войти некликабельна
        cy.get('.shop__list > li').not('.feature-empty').children('.shop__button').eq(0).click();
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996'); //Ввели номер карты
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1225'); //Ввели срок 
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); //Ввели код
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('POLINA BODNAR'); //Ввели имя фимилию
        cy.get('.pay-btn').click(); //Нажали кнопку оплатить
        cy.get('.payment__fielheader').contains('Подтверждение покупки'); //Совпадение текста
        cy.get('#cardnumber').type('56456'); //Ввели код смс
        cy.get('.payment__submit-button').click(); //Нажали кнопку отправить
        cy.get('.payment__main').contains('Покупка прошла успешно'); //Совпадение текста
        cy.get('.payment__adv').click(); //Нажали кнопку вернуться в магазин

      })
})