import md5 from "md5";

const gravatar = (email) => {
    const base = 'https://gravatar.com/avatar';
    const formattedEmail = email.trim().toLowerCase()
    const hash = md5(formattedEmail, {encoding: 'binary'})
    const url = `${base}/${hash}?d=identicon`
    return url
}

export default gravatar