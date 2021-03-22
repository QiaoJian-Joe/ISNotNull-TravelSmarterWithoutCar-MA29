
import {
    queryData,

} from '../services/commonRequest';


export default {
    namespace: 'map',
    state: {

        //map
        map: {

        }
    },

    effects: {
        // 查询通用方法
        * query({ payload }, { call, put }) {
            console.log('调用成功')
            const response = yield call(queryData, payload);

            yield put({
                type: 'queryinfoByID',
            });
        },





    },
    reducers: {
        // 刷新通用方法
        queryinfoByID(state, action) {
            let data = action.payload.data;
            return {
                ...state,
                [action.key]: {
                    list: data.list,
                    pagination: {
                        total: data.total,
                        pageSize: data.pageSize,
                        current: data.pageNum,
                        test1: 'test',
                    },
                },
            };
        },
        // 刷新通用方法
        queryinfoObj(state, action) {
            let data = action.payload.data;
            return {
                ...state,
                [action.key]: {
                    ...data,
                },
            };
        },

        // 直接接response
        queryAllInfo(state, action) {
            let data = action.payload;
            return {
                ...state,
                [action.key]: {
                    ...data,
                },
            };
        },

        queryDataList(state, action) {
            let data = action.payload.data;
            return {
                ...state,
                [action.key]: {
                    list: data
                }
            };
        },
    },
};
