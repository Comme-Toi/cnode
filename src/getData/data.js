
import axios from 'axios'

/* axios的基本配置 */
let $http = axios.create({
    baseURL: 'https://cnodejs.org/api/v1',
    timeout: 5000,
    headers: {'X-Custom-Header': 'foobar'}
})

/* 请求数据 */
function getData(options){

     let newOptions = Object.assign({
        tab:'all',
        limit:20,
        page:1
    },options);

    return $http({
        url:'/topics',
        params:newOptions
    });
}

function getDetailData(id) {
      return $http.get('/topic/' + id);
}

export {getData,getDetailData}


