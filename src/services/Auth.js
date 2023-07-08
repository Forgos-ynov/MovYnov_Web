export default function checkTokenIsAdmin() {
    const token = localStorage.getItem('token');

    if (token !== null && token !== undefined && token && token !== '') {
        const jsonString = atob(token);
        const parsedObject = JSON.parse(jsonString);

        if (typeof parsedObject.exp !== 'undefined') {
            const expiration = parsedObject.exp;
            const now = Math.floor(Date.now() / 1000);
            if (expiration < now) {
                return false
            } else {
                if (typeof parsedObject.roles !== 'undefined') {
                    const roles = parsedObject.roles;
                    const isAdmin = roles.includes('ROLE_ADMIN');
                    return !!isAdmin;
                }
            }
        }
    }

    return false;
}
