const urls = {
    message: 'messages/',
    userLogin: 'users/login',
    roomsByUser: 'rooms/all/' // ajouter le username de suite
}

const defaultUrl = 'http://localhost:3001/';

const gradientStyle = {
  backgroundImage: 'conic-gradient(#fef1bcfb, #fa98dead, #86f3fffb)', 
  boxShadow: '-1px 2px 6px 2px #ad23bc71'  
  };

const socketServerUrl = 'http://localhost:3000';
export {urls, defaultUrl, gradientStyle, socketServerUrl}