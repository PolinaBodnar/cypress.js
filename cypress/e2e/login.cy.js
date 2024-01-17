describe('Автотесты для формы авторизации', function () {
   it('Верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Посетили сайт
        cy.get('#mail').type('german@dolnikov.ru'); //Ввели логин
        cy.get('#pass').type('iLoveqastudio1'); //Ввели пароль
        cy.get('#loginButton').click(); //Нажали кнопку входа
        cy.get('#messageHeader').should('be.visible'); //Проверили что текст виден
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Совпадение текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Кнопка крестик пристствует
    })


   it('Верный логин неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Посетили сайт
        cy.get('#mail').type('german@dolnikov.ru'); //Ввели логин
        cy.get('#loginButton').should('be.disabled'); //Кнопка войти некликабельна 
        cy.get('#pass').type('iLoveqastudio2'); //Ввели неверный пароль
        cy.get('#loginButton').should('be.enabled'); //Кнопка войти некликабельна
        cy.get('#loginButton').click(); //Нажали кнопку входа
        cy.get('#messageHeader').should('be.visible'); //Проверили что текст виден
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Совпадение текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Кнопка крестик пристствует
       
    })


       
   it('Высплывающее окно восстановить пароль', function () {
        cy.visit('https://login.qa.studio/'); // Посетили сайт
        cy.get('#mail').type('german@dolnikov.ru'); //Ввели логин
        cy.get('#forgotEmailButton'). click(); //Забыл пароль
        cy.get('#forgotForm > .header').should('be.visible'); //Проверили что текст виден
        cy.get('#forgotForm > .header').contains('Восстановите пароль'); //Совпадение текста
        cy.get('#exitRestoreButton > .exitIcon').should('be.visible'); //Проверили что текст виден
        cy.get('#mailForgot').type('german2@dolnikov.ru');
        cy.get('#restoreEmailButton').click(); //Нажали кнопку входа
        cy.get('#messageHeader').should('be.visible'); //Проверили что текст виден
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //Совпадение текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Кнопка крестик пристствует

   })

    it('Неверный логин верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Посетили сайт
        cy.get('#mail').type('ferman@dolnikov.ru'); //Ввели логин
        cy.get('#loginButton').should('be.disabled'); //Кнопка войти некликабельна
        cy.get('#pass').type('iLoveqastudio1'); //Ввели неверный пароль
        cy.get('#loginButton').should('be.enabled'); //Кнопка войти некликабельна
        cy.get('#loginButton').click(); //Нажали кнопку входа
        cy.get('#messageHeader').should('be.visible'); //Проверили что текст виден
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Совпадение текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Кнопка крестик пристствует
    
    })

    it('Ошибка валидации логина', function () {
        cy.visit('https://login.qa.studio/'); // Посетили сайт
        cy.get('#mail').type('germandolnikov.ru'); //Ввели логин с ошибкой валидации
        cy.get('#pass').type('iLoveqastudio1'); //Ввели пароль
        cy.get('#loginButton').click(); //Нажали кнопку входа
        cy.get('#messageHeader').should('be.visible'); //Проверили что текст виден
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //Совпадение текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Кнопка крестик пристствует
    })



it('Cтрочные буквы в логине', function () {
        cy.visit('https://login.qa.studio/'); // Посетили сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); //Ввели логин с ошибкой валидации
        cy.get('#pass').type('iLoveqastudio1'); //Ввели пароль
        cy.get('#loginButton').click(); //Нажали кнопку входа
        cy.get('#messageHeader').should('be.visible'); //Проверили что текст виден
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Совпадение текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Кнопка крестик пристствует
    })
    })