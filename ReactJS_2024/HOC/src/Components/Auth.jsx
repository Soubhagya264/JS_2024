/*eslint-disable*/
const Auth = (Component) => {
    const isAuthenticated = true;
    return function(props) {
        if (isAuthenticated) {
            return <Component {...props} />
        }
        else {
            return <p>Please login</p>
        }
    }
}
export default Auth;
