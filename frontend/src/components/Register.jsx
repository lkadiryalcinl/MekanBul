import Header from "./Header";
import Button from "./Button";

function Register() {
  const performClick = (evt) => {
    evt.preventDefault();
    console.log(evt);
  }

  return (
    <>
      <Header headerText="Kayıt Ol" motto="Hemen Kayıt Ol Ve Yakınındaki Mekanları Gör..." />
      <div className="col-xs-12 col-md-6">
        <form className="form-horizontal" id="Register" onSubmit={performClick}>
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
            <label className="col-xs-10 col-sm-2 control-label">E-mail:</label>
            <div className="col-xs-12 col-sm-10">
              <input
                className="form-control"
                name="email"
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
          <div className="form-group">
            <label className="col-xs-10 col-sm-2 control-label">Şifre Tekrar:</label>
            <div className="col-xs-12 col-sm-10">
              <input
                className="form-control"
                name="passwordAgain"
              />
            </div>
          </div>
          <Button name={"Kayıt Ol"} type={"primary"}/>
        </form>
      </div>
    </>
  );
}

export default Register;
