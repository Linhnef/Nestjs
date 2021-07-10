import * as bcrypt from 'bcrypt';

export const encoding = async (password : string) => {
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password,salt);

    return { salt,hashPassword }
}