interface IAuthParam {
  username: string;
  password: string;
  browser_id: string;
  session_id: string;
  browser_name: string;
  browser_version: string;
}

interface IAuthCodeInfo {
  authorization_code: string;
  redirect_url: string;
}

interface ITokenInfo {
  access_token: string;
  refresh_token: string;
  refresh_token_expire_timestamp: string;
  user_type: string;
  user_id: string;
  enc_username: string;
}
