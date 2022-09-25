import * as Yup from 'yup';
const requiredErrorMessage = 'Vui lòng điền đầy đử thông tin';
const validPhoneMessage = 'Vui lòng điền đúng định dạng số điện thoại';
const validEmailMessage = 'Vui lòng điền đúng định dạng email';
const validPassMessage = 'Mật khẩu phải có tối thiểu tám ký tự, ít nhất một chữ cái và một số';
const confirmPassMessage = 'Mật khẩu không trùng khớp';

const regexPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
//Tối thiểu tám ký tự, ít nhất một chữ cái và một số:
const regexPhone = /([0][3|5|7|8|9])+([0-9]{9})\b/g;
//
const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validateLoginSchema = Yup.object().shape({
    phone: Yup.string().matches(regexPhone, validPhoneMessage).required(requiredErrorMessage),
    password: Yup.string().matches(regexPass, validPassMessage).required(requiredErrorMessage),
});

const validateRegisterSchema = Yup.object().shape({
    phone: Yup.string().required(requiredErrorMessage).matches(regexPhone, validPhoneMessage),
});

const validateConfirmPasswordSchema = Yup.object().shape({
    password: Yup.string()
        .min(8, validPassMessage).required(requiredErrorMessage).matches(regexPass, validPassMessage),
    confirm_password: Yup.string()
        .min(8, validPassMessage).required(requiredErrorMessage)
        .matches(regexPass, validPassMessage).oneOf([Yup.ref('password'), null], confirmPassMessage),
});

const validateInformationSchema = Yup.object().shape({
    name: Yup.string().required(requiredErrorMessage),
    email: Yup.string().matches(regexEmail, validEmailMessage),
})

export {
    validateLoginSchema,
    validateRegisterSchema,
    validateConfirmPasswordSchema,
    validateInformationSchema
}