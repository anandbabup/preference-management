const DataContext = (function () {

    function saveFormData(formData) {
        var object = {};
        let pmsId = "";
        formData.forEach(function (value, key) {
            object[key] = value;
        });
        var json = JSON.stringify(object);
        console.log(json);
        pmsId = `pms-${object.username}`;
        localStorage.setItem(pmsId, json);
    }

    function login(formData) {
        let loginStatus = false;
        var object = {};
        let loginUser = "";
        let pmsId = "";
        formData.forEach(function (value, key) {
            object[key] = value;
        });

        //get user info
        pmsId = `pms-${object.username}`;
        let user = localStorage.getItem(pmsId);
        let userInfo = JSON.parse(user);
        if (userInfo.password === object.password) {
            loginStatus = true;
        }
        return { isAuthenticated: loginStatus, username: userInfo.username };
    }


    return {
        saveFormData,
        login, 

    }
})();

export default DataContext;