export const Login = () => {

  const onLogin = () => {
    localStorage.setItem('token', 'a1b2c3d4');
  };

  return (
    <button onClick={onLogin}>LOGIN</button>
  )
};