import { http } from '@/plugins/axios'
type UploadResult = { url: string }
type UploadResult_1 = { data: { url: string } }
export default () => {
  /**
   * 图片上传
   * @param data
   * @returns
   */
  function uploadImage(data: FormData, url = `upload/image`) {
    return http.request<UploadResult>({
      url,
      method: 'post',
      data,
    })
  }
  function uploadImage_1(data: FormData, url = `upload/image`) {
    return http.request<UploadResult_1>({
      url,
      method: 'post',
      data,
    })
  }
  return { uploadImage, uploadImage_1 }
}
