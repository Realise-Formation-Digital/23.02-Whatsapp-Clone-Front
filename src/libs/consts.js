const urls = {
    message: 'messages/',
    userLogin: 'users/login',
    roomsByUser: 'rooms/all/' // ajouter le username de suite
}

const defaultUrl = 'http://localhost:3001/';



const gradientStyle = {
    backgroundColor: '#ffe69b',
    backgroundImage: 'conic-gradient(#ffe683, #86f3fffb, #c9febcfb)',
    boxShadow: '-2px 1px 5px 1px #c0bfc4'  
  };

const socketServerUrl = 'http://localhost:3000';


export {urls, defaultUrl, gradientStyle, socketServerUrl}