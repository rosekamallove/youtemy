import functions from 'firebase-functions';
import admin from 'firebase-admin';
import sgMail from '@sendgrid/mail';
import { user } from 'firebase-functions/lib/providers/auth';

admin.initializeApp();
const db = admin.firestore();

const API_KEY = functions.config().sendgrid.key;
const TEMPLATE_ID = functions.config().sendgrid.template;
sgMail.setApiKey(API_KEY);

export const genericEmail = functions.https.onCall(async (data, context) => {

    if (!context.auth && !context.auth.token.email) {
        throw new functions.https.HttpsError('failed-precondition', 'Must be logged with an email address');
    }

    const msg = {
        to: context.auth.token.email,
        from: 'hello@fireship.io',
        templateId: TEMPLATE_ID,
        dynamic_template_data: {
            subject: data.subject,
            name: data.text,
        },
    };

    await sgMail.send(msg);

    // Handle errors here

    // Response must be JSON serializable
    return { success: true };

});
