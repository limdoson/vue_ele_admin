/*
 * @Author: leem
 * @Date: 2020-06-07 18:55:21
 * @LastEditTime: 2020-06-11 23:55:48
 * @Description: file content
 */ 

import request from '@u/axios/index'
export const testApi = params => request.get('/api/project/getProject', {params})