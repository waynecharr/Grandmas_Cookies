export const getCookiesBookIds = () => {
    const savedCookieIds = localStorage.getItem('saved_cookies')
      ? JSON.parse(localStorage.getItem('saved_cookies'))
      : [];
  
    return savedCookieIds;
  };
  
  export const saveCookieIds = (cookieIdArr) => {
    if (cookieIdArr.length) {
      localStorage.setItem('saved_cookies', JSON.stringify(cookieIdArr));
    } else {
      localStorage.removeItem('saved_cookies');
    }
  };
  
  export const removeCookieId = (cookieId) => {
    const savedCookieIds = localStorage.getItem('saved_cookies')
      ? JSON.parse(localStorage.getItem('saved_cookies'))
      : null;
  
    if (!savedCookieIds) {
      return false;
    }
  
    const updatedSavedCookieIds = savedCookieIds?.filter((savedCookieId) => savedCookieId !== cookieId);
    localStorage.setItem('saved_cookies', JSON.stringify(updatedSavedCookieIds));
  
    return true;
  };