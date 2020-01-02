import axios from 'axios'
import {Modal} from 'antd'

axios.defaults.baseURL = ''

export default class Axios {
    static ajax(options){
        return new Promise((resolve,reject) => {
            axios({
                url: options.url,
                method: 'get',
                timeout: 5000,
            }).then((response) => {
                if(response.status === 200){
                    let res = response.data;
                    resolve(res);
                }else{
                    Modal.info({
                        title: "警告",
                        content: "请求失败"
                    })
                    reject(response.data);
                }
            }).catch((err) => {
                Modal.info({
                    title: "警告",
                    content: "请求失败"
                })
            })
        })
    }
}
