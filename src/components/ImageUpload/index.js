import React,{useState} from 'react'
import ExtendDiv from "../ExtendDiv";
import { Upload, message,Button } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import {useHistory} from 'react-router-dom'
import S3 from 'react-aws-s3'

const { Dragger } = Upload;


const config = {
  bucketName: 'communityprofiles',
  region: 'us-east-2',
  accessKeyId: 'AKIAYXLDATMMGOEPVI75',
  secretAccessKey: 'Q8ISLKJzT+PtwukCKSD5vKFAqxga3khOsIC5ayzQ',
  s3Url: 'https:/your-custom-s3-url.com/', /* optional */
}
const ReactS3Client = new S3(config);


  


const ImageUpload=()=>{
const history=useHistory()

const skip=()=>{
  history.push("/index/dashboard")
}
const props = {
  name: 'file',
  multiple: false,
  onChange(info){
    const { status } = info.file;
    if (status !== 'uploading') {
      ReactS3Client
    .uploadFile(info.file.originFileObj)
    .then(response => console.log(response))
    .catch(err => console.error(err))
    }
    if (status ==='done') {
      message.success(`${info.file.name} file uploaded successfully.`);
      history.push("/index/dashboard")
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
      console.log(info.file.originFileObj)
    }
  },
  onDrop(e){
    
  },
  
  beforeUpload(file){
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
    return null
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
    return null
  }
  
  return isJpgOrPng && isLt2M;
}
};


  return(
<ExtendDiv>
<Dragger {...props}>
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text">
      Click or Drag file here to Upload
      </p>
    <p className="ant-upload-hint">
      This action can be skip
    </p>
</Dragger>
<Button shape='round' size={'large'} type={'primary'} onClick={skip}
 style={{
   margin:'20px',
   float:'right'
 }}
>Skip</Button>
</ExtendDiv>


  )
}
export default ImageUpload