import{cpSync,existsSync,mkdirSync,rmSync}from'node:fs';
rmSync('dist',{recursive:true,force:true});mkdirSync('dist');cpSync('public','dist',{recursive:true});console.log('built static RoomLog demo to dist/');
