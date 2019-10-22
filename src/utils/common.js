import {
    post
  } from './request'

export const uploadPic = param => post('/v1/image-utils/ext/upload', param)