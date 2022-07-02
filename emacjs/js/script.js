console.log(`--------------------------------`);
let promiseF = new Promise((resolve, reject)=>{
    let aproboElCurso=false;
    if(aproboElCurso){
        resolve(`Exitos ud aprobo el curso ...`);
    }else{
        reject(`Lamentablemente no aprobo el curso`);
    }
});

promiseF.then((valor)=>{
    console.log(valor);
}).catch((error)=>{
    console.log(error);
});


// other example
const downloadMusic=(url, callback)=> {
    console.log(`Started MP3 file ... `);
    setTimeout(()=>{
        console.log(` Download MP3 file is completed from ${url}..!!`);
        callback(url);
    },2000);
}

const downloadProcess=(url)=>{
    console.log(`Downloading in process from ${url}`);
}

let url = 'https://www.google.com';
downloadMusic(url, downloadProcess);
//downloadProcess(url);

