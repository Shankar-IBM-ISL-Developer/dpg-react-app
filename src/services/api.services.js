import axios from 'axios';

const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;

export function loginByCred(formData) {
    return new Promise(function (resolve, reject) {
        axios({
            method: 'POST',
            url: API_DOMAIN + '/login/cred',
            data: {
                "clusterUrl": formData.cluster_url,
                "username": formData.username,
                "password": formData.password
            },
        }).then(res => {
            if (res.data && res.data.result && res.data.result === 'Success') {
                resolve(res.data)
            } else {
                reject(res.data)
            }
        }).catch(error => {
            reject({ error });
        })
    })
}

export function loginByToken(formData) {
    return new Promise(function (resolve, reject) {
        axios({
            method: 'POST',
            url: API_DOMAIN + '/login/token',
            data: {
                "clusterUrl": formData.cluster_url,
                "token": formData.token
            },
        }).then(res => {
            if (res.data && res.data.result && res.data.result === 'Success') {
                resolve(res.data)
            } else {
                reject(res.data)
            }
        }).catch(error => {
            reject({ error });
        })
    })
}

export function buildImageByGit(formData) {
    return new Promise(function (resolve, reject) {
        axios({
            method: 'POST',
            url: API_DOMAIN + '/packageCode',
            data: {
                "language": formData.language,
                "sourceLocation": formData.sourceLocation,
                "imageName": formData.imageName
            },
        }).then(res => {
            if (res.data && res.data.result && res.data.result === 'Build Success') {
                resolve(res.data)
            } else {
                reject(res.data)
            }
        }).catch(error => {
            reject({ error });
        })
    })
}
export function buildImageByWorkspace(formData) {
    return new Promise(function (resolve, reject) {
        axios({
            method: 'POST',
            url: API_DOMAIN + '/packageCode',
            data: {
                "language": formData.language,
                "sourceLocation": formData.sourceLocation,
                "imageName": formData.imageName
            },
        }).then(res => {
            if (res.data && res.data.result && res.data.result === 'Success') {
                resolve(res.data)
            } else {
                reject(res.data)
            }
        }).catch(error => {
            reject({ error });
        })
    })
}

export function pushImage(formData) {
    return new Promise(function (resolve, reject) {
        axios({
            method: 'POST',
            url: API_DOMAIN + '/pushPackage',
            data: {
                "imageName": formData.imageName,
                "project": formData.project
            },
        }).then(res => {
            if (res.data && res.data.result && res.data.result === 'Package push successful') {
                resolve(res.data)
            } else {
                reject(res.data)
            }
        }).catch(error => {
            reject({ error });
        })
    })
}

export function deploy(formData) {
    return new Promise(function (resolve, reject) {
        axios({
            method: 'POST',
            url: API_DOMAIN + '/deployPackage',
            data: {
                "imageName": formData.imageName,
                "project": formData.project
            },
        }).then(res => {
            if (res.data && res.data.result && res.data.result === 'App Deployed') {
                resolve(res.data)
            } else {
                reject(res.data)
            }
        }).catch(error => {
            reject({ error });
        })
    })
}