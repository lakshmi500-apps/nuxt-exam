export default defineNuxtPlugin((nuxtApp)=>{
    return{
        provide:{
            hello :(msg:String)=>`hello ${msg}!`,
        },
    };
});