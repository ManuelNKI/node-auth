const Validators = require("../../../config/validators");


class RegisterUserDto {
  private constructor(
    public name: string,
    public email: string,
    public password: string
  ) {}

  static create( object: { [ key: string ]: any; } ): [ string | null, RegisterUserDto? ]{

    const { name, email, password} = object;

    if ( !name ) return ['Missing name'];
    if ( !email ) return ['Missing email'];
    if ( !Validators.email.test(email) ) return ['Invalid email format'];
    if ( !password ) return ['Missing password'];
    if ( password.length < 6 ) return ['Password is too short'];

    return [
      null,
      new RegisterUserDto(name, email.toLowerCase(), password)
    ];
  }
}

module.exports = RegisterUserDto;