const { createContext, useContext, useState } = require('react');

export const CurrentUserContext = createContext(null);

const useCurrentUser = () => {
    const [currentUser, setCurrentUser] = useState(null);

    const loginUser = (userData) => setCurrentUser(() => userData);

    const logoutUser = () => setCurrentUser(null);

    return { currentUser, loginUser, logoutUser };
};

export const useCurrentUserContext = () => useContext(CurrentUserContext);

export const CurrentUserContextProvider = (props) => {
    const { children } = props;

    const currentUser = useCurrentUser();

    return (
        <CurrentUserContext.Provider value={currentUser}>
            {children}
        </CurrentUserContext.Provider>
    );
};
