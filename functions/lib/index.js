"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable max-len */
/* eslint-disable operator-linebreak */
/* eslint-disable indent */
/* eslint-disable object-curly-spacing */
/* eslint-disable quote-props */
/* eslint-disable quotes */
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const axios_1 = require("axios");
const admin = require("firebase-admin");
const app = express();
app.use(cors({ origin: true }));
const getToken = async (code) => {
    const body = {
        grant_type: 'authorization_code',
        client_id: process.env.KAKAO_RES_API_KEY || '',
        redirect_uri: process.env.KAKAKO_REDIRECT_URI || '',
        code,
    };
    const res = await axios_1.default.post('https://kauth.kakao.com/oauth/token', new URLSearchParams(body));
    return res.data;
};
const getKakaoUser = async (token) => {
    const res = await axios_1.default.get('https://kapi.kakao.com/v2/user/me', {
        headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
};
const getAdminApp = () => {
    const serviceAccountKey = JSON.parse(process.env.SERVICE_ACCOUNT_KEY || '');
    const app = !admin.apps.length
        ? admin.initializeApp({
            credential: admin.credential.cert(serviceAccountKey),
        })
        : admin.app();
    return app;
};
const updateOrCreateUser = async (user) => {
    var _a;
    const app = getAdminApp();
    const auth = admin.auth(app);
    const kakaoAccount = user.kakao_account;
    const properties = {
        uid: `kakao:${user.id}`,
        porvider: 'KAKAO',
        displayName: (_a = kakaoAccount === null || kakaoAccount === void 0 ? void 0 : kakaoAccount.profile) === null || _a === void 0 ? void 0 : _a.nickname,
        email: kakaoAccount === null || kakaoAccount === void 0 ? void 0 : kakaoAccount.email,
    };
    try {
        return await auth.updateUser(properties.uid, properties);
    }
    catch (error) {
        if (error.code === 'auth/user-not-found') {
            return await auth.createUser(properties);
        }
        throw error;
    }
};
app.post('/kakao', async (req, res) => {
    const { code } = req.body;
    if (!code) {
        return res.status(400).json({
            code: 400,
            message: 'code is a required parameter',
        });
    }
    const response = await getToken(code);
    const token = response.access_token;
    const kakaoUser = await getKakaoUser(token);
    const authUser = await updateOrCreateUser(kakaoUser);
    const firebaseToken = await admin.auth().createCustomToken(authUser.uid, { provide: 'KAKAO' });
    return res.status(200).json({
        kakaoUser: Object.assign(Object.assign({}, kakaoUser), { id: authUser.uid }),
        firebaseToken,
    });
});
exports.auth = functions
    .runWith({ secrets: ['SERVICE_ACCOUNT_KEY'] })
    .region('asia-northeast3')
    .https.onRequest(app);
//# sourceMappingURL=index.js.map