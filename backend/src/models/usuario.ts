import mongoose, { Schema, Document} from 'mongoose';
import {IVacuna} from './vacuna';
//Primeramente creamos una interfaz con los datos del modelo
//es aconsejable exportar la interfaz para poder usarla en otros archivos

export interface IUsuario extends Document {
    id: String;
    username: String;
    password: String;
    email: String;
    vacunas: IVacuna['nombre']
}
//Cremaos un schema y lo asignamos al tipo de la interfaz anterior
const usuarioSchema = new Schema<IUsuario>(
    {
  //Definimos las propiedades que pusimos antes en la interfaz
      id: { type: String, required: true },
      username: { type: String, required: true },
      password: { type: String, required: true},
      email: { type: String, required:false},
      vacunas: {type: String, required: false}
    },
  //podemos pasar otro objeto de manera opcional con otras propiedades que pone la librería
    { timestamps: true }
  );
// definimos un modelo que es lo que usaremos para hacer queries a la base de datos y lo que tendrá toddas las propiedades definidas antes. 

export default mongoose.model<IUsuario>('Usuario', usuarioSchema);