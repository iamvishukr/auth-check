import { PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE, WELCOME_TEMPLATE } from "./emailTemplate.js";
import { sender, transport } from "./mailltrap.config.js";
export const sendVerificationEmail = async (email, verificationToken) => {
  try {
    const response = await transport.sendMail({
      from: sender,
      to: email,
      subject: "Verification Code",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
      category: "Email verification",
    });
    console.log("Email verification sent successfully", response);
  } catch (error) {
    console.log("Error sending verification", error);
    throw new Error(`ERROR sending verification email: ${error.message}`);
  }
};

export const sendWelcomeEmail = async (email, name) => {
  try {
    const response = await transport.sendMail({
      from: sender,
      to: email,
      subject: 'Welcome to DevMatch',
      html: WELCOME_TEMPLATE.replace("{{user_name}}", name), 
      category: 'Welcome Email',
    });
    console.log("Welcome email sent successfully", response);
  } catch (error) {
    console.log("Error sending welcome email", error);
    throw new Error(`ERROR sending welcome email: ${error.message}`);
  }
};

export const sendPasswordResetEmail = async (email, resetURL) => {
  try {
    const response = await transport.sendMail({
      from: sender,
      to: email,
      subject: 'Forgot Password',
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
      category: "Password Reset",
    });
    console.log("Password reset email sent successfully", response);
  } catch (error) {
    console.error("Error sending password reset email",error)
    throw new Error(`Error sending password reset email: ${error.message}`)
  }
};

export const sendResetSuccessEmail = async (email)=>{
  try {
    const response = await transport.sendMail({
      from: sender,
      to: email,
      subject: "Password Reset Successful",
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
      category: "Password Reset",
    })
    console.log("Password reset successfully", response);
  } catch (error) {
    console.error("Error during reset password",error)
    throw new Error(`Error during reset password: ${error.message}`)
  }
}