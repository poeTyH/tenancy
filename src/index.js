import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd'

/* 引入css样式 */
import './css/main.css'
/* 引入工具包 */
import send from './utils/send'
/* 设置全局提示为汉语 */
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn');


class App extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        send.ajax({
            url: '/api/helloworld'
        }).then((res) => {
            console.log(res)
        })
    }

    render() {
        return (
            <div>App</div>
        )
    }
}


ReactDOM.render(
    <ConfigProvider locale={zh_CN}>
        <App />
    </ConfigProvider>,
    document.getElementById('root')
);
