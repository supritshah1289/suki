/**
 * <p> On every request the authorization header must be attached to authenticate user's request</p>
 * <p> The access token will be removed on logout. Once user logout, further request will not be succesfully serve user with request </p>
 */
export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user.accessToken) {
    return { Authorization: "Bearer " + user.accessToken };
  } else {
    return {};
  }
}
