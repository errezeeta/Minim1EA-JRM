import mongoose, { Schema, Document} from 'mongoose';

//Primeramente creamos una interfaz con los datos del modelo
//es aconsejable exportar la interfaz para poder usarla en otros archivos

export interface IVacuna extends Document {
    id: String;
    nombre: String;
    descripcion: String;
    tecnologia: String;
    fechaAceptacion: String;
}
//Cremaos un schema y lo asignamos al tipo de la interfaz anterior
const vacunaSchema = new Schema<IVacuna>(
    {
  //Definimos las propiedades que pusimos antes en la interfaz
    
      nombre: { type: String, required: true },
      id: {type:String, required: true},
      descripcion: { type: String, required: true },
      tecnologia: { type: String, required: true},
      fechaAceptacion: { type: String, required:false},
    },
  //podemos pasar otro objeto de manera opcional con otras propiedades que pone la librería
    { timestamps: true }
  );
// definimos un modelo que es lo que usaremos para hacer queries a la base de datos y lo que tendrá toddas las propiedades definidas antes. 

export default mongoose.model<IVacuna>('Vacuna', vacunaSchema);