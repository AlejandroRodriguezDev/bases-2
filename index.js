const app = require("./public/src/app");

app.listen(app.get("port"),()=>{ 
    console.log('Servidor corriendo en el puerto',app.get("port"))}
);
