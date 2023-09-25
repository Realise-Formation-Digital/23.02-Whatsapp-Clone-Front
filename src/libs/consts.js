const urls = {
    message: 'messages/',
    userLogin: 'users/login',
    roomsByUser: 'rooms/all/' // ajouter le username de suite
}

const defaultUrl = 'http://localhost:3001/';

const gradientStyle = {
    backgroundColor: '#ffe69b',
    backgroundImage: 'conic-gradient(#ffe683, #86f3fffb, #c9febcfb)',
    boxShadow: '-1px 1px 4px 1px #ba61358b'  
  };

const socketServerUrl = 'http://localhost:3000';
export {urls, defaultUrl, gradientStyle, socketServerUrl}