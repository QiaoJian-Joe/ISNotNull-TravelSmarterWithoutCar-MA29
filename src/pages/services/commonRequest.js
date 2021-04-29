import { extend } from 'umi-request';
import { notification } from 'antd';
import router from 'umi/router';

const codeMessage = {
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '用户没有权限（令牌、用户名、密码错误）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
};

/**
 * 异常处理程序
 */
const errorHandler = error => {
    const { response = {} } = error;
    const errortext = codeMessage[response.status] || response.statusText;
    const { status, url } = response;

    if (status === 401) {
        // notification.error({
        //   message: '未登录或登录已过期，请重新登录。',
        // });
        // @HACK
        /* eslint-disable no-underscore-dangle */
        router.push('/user/login');
        return;
    }
    // notification.error({
    //   message: `请求错误 ${status}: ${url}`,
    //   description: errortext,
    // });
    // environment should not be used
    // if (status === 403) {
    //   router.push('/exception/403');
    //   return;
    // }
    // if (status <= 504 && status >= 500) {
    //   router.push('/exception/500');
    //   return;
    // }
    // if (status >= 404 && status < 422) {
    //   router.push('/exception/404');
    // }
};

/**
 * 配置request请求时的默认参数
 */
const request = extend({
    errorHandler, // 默认错误处理
    credentials: 'include', // 默认请求是否带上cookie
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
});
// request.interceptors.response.use((response, options) => {
//     const contentType = response.headers.get('Content-Type');
//     response.headers.set('access-control-allow-origin', 'http://192.168.74.35:8000/')
//     console.log(response)
//     return response;
// });

export default request;

export const formItemLayout =
{
    labelCol: {
        // xs: { span: 24 },
        sm: { span: 5 },
        md: { span: 6 },// >768
        lg: { span: 8 },// >992
        xl: { span: 9 },// >1200
        xxl: { span: 8 }// ≥1600px
    },
    wrapperCol: {
        // xs: { span: 24 },
        sm: { span: 12 },
        md: { span: 10 },
        lg: { span: 15 },
        xl: { span: 14 },
        xxl: { span: 15 }
    },
};

// export const prefix = 'http://weipeng2.natapp1.cc/pipo/service';
// export const prefixTest = 'http://192.168.74.89:8633';
// export const prefixTest = 'http://192.168.74.49:8641';



// export const prefix = 'http://192.168.3.164';
// export const prefixLogin = `http://192.168.3.93:8805`;
// export const prefixFFMS = `${prefix}:8640`;

export const prefix = 'http://192.168.3.93';
export const serviceUrl = `${prefix}/service`;


// export const prefixFFMS = `${prefixTest}`;

export async function queryData() {

    const request = extend({
        errorHandler, // 默认错误处理
        credentials: 'include', // 默认请求是否带上cookie
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:8099',
            'Access-Control-Allow-Methods': "OPTIONS, GET, PUT, POST, DELETE",
            'Access-Control-Allow-Headers': 'x-requested-with, accept, origin, content-type,Referer,sec-ch-ua,sec-ch-ua-mobile,User-Agent,X-Access-Token,X-Custom-Header',
            'Access-Control-Allow-Credentials': 'true',
            'X-Custom-Header': 'json',
            'X-Requested-With': 'XMLHttpRequest',
            'sec-fetch-dest': 'embed'
            // 'Access-Control-Allow-Origin': 'http://192.168.74.35:8000/'
        },
    });
    // params['HTTP_SYSTEM_CODE'] = 'ffms'

    // request.interceptors.response.use((response, options) => {
    //     const contentType = response.headers.get('Content-Type');
    //     response.headers.set('access-control-allow-origin', 'http://192.168.74.35:8000/')
    //     console.log(response)
    //     return response;
    // });

    return request(`http://localhost:8099/service/hello`, {
        method: 'GET',
        responseType: 'x-www-form-urlencoded'
        // data: {
        //     "batch": [
        //         {
        //             "query": "Main Street",
        //             "country": "US",
        //             "region": "Minnesota"
        //         },
        //         {
        //             "query": "Main Street",
        //             "country": "US",
        //             "region": "Illinois"
        //         },
        //         {
        //             "query": "Main Street",
        //             "country": "US",
        //             "region": "Missouri"
        //         }
        //     ]
        // },
    })
}