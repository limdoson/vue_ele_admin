/*
 * @Author: leem
 * @Date: 2020-06-07 18:55:21
 * @LastEditTime: 2020-06-07 19:01:28
 * @Description: file content
 */ 

import request from '@u/axios/index'

export const login = params => request.post('/api/login', params)