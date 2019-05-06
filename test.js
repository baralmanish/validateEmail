const app = require('./index');

process.env.NODE_ENV = 'test';

describe('Check Environment', () => {
    it('checks environment', async () => {
        expect(process.env.NODE_ENV).toEqual('test')
    })
});

describe('Check Invalid Email Format', () => {
    it('checks `test@kljf@.com`', async () => {
        email = 'test@kljf@.com';
        const response = app.email(email);
        expect(response.success).toBe(false);
        expect(response.message).toEqual(`'${email}' is invalid email address`);
    });

    it('checks `test@.com`', async () => {
        email = 'test@.com';
        const response = app.email(email);
        expect(response.success).toBe(false);
        expect(response.message).toEqual(`'${email}' is invalid email address`);
    });
});

describe('Check Invalid Email TLD', () => {
    it('checks `test@test.coms`', async () => {
        email = 'test@test.coms';
        const response = app.email(email);
        expect(response.success).toBe(false);
        expect(response.message).toEqual(`'.coms' is not valid generic domain extension`);
    });

    it('checks `test@test.com.nps`', async () => {
        email = 'test@test.com.nps';
        const response = app.email(email);
        expect(response.success).toBe(false);
        expect(response.message).toEqual(`'.com.nps' is not valid country domain extension`);
    });

    it('checks `test@google.np`', async () => {
        email = 'test@google.np';
        const response = app.email(email);
        expect(response.success).toBe(false);
        expect(response.message).toEqual(`'.np' is not valid generic domain extension`);
    });
});

describe('Check Invalid Email Host', () => {
    it('checks `test@google1.com`', async () => {
        email = 'test@google1.com';
        const response = app.email(email, true);
        expect(response.success).toBe(false);
        expect(response.message).toEqual(`google1.com is not a valid email host`);
    });

    it('checks `test@exmaple11.com.au`', async () => {
        email = 'test@exmaple11.com.au';
        const response = app.email(email, true);
        expect(response.success).toBe(false);
        expect(response.message).toEqual(`exmaple11.com.au is not a valid email host`);
    });
});

describe('Check Valid Emails', () => {
    it('checks `test@google.com`', async () => {
        email = 'test@google.com';
        const response = app.email(email);
        expect(response.success).toBe(true);
        expect(response.message).toEqual(`'${email}' is valid email address`);
    });

    it('checks `test@google.com.au`', async () => {
        email = 'test@google.com.au';
        const response = app.email(email);
        expect(response.success).toBe(true);
        expect(response.message).toEqual(`'${email}' is valid email address`);
    });

    it('checks `test@domains.google`', async () => {
        email = 'test@domains.google';
        const response = app.email(email);
        expect(response.success).toBe(true);
        expect(response.message).toEqual(`'${email}' is valid email address`);
    });

    it('checks `test@outlook.com` with domain hosts', async () => {
        email = 'abc@outlook.com';
        const response = app.email(email, true);
        expect(response.success).toBe(true);
        expect(response.message).toEqual(`'${email}' is valid email address`);
    });
});