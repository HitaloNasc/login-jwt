export class Helper {
  public validateEmail = (email: string): Boolean => {
    const emailRegex = /\S+@\S+\.\S+/;
    const isValidEmail = emailRegex.test(email);
    return isValidEmail;
  };

  public validatePassword = (password: string) => {
    // capital letter
    const capitalRegex = /[A-Z]/;
    const hasCapitalLetter = capitalRegex.test(password);
    // lowercase latter
    const lowercaseRegex = /[a-z]/;
    const hasLowerCaseLatter = lowercaseRegex.test(password);
    // number
    const numberRegex = /[0-9]/;
    const hasNumber = numberRegex.test(password);
    // special caracter
    const specialRegex = /[!|@|#|$|%|^|&|*|(|)|-|_]/;
    const hasSpecialCaracter = specialRegex.test(password);
    //
    const isValidPassword = hasCapitalLetter || hasLowerCaseLatter || hasNumber || hasSpecialCaracter;
    return isValidPassword;
  };
}
