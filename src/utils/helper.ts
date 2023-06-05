import * as bcrypt from 'bcrypt'



export const hashPasswrod = async (rowPassword: string) => {
    const saltOrRounds = await bcrypt.genSalt()

    return await bcrypt.hash(rowPassword, saltOrRounds)
}

export const comparePassword = async (rowPassword: string, password: string) => {
    return await bcrypt.compare(rowPassword, password)
}