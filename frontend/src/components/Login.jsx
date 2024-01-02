import Header from "./Header";
import Button from "./Button"

function Login() {
  const performClick = (evt) => {
    evt.preventDefault();
    console.log(evt);
  }

  return (
    <>
      <Header headerText="Giriş Yap" motto="Zaten Bir Hesabınız Var Mı?" />
      <div className="col-xs-12 col-md-6">
        <form className="form-horizontal" id="Login" onSubmit={performClick}>
          <div className="form-group">
            <label className="col-xs-10 col-sm-2 control-label">Kullanıcı Adı:</label>
            <div className="col-xs-12 col-sm-10">
              <input
                className="form-control"
                name="name"
              />
            </div>
          </div>
          <div className="form-group">
            <label className="col-xs-10 col-sm-2 control-label">Şifre:</label>
            <div className="col-xs-12 col-sm-10">
              <input
                className="form-control"
                name="password"
              />
            </div>
          </div>
          <Button name={"Giriş Yap"} type={"primary"}/>
        </form>
      </div>

    </>
  );
}

export default Login;
