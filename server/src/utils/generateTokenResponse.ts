import jwt from 'jsonwebtoken';

const generateTokenResponse: any = (user: any) => {
  
  const token = jwt.sign({
    email:user.email, isAdmin:user.isAdmin
  }, 'someRandomText', {
    expiresIn: '30d'
  });

  user.token = token;
  return user;
}

export default generateTokenResponse;